import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTile from '../../components/Reusable/ReusableTile'
import { COLORS, SIZES } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import ReusableBtn from '../../components/Buttons/ReusableBtn'
const TopBookings = ({ navigation }) => {
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
    return (
        <View style={{ margin: 20 }}>

            <FlatList
                data={hotels}
                showVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16 }}>
                        <ReusableTile item={item} />

                        <View style={[ reusable.rowWithSpace('space-between'), { margin: 10 } ]}>

                            <ReusableBtn
                                onPress={() => navigation.navigate("SelectedRoom", { item })}
                                btnText={"Details"}
                                width={(SIZES.width - 50) / 2.2}
                                backgroundColor={COLORS.white}
                                borderColor={COLORS.blue}
                                borderWidth={0.5}
                                textColor={COLORS.blue}
                            />

                            <ReusableBtn
                                onPress={() => navigation.navigate("SelectedRoom", { item })}
                                btnText={"Cancel"}
                                width={(SIZES.width - 50) / 2.2}
                                backgroundColor={COLORS.red}
                                borderColor={COLORS.red}
                                borderWidth={0}
                                textColor={COLORS.white}
                            />



                        </View>
                    </View>
                )}
            />

        </View>
    )
}

export default TopBookings

const styles = StyleSheet.create({})