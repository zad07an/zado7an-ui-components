import { ButtonProps } from "./Button.types";

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className=" w-fit h-fit flex items-center gap-1.5 bg-background text-foreground border rounded-md px-4 py-2 cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:pointer-events-auto hover:bg-background/90 transition-all font-medium"
      {...props}
    >
      {children}
    </button>
  );
};
