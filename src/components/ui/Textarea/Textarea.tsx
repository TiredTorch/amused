'use client'
import { TextareaProps } from "./Textarea.types"

export const Textarea: TextareaProps = ({
    label, 
    errorText,
    ...props
}) => {
    return (
        <div 
            className="w-full h-full flex flex-col justify-start"
        >
            {label && 
                <label 
                    className="block mb-2 font-medium text-text-dark w-full"
                >
                    {label}
                </label>
            }
            <textarea 
                {...props}
                className="bg-primary border border-dark text-text-dark rounded-lg block w-full p-2.5 placeholder:text-text-primary outline-none resize-none h-full"
            />
            {errorText && 
                <div 
                    className="text-red-600 w-full"
                >
                    {errorText}
                </div>
            }
        </div> 
    )
}