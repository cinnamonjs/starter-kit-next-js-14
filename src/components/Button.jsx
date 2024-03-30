import { cn } from "@/utils/cn"
import { forwardRef } from "react";

// re-use component with parameter input
// children is inside component
// ex. <Button> <p>abcd</p> <Button>; <p>abcd</p> is children of <Button>
export const Button = forwardRef(({ onClick, type, disabled, className, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn("px-2 py-1 capitalize transition duration-150 border border-white rounded-lg hover:bg-white/15 active:scale-95", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
