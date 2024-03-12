import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { TEXT } from '../../constants/theme'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile from '../Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
const Recommendations = () => {
    const navigation = useNavigation();
    const recommendations = [
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
    return (
        <View style={styles.container}>
            <View style={[ reusable.rowWidthSpace("space-between"), { paddingBottom: 20 } ]}>
                <ReusableText text={"Recommendations"}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={recommendations}
                keyExtractor={item => item._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                renderItem={({ item }) => (
                    <ReusableTile item={item} onPress={() => (navigation.navigate("PlaceDetails", { id: item._id }))} />
                )}
            />
        </View>
    )
}

export default Recommendations

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    }
})


//07/002