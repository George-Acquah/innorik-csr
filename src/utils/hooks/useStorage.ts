import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const getStoredValue = (): T => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item !== null
        ? typeof initialValue === "string"
          ? item
          : JSON.parse(item)
        : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(
        typeof initialValue === "string" ? (item as T) : JSON.parse(item)
      );
    }
  }, [initialValue, key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          key,
          typeof initialValue === "string"
            ? (valueToStore as string)
            : JSON.stringify(valueToStore)
        );
      }
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Error removing localStorage item", error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
}

export default useLocalStorage;
