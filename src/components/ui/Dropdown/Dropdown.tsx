'use client'
import { useCallback, useState } from "react"
import { DropdownProps } from "./Dropdown.types"
import ClickAwayListener from "react-click-away-listener"

export const Dropdown: DropdownProps = ({
    options,
    label,
    placeOptionAsLabel,
    hideShevron
}) => {

    const [currentOptionId, setCurrentOptionId] = useState<number>(-1)
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [setIsOpen])

    const handleCloseDropdown = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const handleSelectOption = useCallback((id: number) => () => {
        handleCloseDropdown()
        if (!placeOptionAsLabel) return;
        setCurrentOptionId(id)
    }, [setCurrentOptionId, handleCloseDropdown, placeOptionAsLabel])

    return (
        <>
            <button 
                    className="text-text-dark bg-primary hover:bg-dark hover:border-text-primary duration-200 focus:ring-0 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between w-full"
                    type="button"
                    onClick={handleToggleDropdown}
            >
                <span>
                    {currentOptionId !== -1 ? options[currentOptionId] : label}
                </span>
                {!hideShevron &&
                    <svg className="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                }
            </button>
            {isOpen && 
                <div 
                    className="z-10 bg-dark text-text-dark rounded-lg shadow absolute border border-text-dark overflow-hidden translate-y-[45px] translate-x-[-50%]"
                >
                    <ul 
                        className="divide-y divide-text-dark overflow-hidden"
                    >
                        {options.map((item, i) => (

                            <li
                                key={i}
                                className="hover:bg-primary cursor-pointer font-semibold"
                                onClick={handleSelectOption(i)}
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