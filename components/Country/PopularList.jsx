import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ReusableTile from '../Reusable/ReusableTile'
const PopularList = ({ data }) => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginBottom: 15 }}>
                <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', { id: item._id })} />
            </View>
        )
    }
    return (
        <FlatList
            data={data}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
        />
    )
}

export default PopularList

const styles = StyleSheet.create({})