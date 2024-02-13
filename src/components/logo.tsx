import logo from "@/assets/logo-book.svg";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const logoVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      sign: "absolute gap-4 text-4xl font-bold",
      home: "gap-2 font-bold text-2xl",
    },
  },
});
interface LogoProps
  extends ComponentProps<"div">,
    VariantProps<typeof logoVariants> {
  size?: number;
}

export function Logo({
  className,
  variant,
  size,
  ...props
}: Readonly<LogoProps>) {
  return (
    <div {...props} className={twMerge(logoVariants({ className, variant }))}>
      <img src={logo} width={size} alt="Icone com um coração!" />
      <span className="text-logo">BookWise</span>
    </div>
  );
}
Logo.displayName = "Logo";
