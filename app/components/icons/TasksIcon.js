import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TasksIcon = ({fill, size = 30}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={ size }
    height={ size }
    viewBox="0 0 24 24"
  >
    <Path
      d="M14 2H4v20h16V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"
      fill={ fill }
    />
  </Svg>
)

export default TasksIcon;
