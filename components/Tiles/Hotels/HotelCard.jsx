import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../../../constants/theme'
import NetworkImage from '../../Reusable/NetworkImage'
import HeightSpacer from '../../Reusable/HeightSpacer'
import ReusableText from '../../Reusable/ReusableText'
import Rating from '../../Reusable/Rating'
import reusable from '../../Reusable/reusable.style'
import WidthSpacer from '../../Reusable/WidthSpacer'
const HotelCard = ({ item, margin, onPress }) => {
    return (
        <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
            <View>
                <View style={styles.imageContainer}>
                    <NetworkImage
                        source={item.imageUrl}
                        width={"90%"}
                        height={"100%"}
                        radius={16}
                    />
                </View>
                <HeightSpacer height={5} />

                <View style={{ padding: 10 }}>
                    <ReusableText
                        text={item.title}
                        family={"medium"}
                        size={SIZES.medium}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={5} />
                    <ReusableText
                        text={item.location}
                        family={"medium"}
                        size={SIZES.medium}
                        color={COLORS.black} />

                    <HeightSpacer height={5} />

                    <View style={reusable.rowWithSpace("flex-start")}>
                        <Rating rating={item.rating} />
                        <WidthSpacer width={8} />
                        <ReusableText
                            text={`(${item.review})`}
                            family={"medium"}
                            size={14}
                            color={COLORS.gray} />
                    </View>


                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) => ({
        width: SIZES.width / 2.2,
        height: 260,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        marginRight: margin
    }),
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
        height: 150
    }
})