import { twMerge } from "tailwind-merge";

export const getButtonStyles = (className?: string) => 
    twMerge(
        "bg-primary text-text-dark p-2 w-full h-full rounded-md border-2 border-dark hover:bg-dark hover:border-text-primary duration-200 font-semibold", 
        className
    )