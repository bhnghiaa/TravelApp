import { StyleSheet } from "react-native";

const reusable = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    rowWidthSpace: (justifyContent) => ({
        flexDirection: "row",
        justifyContent: justifyContent,
    }),
})

export default reusable;