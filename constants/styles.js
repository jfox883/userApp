import { StyleSheet, Platform, StatusBar } from 'react-native'
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    heading1: {
        fontSize: SIZES.h1,
        fontWeight: '400',
        padding: SIZES.padding
    },
    heading2: {
        fontSize: SIZES.h4,
        fontWeight: '300'
    }
})

export default styles;