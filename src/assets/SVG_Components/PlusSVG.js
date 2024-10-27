import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusSVG = ({ size = 21 }) => (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M2.00745 9.79871H18.7898"
            stroke="black"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="bevel"
        />
        <Path
            d="M10.4009 18.1946V1.41223"
            stroke="black"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="bevel"
        />
    </Svg>
);
export default React.memo(PlusSVG)