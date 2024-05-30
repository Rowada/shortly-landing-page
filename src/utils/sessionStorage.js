export const saveToSessionStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getFromSessionStorage = (key) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
