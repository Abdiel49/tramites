import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LupaIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={45}
    height={45}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"
      fill="rgba(0, 0, 0,0.4)"
    />
  </Svg>
)

export default LupaIcon;