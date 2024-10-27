import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FilterSVG = () => (
    <Svg
        width={17}
        height={15}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M19 4.14999H13.6"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M4.6 4.14999H1"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.20005 7.3C9.93975 7.3 11.35 5.8897 11.35 4.15C11.35 2.4103 9.93975 1 8.20005 1C6.46035 1 5.05005 2.4103 5.05005 4.15C5.05005 5.8897 6.46035 7.3 8.20005 7.3Z"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M19 14.05H15.4"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6.4 14.05H1"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.8 17.2C13.5397 17.2 14.95 15.7897 14.95 14.05C14.95 12.3103 13.5397 10.9 11.8 10.9C10.0603 10.9 8.65002 12.3103 8.65002 14.05C8.65002 15.7897 10.0603 17.2 11.8 17.2Z"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default React.memo(FilterSVG)