import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils";

const Title = forwardRef<
  ElementRef<typeof Dialog.Title>,
  ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));

Title.displayName = Dialog.Title.displayName;

export default Title;
