import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HamburgerSVG = (props) => (
    <Svg
        width={24}
        height={18}
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M6 1L20 0.999999"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path d="M1 10H25" stroke="black" strokeWidth={2} strokeLinecap="round" />
        <Path
            d="M6 19L20 19"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
);
export default React.memo(HamburgerSVG)