import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem( key );
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};
