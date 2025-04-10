import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-lime-400 bg-background p-2 px-6 text-center font-bold transition-colors duration-300 ease-in-out hover:bg-lime-400",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-lime-400 transition-transform duration-500 ease-in-out group-hover:scale-[100.8] will-change-transform"></div>
        <span className="inline-block font-bold text-lime-400 transition-all duration-500 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 will-change-transform will-change-opacity">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 text-lime-400 transition-all duration-500 ease-in-out group-hover:-translate-x-5 group-hover:opacity-100 group-hover:text-black will-change-transform will-change-opacity will-change-colors font-bold">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
export default InteractiveHoverButton;