import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'
const HotelList = () => {
    const hotels = [
        {
            "_id": "64c674d23cfa5e847bcd5430",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Seaside Resort",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
            "rating": 4.9,
            "review": "1204 Reviews",
            "location": "Miami Beach, FL"
        },

        {
            "_id": "64c67442776ed29f19727fd7",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Luxury Hotel 1",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "New York City, NY"
        }
    ]
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <View style={{ height: 50 }}>
                <AppBar
                    top={10}
                    left={0}
                    right={0}
                    color={COLORS.white}
                    title="Nearby Hotels"
                    icon="search1"
                    color1={COLORS.white}
                    onPress1={() => navigation.navigate("HotelSearch")}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={{ paddingTop: 20 }}>
                <FlatList
                    data={hotels}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 15 }}>
                            <ReusableTile item={item} onPress={() => navigation.navigate("HotelsDetails", { id: item._id })} />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default HotelList

const styles = StyleSheet.create({})