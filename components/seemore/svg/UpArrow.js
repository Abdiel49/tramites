import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UpArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={24}
      height={24}
      {...props}
    >
      <Path
        d="M4 15l8-8 8 8"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}

export default UpArrow;