import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../utils/Theme";

const CartSVG = ({ size = 26.83, color = colors.white }) => (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M10.0171 2.31891L5.96973 6.37745"
            stroke={color}
            strokeWidth={1.75}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M17.1506 2.31891L21.198 6.37745"
            stroke={color}
            strokeWidth={1.75}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M2.40283 8.85934C2.40283 6.79094 3.50971 6.62323 4.88492 6.62323H22.2819C23.6571 6.62323 24.7639 6.79094 24.7639 8.85934C24.7639 11.2632 23.6571 11.0955 22.2819 11.0955H4.88492C3.50971 11.0955 2.40283 11.2632 2.40283 8.85934Z"
            stroke={color}
            strokeWidth={1.75}
        />
        <Path
            d="M4.08008 11.2637L5.65654 17.5696C6.01431 19.7386 6.87522 21.3262 10.0729 21.3262H16.8147C20.2919 21.3262 20.8062 19.8057 21.2087 17.7037L23.087 11.2637"
            stroke={color}
            strokeWidth={1.75}
            strokeLinecap="round"
        />
    </Svg>
);
export default React.memo(CartSVG)