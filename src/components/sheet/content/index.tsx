import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils";
import { IconButton, Theme } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import { VariantProps, cva } from "class-variance-authority";
import Overlay from "../overlay";

const sheetVariants = cva(
  "fixed z-1 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left md:max-w-md",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right md:max-w-md",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface ContentProps
  extends ComponentPropsWithoutRef<typeof Dialog.Description>,
    VariantProps<typeof sheetVariants> {}

const Content = forwardRef<ElementRef<typeof Dialog.Description>, ContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <Dialog.Portal>
      <Theme asChild>
        <Overlay>
          <Dialog.Content
            ref={ref}
            className={cn(sheetVariants({ side }), className)}
            {...props}
          >
            {children}
            <Dialog.Close asChild className="absolute right-5 top-7">
              <IconButton color="gray" size="2" variant="ghost">
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </Dialog.Content>
        </Overlay>
      </Theme>
    </Dialog.Portal>
  )
);

Content.displayName = Dialog.Description.displayName;

export default Content;
