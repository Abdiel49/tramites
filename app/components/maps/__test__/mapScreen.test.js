import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import MapScreen from '../MapScreen';

let mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Pruebas en el componente <GoMapsButton/>", ()=>{
  
  beforeEach(()=>{
    mockedNavigate.mockClear()
  });
  
  const data={
    haveLocation: true,// false
    location: {
      latitude:-17.3939575620106, 
      longitude:-66.14757225293525
    },
    stepTitle: "Edificio Multiacadémico",
    locationTitle: "Edificio Multiacadémico",
    description: 'Atiente de L-V  de 8 - 16  hrs. Use medidas de bioseguridad'
  };
  
  const navigation = {
    setOptions: jest.fn(),
    navigate: mockedNavigate()
  };
  
  const route = {
    params:{
      data: data,
    }
  };
  
  it("Renders corrently", ()=>{
    render(<MapScreen route={route} navigation={navigation}/>);
  });
  
  it("contiene el map view", async()=>{
    const { getAllByTestId } = render(<MapScreen route={route} navigation={navigation}/>);
    await waitFor(()=>{
      expect( getAllByTestId('map-view').length ).toBe(1);
    });
    await waitFor(()=>{
      expect( getAllByTestId('openMapsApp').length ).toBe(1);
    });
    await waitFor(()=>{
      expect( getAllByTestId('mark-maps-view').length ).toBe(1);
    });
  })	
  
  it("test of send data and path navigation name", async()=>{
    const { getByTestId } = render(<MapScreen route={route} navigation={navigation}/>);
    await fireEvent.press(getByTestId('openMapsApp'));
    
    await waitFor(()=>{
      expect(getByTestId('openMapsApp')).toBeTruthy();
    }) 
  });	
});