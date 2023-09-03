import { FC, HTMLAttributes, PropsWithChildren } from "react";

export type InputProps = FC<PropsWithChildren<HTMLAttributes<HTMLInputElement> & {
    label?: string;
    errorText?: string;
}>>