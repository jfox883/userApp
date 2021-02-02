import { StyleSheet, Platform, StatusBar } from 'react-native'
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray1,
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginBottom: Platform.OS === "android" ? 30 : 0
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
        fontSize: SIZES.h3,
        fontWeight: '400',
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        color: COLORS.darkgray
    },
    heading2: {
        fontSize: SIZES.h4,
        fontWeight: '500',
        paddingBottom: 5,
        color: COLORS.darkgray
    },
    heading3: {
        fontSize: SIZES.h6,
        fontWeight: '400',
        padding: 5,
        color: COLORS.darkgray
    },
    mainButton: {
        width: '40%',
        height: 40,
        marginHorizontal: 5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignContent: 'center',
    },
    secondButton: {
        width: '40%',
        height: 40,
        marginHorizontal: 5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        alignContent: 'center',
    },
    avatar: {
        marginLeft: 10
    }
})

export default styles;