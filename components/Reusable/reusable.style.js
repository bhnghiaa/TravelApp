import { StyleSheet } from "react-native";

const reusable = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    rowWithSpace: (justifyContent) => ({
        flexDirection: "row",
        justifyContent: justifyContent,
        alignItems: "center",
    }),
})

export default reusable;