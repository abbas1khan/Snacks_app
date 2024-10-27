import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const sizes = {
    // Window dimensions
    width,
    height,

    // Screen dimensions
    screenWidth,
    screenHeight,
}

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'

export const fontSizes = {
    header: 33.3,
    mHeader: 20,
    xlarge: 18,
    large: 16,
    regular: 14,
    small: 12,
    mini: 11,
    xsmall: 10,
    xmini: 9,
    tiny: 8,
}

export const fontFamily = {
    black: 'SF-Pro-Display-Black',
    bold: 'SF-Pro-Display-Bold',
    heavy: 'SF-Pro-Display-Heavy',
    light: 'SF-Pro-Display-Light',
    medium: 'SF-Pro-Display-Medium',
    regular: 'SF-Pro-Display-Regular',
    semibold: 'SF-Pro-Display-Semibold',
    thin: 'SF-Pro-Display-Thin',
    ultralight: 'SF-Pro-Display-Ultralight',
}

export const colors = {
    primary: "#2552B5",
    secondary: "#CDCDD2",

    primary1: '#2559CC',

    // background: "#f3f4f9",
    background: "#f9f9f7",

    secondary1: '#4A94F2',
    secondary2: '#A8BDEB',
    secondary3: '#BECDF0',
    secondary4: '#5597FF',
    secondary5: '#F3F7FF',
    secondary6FD: '#DBEAFD',
    secondary7DD: '#3987DD',
    secondary8FF: '#F2F8FF',
    secondary8F5: '#C2D8F5',
    secondaryEFB: '#C7DEFB',
    secondary4FE: '#EDF4FE',
    secondary9FF: '#0099FF',
    secondary7DC: '#4387DC',
    secondary5D5: '#2975D5',
    secondary5FA: '#9EC5FA',
    secondary9AC: '#3569AC',
    secondary5F6: '#4D95F6',

    white: "#ffffff",
    black: "#000000",
    darkBlack: "#1A1A1A",

    lightYellow: "#FFEC89",
    orangeC3C: "#F6AC3C",
    orangeF02: "#ED8F02",
    annonymous: "#F88923",
    likeRed: '#FD5D5D',
    error: '#FD5D5D',
    requiredText: '#FF0000',
    darkRed: "#D53434",
    darkRed353: "#FC5353",
    lightRed6F6: '#FFF6F6',
    darkPink: '#D133EB',
    pinkDB7: "#F31DB7",
    pinkCAB: "#E31CAB",
    switchGreen: '#52BD41',
    switchGreen5D: '#5DBB5D',
    greenF2A: "#24BF2A",
    green845: "#1B9845",
    greenC6A: '#29CC6A',
    green045: '#2EC045',
    green416: '#199416',
    green335: '#37A335',
    lightGreenFF9: '#FAFFF9',
    callRed: "#EB5545",
    darkGreen: '#162F15',
    callGreen67: '#67CE67',
    gray: "#C1C3C5",
    voilet: "#A962E1",

    lightGray: "#F3F3F3",
    lightGray1: "#F7F6F9",
    lightGray2: "#EBEBEB",
    lightGray3: "#F5F5F5",
    lightGray4: "#D7D7D7",
    lightGray5: 'rgb(209 213 219)',
    lightGray6: "#E6E6E6",
    lightGray7: "#EBECF2",
    lightGray8: "#D9D9D9",
    lightGray9: "#F2F2F2",
    lightGray10: "#F8F8F8",
    lightGray11: "#F0EDED",
    lightGray12F5: "#F5F5F5",
    lightGray13EB: "#EBEBEB",
    lightGray6withOpacity: "#e6e6e680",

    lightGrayC3Dark: "#C3C3C3",





    darkgray: "#C3C6C7",
    darkgray1: "#777777",
    darkgray2: '#9A9A9A',
    darkgray3: '#4E4E4E',
    darkgray4: '#6E6E6E',
    darkgray5: '#263238',
    darkgray6: '#101010',
    darkgray7: '#1A1A1A',
    darkgray8: '#373737',
    darkgray9: '#969595',
    darkGrayF26: "#FFFFFF26",
    darkGrayF8C: "#7A7F8C",
    darkGray787: "#878787",
    darkGray1212: "#121212",
    darkGray323: "#232323",
    darkGray8F8F: "#8F8F8F",
    darkGray999: "#999",
    darkGrayA9A: "#9B9A9A",
    darkGrayB3B: "#3B3B3B",
    darkGray494: "#949494",
    darkGray333: "#343333",
    darkGray606: "#060606",
    darkGray141: "#414141",
    darkGray747: "#474747",
    darkGray282: "#828282",
    darkGray2121: "#212121",




    lightBlack: 'rgba(47, 48, 50, 0.70)',
    lightBlue2: '#E8F1FF',





    // For Poll
    darkBlue: '#080079',
    lightBlue: '#409BEC',
    darkBlue1: 'rgba(8, 0, 121, 0.5)',
    darkBlue2: 'rgba(74, 148, 242, 0.20)',
    darkBlue3: '#000071',
    darkBlue66B: '#02066B',
    darkBlueE66: '#1F3E66',
    lightBlue1: 'rgba(64, 155, 236, 0.5)',

    placeHolderGrey: '#9A9A9A',

    rgbaWhite: opacity => `rgba(255,255,255,${opacity})`,
    rgbaBlack: opacity => `rgba(0,0,0,${opacity})`,

    rgba: (number = 0, opacity = 1) => `rgba(${number},${number},${number},${opacity})`,

    transparent: "transparent",

    "grey": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121"
    },

}

export function hexToRgbA(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${opacity})`;
    }
}

export function useThemeColors(theme) {
    const isLightTheme = theme === "light"
    return {
        black_lightGray12F5: isLightTheme ? colors.black : colors.lightGray12F5,
        white_darkGray1212: isLightTheme ? colors.white : colors.darkGray1212,
        darkgray2_darkGray333: isLightTheme ? colors.darkgray2 : colors.darkGray333,
        darkgray2_lightGrayC3Dark: isLightTheme ? colors.darkgray2 : colors.lightGrayC3Dark,
        darkgray3_lightGrayC3Dark: isLightTheme ? colors.darkgray3 : colors.lightGrayC3Dark,
        darkgray3_lightGray12F5: isLightTheme ? colors.darkgray3 : colors.lightGray12F5,
        darkGray4_lightGrayC3Dark: isLightTheme ? colors.darkgray4 : colors.lightGrayC3Dark,
        darkgray4_lightGray12F5: isLightTheme ? colors.darkgray4 : colors.lightGray12F5,
        darkgray6_lightGray12F5: isLightTheme ? colors.darkgray6 : colors.lightGray12F5,
        darkGray141_lightGrayC3Dark: isLightTheme ? colors.darkGray141 : colors.lightGrayC3Dark,
        darkGray494_lightGrayC3Dark: isLightTheme ? colors.darkGray494 : colors.lightGrayC3Dark,
        lightGray6_darkGray323: isLightTheme ? colors.lightGray6 : colors.darkGray323,
        lightGray6_darkGrayB3B: isLightTheme ? colors.lightGray6 : colors.darkGrayB3B,
        lightGray6_lightGrayC3Dark: isLightTheme ? colors.lightGray6 : colors.lightGrayC3Dark,
        lightGray6_black: isLightTheme ? colors.lightGray6 : colors.black,
        lightGray6_darkCapsule: isLightTheme ? colors.lightGray6 : colors.darkCapsule,
        lightGrayC3Dark_darkGray141: isLightTheme ? colors.lightGrayC3Dark : colors.darkGray141,
        secondary5_darkCapsule: isLightTheme ? colors.secondary5 : colors.darkCapsule,
        secondary4FE_darkgray4: isLightTheme ? colors.secondary4FE : colors.darkgray4,
        rgbaBlack04_rgbaWhite02: isLightTheme ? colors.rgbaBlack(0.4) : colors.rgbaWhite(0.2),
        rgbaBlack02_rgbaBlack07: isLightTheme ? colors.rgbaBlack(0.2) : colors.rgbaBlack(0.7),
        rgbaWhite09_rgbaBlack09: isLightTheme ? colors.rgbaWhite(0.9) : colors.rgbaBlack(0.9),
    }
}