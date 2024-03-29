import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** tailwind string on last will override tailwind element in previous string */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
