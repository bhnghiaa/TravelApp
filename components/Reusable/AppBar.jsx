import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { AntDesign } from '@expo/vector-icons'
import ReusableText from './ReusableText'
import { TEXT, COLORS } from '../../constants/theme'
const AppBar = ({ color, color1, title, icon, onPress, onPress1, top, left, right }) => {
    return (
        <View style={styles.overlay(top, left, right)}>
            <View style={reusable.rowWithSpace('space-between')}>
                <TouchableOpacity style={styles.box(color)} onPress={onPress}>
                    <AntDesign name="left" size={26} color="black" />
                </TouchableOpacity>
                <ReusableText
                    text={title}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />
                <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
                    <AntDesign name={icon} size={26} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: (top, left, right) => ({
        position: 'absolute',
        top: top,
        left: left,
        right: right,
        justifyContent: 'center',
    }),
    box: (color) => ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    box1: (color1) => ({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    }),
})