import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MinusSVG = (props) => (
    <Svg
        width={20}
        height={4}
        viewBox="0 0 20 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M1.3927 2.1842H18.1751"
            stroke="black"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="bevel"
        />
    </Svg>
);
export default React.memo(MinusSVG)