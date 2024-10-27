import * as React from "react";
import { View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
const ShoppingCartSVG = ({ size = 23 }) => (
    <View style={{ marginLeft: -2.5 }}>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={size}
            height={size}
            x={0}
            y={0}
            viewBox="0 0 32 32"
            style={{
                enableBackground: "new 0 0 512 512",
            }}
            xmlSpace="preserve"
            className=""
        >
            <G>
                <Path
                    d="M10.964 20.452h14.378a2.916 2.916 0 0 0 2.708-1.863l2.671-6.974a2.899 2.899 0 0 0-2.708-3.938H7.783l-.828-2.021a2.958 2.958 0 0 0-2.746-1.842H1.985a.9.9 0 0 0 0 1.8H4.21c.476 0 .899.285 1.08.725l5.075 12.385a2.705 2.705 0 0 0-2.104 2.632 2.707 2.707 0 0 0 2.704 2.703h.051c-.153.357-.239.75-.239 1.163 0 1.634 1.329 2.964 2.963 2.964s2.963-1.33 2.963-2.964c0-.413-.086-.806-.239-1.163h6.856c-.153.357-.239.75-.239 1.163 0 1.634 1.329 2.964 2.963 2.964s2.964-1.33 2.964-2.964-1.33-2.964-2.964-2.964h-15.08a.903.903 0 1 1 0-1.806zM8.52 9.477h19.493c.368 0 .698.174.906.477s.252.673.121 1.017l-2.671 6.974a1.106 1.106 0 0 1-1.027.706H12.279zm6.383 15.745a1.164 1.164 0 1 1-2.328-.002 1.164 1.164 0 0 1 2.328.002zm11.14 1.163a1.164 1.164 0 1 1 0-2.328 1.164 1.164 0 0 1 0 2.328z"
                    fill="#000000"
                    opacity={1}
                    data-original="#000000"
                    className=""
                />
            </G>
        </Svg>
    </View>
);
export default React.memo(ShoppingCartSVG)