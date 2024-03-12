import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TEXT } from '../../constants/theme'
import NetworkImage from '../../components/Reusable/NetworkImage'
import ReusableText from '../../components/Reusable/ReusableText'
import { COLORS } from '../../constants/theme'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import { useNavigation } from '@react-navigation/native'
const Country = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("CountryDetails", item)}>
            <View>
                <NetworkImage source={item.imageUrl} width={85} height={85} radius={12} />
                <HeightSpacer height={5} />
                <ReusableText
                    text={item.country}
                    family="medium"
                    size={TEXT.medium}
                    color={COLORS.black}
                    align="center"
                />
            </View>
        </TouchableOpacity>
    )
}

export default Country

const styles = StyleSheet.create({})