export function getFromStorage(key) {
    if (!key) {
      return null;
    }
    try {
      const valueStr = localStorage.getItem(key);
      if (valueStr) {
        return JSON.parse(valueStr);
      }
      return null;
    } catch (err) {
      return null;
    }
  }
  export function setInStorage(key, obj) {
   //if key is null print the error
    if (!key) {
      console.error('Error: Key is missing');
    }
    try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
      console.error(err);
    }
  }