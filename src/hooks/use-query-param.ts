import { Dispatch, SetStateAction, useState } from "react";
import { parse, ParsedQs, stringify } from "qs";
import { useRouter } from "next/router";

const useQueryParam = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const { asPath, pathname, replace } = useRouter();
  const search = asPath.replace(pathname, "").substring(1);

  const [queryParam, setQueryParam] = useState<T>(
    (parse(search)[key] as unknown as T) ?? initialValue
  );

  const setBindedQueryParam = (setStateAction: SetStateAction<T>) => {
    const parsedSearch = parse(search);
    const newValue = getNewValue(
      setStateAction,
      parsedSearch[key] as unknown as T
    );
    const mergedNewValue = {
      ...parsedSearch,
    };

    if (newValue || typeof newValue === "boolean")
      mergedNewValue[key] = newValue as unknown as ParsedQs;
    else delete mergedNewValue[key]; // Remove param when no value except for explicit falses

    const newSearch = stringify(mergedNewValue);
    replace(`${pathname}?${newSearch}`);
    setQueryParam(newValue);
  };

  const getNewValue = (
    setStateAction: SetStateAction<T>,
    previousValue: T
  ): T => {
    if (setStateAction instanceof Function)
      return setStateAction(previousValue);
    return setStateAction;
  };

  return [queryParam, setBindedQueryParam];
};

export default useQueryParam;
