import { twMerge } from "tailwind-merge";

export const getInputStyles = (className?: string) => 
    twMerge("bg-primary border border-dark text-text-dark rounded-lg block w-full p-2.5 placeholder:text-text-primary outline-none", className)