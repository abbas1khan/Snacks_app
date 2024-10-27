import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronLeftSVG = () => (
    <Svg
        width={12}
        height={21}
        viewBox="0 0 14 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M12.8551 2.78961L12.8553 2.7898L12.8598 2.78389C13.2158 2.32092 13.1759 1.66354 12.7416 1.24444C12.2657 0.785187 11.4955 0.785187 11.0196 1.24444L1.25842 10.6642L1.25824 10.664L1.25334 10.6695L1.14495 10.7906L1.14474 10.7905L1.1402 10.7964C0.784239 11.2593 0.824133 11.9167 1.25842 12.3358L11.0196 21.7556L11.0194 21.7558L11.0251 21.7604L11.1506 21.865L11.1504 21.8652L11.1564 21.8695C11.633 22.2108 12.3087 22.1733 12.7416 21.7556L12.7418 21.7558L12.7467 21.7503L12.8551 21.6291L12.8553 21.6293L12.8598 21.6234C13.2158 21.1604 13.1759 20.503 12.7416 20.0839L3.84612 11.5L12.7416 2.91606L12.7418 2.91625L12.7467 2.91077L12.8551 2.78961Z"
            fill="black"
            stroke="black"
            strokeWidth={0.2}
        />
    </Svg>
);
export default React.memo(ChevronLeftSVG)