import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT } from '../../constants/theme'

const DescriptionText = ({ lines, text }) => {
    return (
        <View>
            <Text numberOfLines={lines} style={styles.description}>{text}</Text>
        </View>
    )
}

export default DescriptionText

const styles = StyleSheet.create({
    description: {
        paddingVertical: 6,
        fontFamily: "regular",
        textAlign: "justify",
        fontSize: TEXT.medium
    }
})