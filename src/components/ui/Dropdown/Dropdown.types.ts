import { FC, ReactNode } from "react";

export type DropdownProps = FC<{
    options: Array<ReactNode>,
    label: string;
    placeOptionAsLabel?: boolean;
}>