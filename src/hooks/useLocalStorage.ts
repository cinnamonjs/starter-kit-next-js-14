import { useState, useEffect } from "react";

type SetValue<T> = T | ((val: T) => T);

/** useLocalStorage: useState Dynamic to Localstorage stored */
function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: SetValue<T>) => void] {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (typeof storedValue === undefined) {
      throw new Error("Can't read property of undefined (default value)");
    }
    return storedValue ? (JSON.parse(storedValue) as T) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const setLocalStorageState = (value: SetValue<T>) => {
    if (typeof value === "function") {
      setState((prevState) => {
        const updatedState = (value as Function)(prevState);
        localStorage.setItem(key, JSON.stringify(updatedState));
        return updatedState;
      });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    }
  };
  return [state, setLocalStorageState];
}

export default useLocalStorage;
