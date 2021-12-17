import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Checked (props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-15 16.5v-15h15v15h-15z"
        fill="#0D0D0D"
      />
      <Path
        d="M10.5 16.125l-3.75-3.72 1.192-1.155 2.558 2.512 5.558-5.512 1.192 1.185-6.75 6.69z"
        fill="#0D0D0D"
      />
    </Svg>
  );
}

export default Checked;
