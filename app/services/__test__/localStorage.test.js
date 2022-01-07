import AsyncStorage from '@react-native-async-storage/async-storage';
import { waitFor } from "@testing-library/react-native";
import { getLocalData } from '../localStorage';

describe('test on localStorage service', () => {
  
  beforeEach( async() => {
    await AsyncStorage.clear();
  });
  
  it('should obtain data stored with a key',async () => {
    const key = '@test';
    const value = {value :'some test'};
    let resolve;
    await waitFor(()=>{
      AsyncStorage.setItem(key, value);
      getLocalData(key).then(data => {
        console.log(data)
        resolve = data;
        console.log(resolve)
      })
    });
  })
})
