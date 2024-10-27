import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowSVG = (props) => (
    <Svg
        width={26.5}
        height={12}
        viewBox="0 0 29 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M27.5 7H1"
            stroke="#1A1A1A"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M27.5 7L21.5 1"
            stroke="#1A1A1A"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M27.5 7L21.5 13"
            stroke="#1A1A1A"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default React.memo(ArrowSVG)