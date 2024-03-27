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
const CountryDetails = () => {
    const country = {
        "_id": "1",
        "country": "USA",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea aliquam nesciunt pariatur perferendis debitis, aspernatur sapiente vitae quidem architecto cupiditate facilis tempora sed qui, veritatis asperiores amet quibusdam ipsam?",
        "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "popular": [
            {
                "_id": "id1",
                "title": "Walt Disney World",
                "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                "location": "Orlando, USA",
                "rating": 4.7,
                "review": "1204 Reviews"
            },
            {
                "_id": "id2",
                "title": "Statue of Liberty",
                "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                "location": "New York, USA",
                "rating": 4.7,
                "review": "1204 Reviews"
            },
            {
                "_id": "id3",
                "title": "Statue of Liberty",
                "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                "location": "New York, USA",
                "rating": 4.7,
                "review": "1204 Reviews"
            },
            {
                "_id": "id4",
                "title": "Statue of Liberty",
                "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                "location": "New York, USA",
                "rating": 4.7,
                "review": "1204 Reviews"
            },
            {
                "_id": "id5",
                "title": "Statue of Liberty",
                "imageUrl": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                "location": "New York, USA",
                "rating": 4.7,
                "review": "1204 Reviews"

            }
        ],
        "region": "North America, USA"
    }
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <NetworkImage
                        source={country.imageUrl}
                        width={"100%"}
                        height={350}
                        radius={30} />
                    <AppBar
                        top={20}
                        left={20}
                        right={20}
                        title={country.country}
                        color={COLORS.white}
                        icon={"search1"}
                        onPress={() => navigation.goBack()}
                        onPress1={() => navigation.navigate("Search")}
                    />
                </View>
                <View style={styles.description}>
                    <ReusableText
                        text={country.region}
                        family={"medium"}
                        size={TEXT.xLarge}
                        color={COLORS.black}
                    />
                    <DescriptionText text={country.description} />
                    <View style={{ alignContent: "center" }}>
                        <HeightSpacer height={10} />
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={"Popular Destinations"}
                                family={"medium"}
                                size={TEXT.large}
                                color={COLORS.black}
                            />

                            <TouchableOpacity>
                                <Feather name='list' size={20} />
                            </TouchableOpacity>

                        </View>
                        <HeightSpacer height={30} />
                        <PopularList data={country.popular} />
                        <ReusableBtn
                            onPress={() => navigation.navigate("HotelSearch")}
                            btnText={"Find Best Hotels"}
                            width={(SIZES.width - 40)}
                            backgroundColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CountryDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F4F8",
    },
    description: {
        marginHorizontal: 20,
        paddingTop: 20,
    },
})

