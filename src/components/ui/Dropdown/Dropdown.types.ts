import { FC, ReactNode } from "react";

export type DropdownProps = FC<{
    options: Array<ReactNode>,
    label: ReactNode;
    placeOptionAsLabel?: boolean;
    hideShevron?: boolean;
}>