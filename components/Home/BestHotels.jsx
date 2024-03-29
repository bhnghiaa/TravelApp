import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { TEXT } from '../../constants/theme'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile from '../Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import HotelCard from '../Tiles/Hotels/HotelCard'
const BestHotels = () => {
    const hotels = [
        {
            "_id": "id1",
            "country_id": "c1",
            "location": "USA",
            "title": "Walt Disney World",
            "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "rating": 4.7,
            "review": "1204 Reviews"
        },
        {
            "_id": "id2",
            "country_id": "c1",
            "location": "USA",
            "title": "Statue of Liberty",
            "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "rating": 4.7,
            "review": "1204 Reviews"
        },
        {
            "_id": "id3",
            "country_id": "c1",
            "location": "USA",
            "title": "Statue of Liberty",
            "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "rating": 4.7,
            "review": "1204 Reviews"
        },
        {
            "_id": "id4",
            "country_id": "c1",
            "location": "USA",
            "title": "Statue of Liberty",
            "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "rating": 4.7,
            "review": "1204 Reviews"
        },
        {
            "_id": "id5",
            "country_id": "c2",
            "location": "USA",
            "title": "Statue of Liberty",
            "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "rating": 4.7,
            "review": "1204 Reviews"
        }
    ]
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={[ reusable.rowWithSpace("space-between"), { paddingBottom: 20 } ]}>
                <ReusableText text={"Nearby Hotels"}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />
                <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={hotels}
                keyExtractor={item => item._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                renderItem={({ item }) => (
                    <HotelCard item={item} margin={0} onPress={() => navigation.navigate("HotelsDetails", { id: item._id })} />
                )}
            />
        </View>
    )
}

export default BestHotels

const styles = StyleSheet.create({})