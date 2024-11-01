export const saveToLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const addToLocalStorageArray = (
  key: string,
  newItem: any,
  uniqueKey: string
) => {
  const existingArray = getFromLocalStorage(key) || [];

  const itemExists = existingArray.some(
    (item: any) => item[uniqueKey] === newItem[uniqueKey]
  );

  if (!itemExists) {
    existingArray.push(newItem);
    saveToLocalStorage(key, existingArray);
  }
};

export const getLocalStorageArray = (key: string): any[] => {
  return getFromLocalStorage(key) || [];
};
