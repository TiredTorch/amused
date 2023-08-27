import { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from "react";

export type TextfieldProps = {
   label?: string;
   value?: string | number;
   onChange?: ChangeEventHandler<HTMLInputElement>;
   onBlur?: FocusEventHandler<HTMLInputElement>;
   error?: string | false;
   name?: string;
   type?: string;
   placeholder?: string;
}