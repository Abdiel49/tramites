import AsyncStorage from '@react-native-async-storage/async-storage';
import { waitFor } from "@testing-library/react-native";
import { getLocalData, storeLocalData } from '../localStorage';

describe('test on localStorage service', () => {
  
  beforeEach( async() => {
    await AsyncStorage.clear();
  });

  // it('should store data with "@test" key and "some test" value', async () => {
  //   const key = '@test';
  //   const value = {value :'some test'};
  //   await waitFor(()=>{
  //     storeLocalData(key, value);
  //   })
  //   let resolve;
  //   await waitFor(()=>{
  //     AsyncStorage.getItem(key)
  //     .then(data => {
  //       resolve = JSON.parse(data);
  //     })
  //     .catch( err => console.error(err))
  //   })
  //   expect( resolve ).toEqual( value )
  // });
  
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
    // console.log(resolve)
    // const data = getLocalData(key);
    // console.log(data)
    // await waitFor(()=>{
    //   data.then(data => {
        
    //   })
    //   .catch( err => console.error(err))
    // })
    // expect( resolve ).toEqual( value )
  })

})
