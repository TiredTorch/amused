'use client'
import { useCallback, useState } from "react"
import { DropdownProps } from "./Dropdown.types"
import ClickAwayListener from "react-click-away-listener"

export const Dropdown: DropdownProps = ({
    options,
    label
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const handleCloseDropdown = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <>
            <ClickAwayListener onClickAway={handleCloseDropdown }>
                <button 
                    className="text-text-dark bg-primary hover:bg-dark hover:border-text-primary duration-200 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    type="button"
                    onClick={handleToggleDropdown}
                >
                    {label}
                    <svg className="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
            </ClickAwayListener>
            {isOpen && 
                <div 
                    className="z-10 bg-light text-text-primary divide-y divide-text-dark rounded-lg shadow w-44"
                >
                    <ul 
                        className="py-2 text-sm"
                    >
                        {options.map((item, i) => (

                            <li
                                key={i}
                                className="block px-4 py-2 hover:bg-primary cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>
    )
}