import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const HotelMap = ({ coordinates }) => {
    return (
        <Pressable>
            <MapView style={styles.maps} initialRegion={coordinates}>
                <Marker coordinate={coordinates} title={coordinates.title} />
            </MapView>
        </Pressable>

    )
}

export default HotelMap

const styles = StyleSheet.create({
    maps: {
        width: '100%',
        height: 150,
        marginVertical: 10,
        borderRadius: 12
    }
})

