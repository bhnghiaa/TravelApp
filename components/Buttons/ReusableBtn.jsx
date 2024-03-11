import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReusableBtn = ({
    onPress,
    btnText,
    textColor,
    width,
    backgroundColor,
    borderWidth,
    borderColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}>
            <Text style={styles.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: textColor,
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
        width: width,
        height: 50,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.small,
        borderWidth: borderWidth,
        borderColor: borderColor
    })
})

export default ReusableBtn