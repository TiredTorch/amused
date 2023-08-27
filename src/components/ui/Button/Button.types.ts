import { ButtonType } from "@types"

export type ButtonProps = {
    type?: ButtonType;
    onClick?: VoidFunction;
    btnType?: "submit" | "button"
}