import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalData = (key) => {
  return new Promise(async (res, rej)=>{    
      const value = await AsyncStorage.getItem( key );
      if (value !== null) {
        res(JSON.parse(value)); 
      } else {
        rej(null);
      }
  })
};

export const storeLocalData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};
