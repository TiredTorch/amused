import { FC, PropsWithChildren } from "react";

export type ModalWindowProps = FC<PropsWithChildren<{
    isOpen: boolean;
    onClose: VoidFunction;
}>>