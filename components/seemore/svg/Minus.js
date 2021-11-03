import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Minus(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8 11a1 1 0 100 2h8a1 1 0 100-2H8z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default Minus