import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>){
    const {className,children,...otherProps}=props;
    return(
        <div className={twMerge("inline-flex border border-line-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase item-center",className)} {...otherProps}>
            <span>&#10038;</span>
            <span>{children}</span>
        </div>
    )
}