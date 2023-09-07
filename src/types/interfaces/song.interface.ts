import { Instruments } from "../enums";

export type Song = {
    title: string;
    tempo: number;
    instruments: Record<Instruments, InstrumentLine>
}

export type InstrumentLine = {
    type?: string;
    line: Array<LineElement>
}

export type LineElement = {
    note: string;
    beat: number;
}