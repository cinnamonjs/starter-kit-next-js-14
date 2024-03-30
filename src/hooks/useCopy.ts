import { useState } from "react";
import copy from "copy-to-clipboard";

interface Options {
    debug?: boolean;
    message?: string;
    format?: string; 
    onCopy?: (clipboardData: object) => void;
  }

export function useCopy() {
    const [value, setValue] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);

    const copyToCilpboard = (text: string, option: Options): void => {
        const result = copy(text, option);
        if (result) setValue(text)
        setSuccess(result);
    }

    return [copyToCilpboard, { value, success }]
}