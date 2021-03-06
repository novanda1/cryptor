
import dayjs from "dayjs";
import create from "zustand";
import { combine } from "zustand/middleware";

const getDefaultValues = () => {
    return {
        unix: 0, price: 0
    }
};

export const useTooltipStore = create(
    combine(getDefaultValues(), (set) => ({
        setData: (x: { unix: number, price: number } = { unix: 0, price: 0 }) => {
            set(x);
        },
        getFormattedDate: ((unix: number) => {
            return dayjs(unix).format('MMM, D YYYY: HH:mm')
        })
    }))
);