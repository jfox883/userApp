import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")
const tintColorLight = '#2f95dc';

export const COLORS = {
    primary: "#345eeb",
    secondary: "#CDCDD2",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
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
