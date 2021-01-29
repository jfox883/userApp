import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")
const tintColorLight = '#2f95dc';

export const COLORS = {
    primary: "#345eeb",
    secondary: "#CDCDD2",

    black: "#1E1F20",
    white: "#FFFFFF",
    red: "#bf0202",
    green: "#09a607",

    lightGray: "#f2f2f2",
    lightGray2: "#e6e6e6",
    lightGray3: "#d9d9d9",
    lightGray4: "#cccccc",
    transparent: "transparent",
    darkgray: '#898C95',

    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,   
};

export const SIZES = {
    //Globales
    base: 8,
    font: 14,
    radius: 10,
    padding: 10,
    padding2: 12,

    //letras
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app
    width,
    height
};

const appTheme = { COLORS, SIZES };

export default appTheme;
