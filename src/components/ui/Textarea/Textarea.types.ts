import { DetailedHTMLProps, FC, TextareaHTMLAttributes, PropsWithChildren } from "react";

export type TextareaProps = FC<PropsWithChildren<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label?: string;
    errorText?: string;
}>>