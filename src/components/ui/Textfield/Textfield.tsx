'use client'

import { FC } from "react"
import { TextfieldProps } from "./Textfield.types"

export const Textfield: FC<TextfieldProps> = ({
    label,
    value,
    onChange,
    onBlur,
    error,
    name,
    type,
    placeholder
}) => {
    return (
        <div
            className="w-full"
        >
            <label
                className="block mb-2 font-medium text-base"
            >
                {label}
            </label>
            <input
                className="w-full rounded-sm bg-indigo-300 h-8 p-2.5 text-indigo-700 focus:ring-indigo-950 focus:border-0 outline-none"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                placeholder={placeholder}
                type={type}
            />
            {error && 
                <span
                    className="text-red-600"
                >
                    {error}
                </span>
            }
        </div>
    )
}