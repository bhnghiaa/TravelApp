import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import styles from './hotelsDetails.style';
import NetworkImage from '../../components/Reusable/NetworkImage';
import ReusableText from '../../components/Reusable/ReusableText';
import HeightSpacer from '../../components/Reusable/HeightSpacer';
import reusable from '../../components/Reusable/reusable.style';
import { Rating } from 'react-native-stock-star-rating';
import HotelMap from '../../components/Hotel/HotelMap';
import { Feather } from '@expo/vector-icons';
import ReviewsList from '../../components/Hotel/ReviewsList';
import DescriptionText from '../../components/Reusable/DescriptionText';
import ReusableBtn from '../../components/Buttons/ReusableBtn';
const HotelsDetails = ({ route }) => {
    const id = route.params.id;
    const navigation = useNavigation();
    const hotel = {
        "availability": {
            "start": "2023-08-20T00:00:00:00.000Z",
            "end": "2023-08-25T00:00:00.000Z"
        },
        "coordinates": {
            "latitude": 37.774929,
            "longitude": -122.419415
        },
        "_id": "hotel1",
        "country_id": "country1",
        "title": "Urban Chic Information",
        "description": "Lorem tur adipisicin Lorem ipsuetur a consectetur adipisicin Lorem ipsum dolor sit amet, consectetur adipisicin Lorem ipsum dolor sit amet, consectetur adipisicin v Lorem ipsum dolor sit amet, consectetur adipisicin Lorem ipsum dolor sit amet, consectetur adipisicin Lorem ipsum dolor sit amet, consectetur adipisicin consectetur adipisicin Lorem ipsum dolor sit amet, consectetur adipisicin ipsum dolor sit amet, consectetur adipisicing elit. Dicta alias repudiandae nobis deleniti unde consequatur illum fuga velit. Accusantium autem perspiciatis est vel perferendis nihil laborum mollitia eius architecto pariatur!",
        "contact": "031564845",
        "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "rating": 4.8,
        "review": "1204 Reviews",
        "location": "San Francisco",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "price": 400,
        "facilities": [
            {
                "wifi": true,
                "_id": "4as5a7s8",
            }
        ],
        "__v": 1,
        "reviews": [
            {
                "_id": "id1",
                "rating": 4.8,
                "review": "ashdsadhasjdhsajk djsadh asdhaskjd hsakjdh askdhsakjd hsajkdh sajdhsak dahsdjk",
                "user": {
                    "_id": "45a4sdasda54",
                    "username": "John Doe",
                    "profile": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                },
                "updateAt": "2023-08-20T00:00:00:00.000Z",
            },
            {
                "_id": "id2",
                "rating": 4.8,
                "review": "ashdsadhasjdhsajk djsadh asdhaskjd hsakjdh askdhsakjd hsajkdh sajdhsak dahsdjk",
                "user": {
                    "_id": "45a4sdasda54",
                    "username": "John Doe",
                    "profile": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                },
                "updateAt": "2023-08-20T00:00:00:00.000Z",
            },
            {
                "_id": "id3",
                "rating": 4.8,
                "review": "ashdsadhasjdhsajk djsadh asdhaskjd hsakjdh askdhsakjd hsajkdh sajdhsak dahsdjk",
                "user": {
                    "_id": "45a4sdasda54",
                    "username": "John Doe",
                    "profile": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                },
                "updateAt": "2023-08-20T00:00:00:00.000Z",
            }
        ]
    }
    let coordinates = {
        id: hotel._id,
        title: hotel.title,
        latitude: hotel.coordinates.latitude,
        longitude: hotel.coordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }
    return (
        <ScrollView>
            <View style={{ height: 80 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={hotel.title}
                    color={COLORS.white}
                    icon={"message1"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate("Chat")}
                />
            </View>

            <View>
                <View style={styles.container}>
                    <NetworkImage
                        source={hotel.imageUrl}
                        width={"100%"}
                        height={220}
                        radius={25}
                    />

                    <View style={styles.titleContainer}>
                        <View style={styles.titleColumn}>
                            <ReusableText
                                text={hotel.title}
                                family={"medium"}
                                size={SIZES.xLarge}
                                color={COLORS.black}
                            />

                            <HeightSpacer height={10} />
                            <ReusableText
                                text={hotel.location}
                                family={"medium"}
                                size={SIZES.medium}
                                color={COLORS.black}
                            />

                            <HeightSpacer height={15} />

                            <View style={reusable.rowWithSpace("space-between")}>
                                <Rating
                                    maxStars={5}
                                    stars={hotel.rating}
                                    bordered={false}
                                    color={"#FD9942"}
                                />

                                <ReusableText
                                    text={`(${hotel.review})`}
                                    family={"medium"}
                                    size={SIZES.medium}
                                    color={COLORS.gray}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[ styles.container, { paddingTop: 90 } ]}>
                    <ReusableText
                        text={"Description"}
                        family={"medium"}
                        size={SIZES.large}
                        color={COLORS.black}
                    />

                    <HeightSpacer height={10} />

                    <DescriptionText text={hotel.description} />

                    <ReusableText
                        text={"Location"}
                        family={"medium"}
                        size={SIZES.large}
                        color={COLORS.black}
                    />

                    <ReusableText
                        text={hotel.location}
                        family={"regular"}
                        size={SIZES.small + 2}
                        color={COLORS.gray}
                    />
                    <HotelMap coordinates={coordinates} />

                    <View style={reusable.rowWithSpace("space-between")}>
                        <ReusableText
                            text={"Reviews"}
                            family={"medium"}
                            size={SIZES.large}
                            color={COLORS.black}
                        />

                        <TouchableOpacity>
                            <Feather name="list" size={20} />
                        </TouchableOpacity>
                    </View>

                    <HeightSpacer height={10} />

                    <ReviewsList reviews={hotel.reviews} />
                </View>
                <View style={[ reusable.rowWithSpace("space-between"), styles.bottom ]}>
                    <View>
                        <ReusableText
                            text={`\$ ${hotel.price}`}
                            family={"medium"}
                            size={SIZES.large}
                            color={COLORS.black}
                        />
                        <HeightSpacer height={5} />

                        <ReusableText
                            text={"Jan 01 - Dec 25"}
                            family={"medium"}
                            size={SIZES.medium}
                            color={COLORS.gray}
                        />
                    </View>

                    <ReusableBtn
                        onPress={() => navigation.navigate("SelectRoom")}
                        btnText={"Select Room"}
                        width={(SIZES.width - 50) / 2.2}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default HotelsDetails
