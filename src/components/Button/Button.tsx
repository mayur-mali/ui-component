import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl";
};

export default function Button({ variant, size, ...props }: ButtonProps) {
  return <button {...props} className={buttonStyle({ variant, size })} />;
}

const buttonStyle = cva("", {
  variants: {
    variant: {
      primary: "bg-blue-500",
      secondary: "border border-blue-500",
    },
    size: {
      sm: "px-2.5 py-1.5 text-xs font-medium rounded-md hover:text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      md: "px-3 py-2 text-sm font-medium rounded-md hover:text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      lg: "px-4 py-2 text-base  font-medium rounded-md hover:text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      xl: "px-6 py-3 text-base  font-medium rounded-md hover:text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "sm",
  },
});
