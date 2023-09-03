'use client'
import ClickAwayListener from "react-click-away-listener"
import { ModalWindowProps } from "./ModalWindow.types"

export const ModalWindow: ModalWindowProps = ({
    children,
    onClose,
    isOpen
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="absolute bg-slate-700/50 w-screen h-screen left-0 top-0 flex justify-center items-center"
        >
            <ClickAwayListener onClickAway={onClose}>
                <div
                    className="p-4 bg-primary rounded-lg"
                >
                    {children}
                </div>
            </ClickAwayListener>
        </div>
    )
}