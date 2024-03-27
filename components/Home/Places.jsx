import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'

const Places = () => {
    const countries = [
        {
            _id: "1",
            country: "USA",
            description: "The USA is a tourist magnet ",
            imageUrl: "https://source.unsplash.com/random/400x300",
            region: "North America, USA",
        },
        {
            _id: "2",
            country: "UK",
            description: "The UK is a tourist magnet ",
            imageUrl: "https://source.unsplash.com/random/400x300",
            region: "Europe, UK",
        },
        {
            _id: "3",
            country: "Canada",
            description: "Canada is a tourist magnet ",
            imageUrl: "https://source.unsplash.com/random/400x300",
            region: "North America, Canada",
        },
        {
            _id: "4",
            country: "Australia",
            description: "Australia is a tourist magnet ",
            imageUrl: "https://source.unsplash.com/random/400x300",
            region: "Australia, Australia",
        },
        {
            _id: "5",
            country: "Germany",
            description: "Germany is a tourist magnet ",
            imageUrl: "https://source.unsplash.com/random/400x300",
            region: "Europe, Germany",
        },
    ]
    return (
        <View>
            <HeightSpacer height={20} />
            <VirtualizedList
                data={countries}
                horizontal
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[ index ]}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: SIZES.medium }}>
                        <Country item={item} />
                    </View>
                )}
            />
        </View>
    )
}

export default Places
