import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { TEXT } from '../../constants/theme'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile from '../Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
const BestHotels = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[ reusable.rowWidthSpace("space-between"), { paddingBottom: 20 } ]}>
                <ReusableText text={"Nearby Hotels"}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BestHotels

const styles = StyleSheet.create({})