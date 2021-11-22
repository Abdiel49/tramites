import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={24}
      height={24}
      {...props}
    >
      <Path
        fill="#fff"
        d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1 1 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
      />
    </Svg>
  )
}

export default BackIcon