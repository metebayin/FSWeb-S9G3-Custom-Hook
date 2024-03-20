import { set } from "msw/lib/types/context";
import { useState } from "react"

const useLocalStorage = (key, initialValue = "") => {
        const [value, setValue] =useState(() => {
            const localValue = localStorage.getItem(key);
            if (localValue) {
                return JSON.parse(localValue);
            }
            return initialValue;
        });
    const setLocalStorageValue = (val) => {
        setValue(val);
        localStorage.setItem(key, JSON.stringify(val));
    };

    return [value,setLocalStorageValue];
};

export default useLocalStorage;