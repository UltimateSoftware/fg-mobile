import { AsyncStorage } from 'react-native';

export default (key) => {
  const STORAGE_KEY = `@app:${key}`;
  return {
    async get() {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      return value && JSON.parse(value);
    },
    set(data) {
      return AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(data)
      );
    },
    clear() {
      return AsyncStorage.removeItem(STORAGE_KEY);
    }
  };   
}