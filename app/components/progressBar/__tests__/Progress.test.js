import React from 'react';
import { render } from '@testing-library/react-native';
import Progress from '../../../components/progressBar/Progress';
// // use this for the next error on run your test
// // You are trying to `import` a file after the Jest environment has been torn down.
// // jest.useFakeTimers();

describe('Pruebas en el componente de la barra de progreso', () => {
  it('renders correctly', () => {
    const data = {
      step1: true,
      step2: true,
      step3: false
    };
    const { getByTestId, getByText } = render(<Progress data={data} />);
    getByTestId('progressBar.percent');
    getByTestId('progressBar.progressBar');
    getByText('67 %');
  });

  it('show correctly percent', () => {
    const data = {
      step1: true,
      step2: true,
      step3: false,
      step4: false
    };
    const { getByTestId, getByText } = render(<Progress data={data} />);
    getByTestId('progressBar.percent');
    getByText('50 %');
  });
});
