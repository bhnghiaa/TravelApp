import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NetworkImage from '../../components/Reusable/NetworkImage';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import ReusableText from '../../components/Reusable/ReusableText';
import DescriptionText from '../../components/Reusable/DescriptionText';
import reusable from '../../components/Reusable/reusable.style';
import Feather from 'react-native-vector-icons/Feather';
import ReusableBtn from '../../components/Buttons/ReusableBtn';
import PopularList from '../../components/Country/PopularList';
import HeightSpacer from '../../components/Reusable/HeightSpacer';
const PlaceDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.id;
    console.log(id);
    const place = {
        "_id": "id1",
        "country_id": "country1",
        "title": "Statue of Libery",
        "description": "The Statue of Libery is ..........",
        "contact_id": "c1",
        "imageUrl": "https://source.unsplash.com/random",
        "rating": 4.8,
        "review": "1204 Reviews",
        "latitude": 40.689247,
        "longtitude": -74.044502,
        "location": "Liberty Island, United States",
        "popular": [
            {
                "_id": "place2",
                "title": "Statue of Libery",
                "imageUrl": "https://source.unsplash.com/random",
                "rating": 4.8,
                "review": "1204 Reviews",
                "location": "Liberty Island, United States",
            },
            {
                "_id": "place3",
                "title": "Statue of Libery",
                "imageUrl": "https://source.unsplash.com/random",
                "rating": 4.8,
                "review": "1204 Reviews",
                "location": "Liberty Island, United States",
            },
            {
                "_id": "place4",
                "title": "Statue of Libery",
                "imageUrl": "https://source.unsplash.com/random",
                "rating": 4.8,
                "review": "1204 Reviews",
                "location": "NY 10004, United States",
            },
            {
                "_id": "place5",
                "title": "Statue of Libery",
                "imageUrl": "https://source.unsplash.com/random",
                "rating": 4.8,
                "review": "1204 Reviews",
                "location": "Liberty, United States",
            }
        ]
    }
    return (
        <ScrollView>
            <View>
                <NetworkImage
                    source={place.imageUrl}
                    width={"100%"}
                    height={350}
                    radius={30}
                />

                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    title={place.title}
                    color={COLORS.white}
                    icon={"search1"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.description}>
                <HeightSpacer height={15} />
                <ReusableText
                    text={place.location}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />

                <DescriptionText text={place.description} />

                <View style={{ alignContent: "center" }}>
                    <HeightSpacer height={20} />

                    <View style={reusable.rowWithSpace("space-between")}>
                        <ReusableText
                            text={"Popular Destinations"}
                            family={"medium"}
                            size={TEXT.large}
                            color={COLORS.black}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('PopularHotels', place.country_id)}>
                            <Feather name="list" size={20} />
                        </TouchableOpacity>
                    </View>

                    <HeightSpacer height={20} />

                    <PopularList data={place.popular} />

                    <ReusableBtn
                        onPress={() => navigation.navigate("HotelSearch")}
                        btnText={"Find Best Hotels"}
                        width={SIZES.width - 40}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                    <HeightSpacer height={50} />
                </View>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails


const styles = StyleSheet.create({
    description: {
        marginHorizontal: 20,
    },
});


