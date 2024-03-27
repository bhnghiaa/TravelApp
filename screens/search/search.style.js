import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
    },
    input: {
        fontFamily: 'regular',
        width: '100%',
        height: "100%",
        paddingHorizontal: 50,
    },
    searchWrapper: {
        flex: 1,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.blue,
    },
    searchImage: {
        resizeMode: "contain",
        width: "100%",
        height: SIZES.height / 2.2,
        paddingHorizontal: 20,
    },
    tile: {
        // marginHorizontal: 12,
        marginBottom: 10,
    }
});

export default styles; 