import { Badge, Flex, HoverCard, IconButton, Text } from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { useFormatter, useNow } from "next-intl";
import { ArrowRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";

interface Props extends ComponentProps<typeof Badge> {
  value: number;
  oldValue: number;
  since: number;
}

type Units = {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const unitsInSeconds: Units = {
  weeks: 7 * 24 * 60 * 60,
  days: 24 * 60 * 60,
  hours: 60 * 60,
  minutes: 60,
  seconds: 1,
};

const duration = (oldValue: number) => {
  let remainingSeconds = oldValue;
  const result = {} as Units;

  for (const [unit, seconds] of Object.entries(unitsInSeconds)) {
    const value = Math.floor(remainingSeconds / seconds);
    remainingSeconds -= value * seconds;
    result[unit as keyof Units] = value;
  }

  return result;
};

const formatDuration = ({ weeks, days, hours, minutes, seconds }: Units) => {
  const w = `${weeks}w`;
  const d = `${days}d`;
  const h = `${hours}h`;
  const m = `${minutes}m`;
  const s = `${seconds}s`;

  let result = "";
  if (weeks > 0) result += w;
  if (days > 0) result += d;
  if (hours > 0) result += h;
  if (minutes > 0) result += m;
  if (seconds > 0) result += s;

  return result || "immediate";
};

const DelayedValue: FC<Props> = ({ value, oldValue, since, ...props }) => {
  const format = useFormatter();
  const now = useNow();

  const hasEffect = useMemo(() => {
    return now.getTime() >= since * 1000;
  }, [since, now]);

  const units = useMemo(() => duration(value), [oldValue, format]);
  const oldValueUnits = useMemo(() => duration(oldValue), [oldValue, format]);

  const oldValueComponent = (
    <Badge size="1" variant="soft" {...props}>
      {formatDuration(oldValueUnits)}
    </Badge>
  );

  const valueComponent = (
    <Badge size="1" variant="soft" {...props}>
      {formatDuration(units)}
      {!hasEffect}
    </Badge>
  );

  return (
    <>
      <Flex align="center" className="whitespace-nowrap">
        {!hasEffect && oldValueComponent}
        {!hasEffect && (
          <ArrowRightIcon className="mx-1" width="12" height="12" />
        )}
        {valueComponent}
        {!hasEffect && (
          <HoverCard.Root>
            <HoverCard.Trigger>
              <IconButton size="1" ml="2" variant="ghost" color="gray">
                <InfoCircledIcon />
              </IconButton>
            </HoverCard.Trigger>
            <HoverCard.Content size="1" className="w-64">
              <Text as="span" size="1" className="text-gray-400">
                A delay change has been scheduled from {oldValueComponent} to{" "}
                {valueComponent} and will take effect ~
                {format.relativeTime(since * 1000, now.getTime())}
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>
        )}
      </Flex>
    </>
  );
};

export default DelayedValue;
