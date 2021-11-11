const { render } = require("react-dom")
const { default: Progress } = require("../../../components/progressBar/Progress")

describe('Pruebas en el componente de la barra de progreso', () => {
  
  test('should display true', () => {
    const data = {
      step1: true,
      step2: true,
      step3: false,
    }
    const progress = render.create(<Progress/>).toJSON();
    expect( progress ).toMatchSnapshot();
  })
})
