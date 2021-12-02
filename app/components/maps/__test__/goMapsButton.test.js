import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import GoMapsButton from '../GoMapsButton';

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
  }

	it("renders corrently component", () => {
		const { getAllByTestId } = render(<GoMapsButton/>);
		expect( getAllByTestId('mapIconComponent').length).toBe(1);
	});

	it("Puerba del evento on press", async()=>{
		const { getByTestId } = render(<GoMapsButton/>);
		await fireEvent.press(getByTestId('buttonToMaps'));
		
		await waitFor(()=>{
			expect(getByTestId('buttonToMaps')).toBeTruthy();
		}) 
		expect( mockedNavigate ).toHaveBeenCalledTimes(1);
	})

	it("prueba de que se envia la data con en navigate", async()=>{
		const { getByTestId } = render(<GoMapsButton data={ data } />);
		await fireEvent.press(getByTestId('buttonToMaps'));
		
		await waitFor(()=>{
			expect(getByTestId('buttonToMaps')).toBeTruthy();
		}) 
		expect( mockedNavigate ).toHaveBeenCalledWith("maps",{data: data} );
	})

})