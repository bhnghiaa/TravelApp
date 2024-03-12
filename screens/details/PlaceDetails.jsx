import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceDetails = ({ route }) => {
    const id = route.params.id;
    alert(id);
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default PlaceDetails

const styles = StyleSheet.create({})