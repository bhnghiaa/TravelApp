import { TouchableOpacity, Text, TextInput, View, Image, FlatList } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '../../constants/theme'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import ReusableTile from '../../components/Reusable/ReusableTile'
import HotelCard from '../../components/Tiles/Hotels/HotelCard'
import AppBar from '../../components/Reusable/AppBar'

const HotelSearch = ({ navigation }) => {

    const [ searchKey, setSearchKey ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    const search = [
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
        <SafeAreaView style={reusable.container}>
            <View style={{ height: 50 }}>
                <AppBar
                    top={20}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    title="Look for hotels"
                    icon="filter"
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate("HotelSearch")}
                />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        value={searchKey}
                        onChangeText={setSearchKey}
                        placeholder="Where do you want to visit"
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>
            {search.length === 0 ? (
                <View>
                    <HeightSpacer height={'20%'} />
                    <Image source={require('../../assets/images/search.png')} style={styles.searchImage} />
                </View>
            ) : (
                <FlatList
                    data={search}
                    keyExtractor={(item) => item._id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.tile}>
                            <HotelCard
                                item={item}
                                margin={10}
                                onPress={() => navigation.navigate("HotelsDetails", { id: item._id })} />
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

export default HotelSearch
