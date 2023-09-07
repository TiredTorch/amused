import { DetailedHTMLProps, FC, InputHTMLAttributes, PropsWithChildren } from "react";

export type InputProps = FC<PropsWithChildren<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
    errorText?: string;
}>>