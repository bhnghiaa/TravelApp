import { View, FlatList } from 'react-native'
import React from 'react'
import Slides from '../../components/Onboard/Slides'


const Onboarding = () => {

    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: "Find the perfect place to stay"
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: "Discover the world"
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: "Find the best Hotels in the world"
        },

    ]
    return (

        <View>
            <FlatList
                pagingEnabled
                horizontal
                showHorizontalScrollIndicator={false}
                data={slides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Slides item={item}
                />}
            />
        </View>

    )
}

export default Onboarding

