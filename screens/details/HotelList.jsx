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