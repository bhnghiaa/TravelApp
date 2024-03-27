import { StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
    const coordinates = {
        latitude: 20.994880,
        longitude: 105.845318,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01, // Corrected here
        title: "My Location"
    }
    return (
        <MapView initialRegion={coordinates} style={styles.mapStyle}>
            <Marker coordinate={coordinates} title={coordinates.title} />
        </MapView>
    )
}

export default Location

const styles = StyleSheet.create({
    mapStyle: {
        ...StyleSheet.absoluteFillObject
    }
})