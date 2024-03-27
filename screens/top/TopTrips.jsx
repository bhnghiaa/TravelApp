import { FlatList, View } from 'react-native'
import React from 'react';
import ReusableTile from '../../components/Reusable/ReusableTile'


const TopTrips = ({ navigation }) => {
    const places = [
        {
            _id: "64c631650298a05640539adc",
            country_id: "64c62bfc65af9f8c969a8d04",
            title: "Walt Disney World",
            location: "U.S.A New York ",
            imageUrl:
                "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
            rating: 4.7,
            review: "1204 Reviews",
        },
        {
            _id: "64d062a3de20d7c932f1f70a",
            country_id: "64c62bfc65af9f8c969a8d04",
            title: "Statue of Liberty",
            location: "U.S.A New York ",
            imageUrl:
                "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
            rating: 4.8,
            review: "1452 Reviews",
        },
        {
            _id: "64d09e3f364e1c37c8b4b13c",
            country_id: "64c62bfc65af9f8c969a8d04",
            title: "Golden Gate Bridge",
            location: "U.S.A New York ",
            imageUrl:
                "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
            rating: 4.6,
            review: "2145 Reviews",
        },

    ];
    return (
        <View style={{ margin: 20 }}>

            <FlatList
                data={places}
                showVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)} />
                    </View>
                )}
            />

        </View>
    )
}

export default TopTrips