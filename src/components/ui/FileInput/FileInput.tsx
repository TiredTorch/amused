'use client'
import { FileInputProps } from "./FileInput.types"

export const FileInput: FileInputProps = ({
    children,
    ...props
}) => {
    return (
        <div className="flex items-center w-full h-full">
            <label 
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-primary"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg 
                        className="w-8 h-8 mb-4 text-text-dark" 
                        fill="none" 
                        viewBox="0 0 20 16"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    {children}
                </div>
                <input 
                    {...props}
                    type="file"
                    className="hidden text-text-primary"
                />
            </label>
        </div> 
    )
}