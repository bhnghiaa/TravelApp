import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReusableText from './ReusableText'
import { COLORS, SIZES } from '../../constants/theme'
import reusable from './reusable.style'
import NetworkImage from './NetworkImage'
import HeightSpacer from './HeightSpacer'
import Rating from './Rating'
import WidthSpacer from './WidthSpacer'
const ReusableTile = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={reusable.rowWidthSpace('flex-start')}>
                    <NetworkImage source={item.imageUrl} width={80} height={80} radius={12} />
                </View>
                <WidthSpacer width={15} />
                <View>
                    <ReusableText
                        text={item.title}
                        family={"medium"}
                        size={SIZES.medium}
                        color={COLORS.black} />
                    <HeightSpacer height={8} />

                    <ReusableText
                        text={item.location}
                        family={"medium"}
                        size={14}
                        color={COLORS.gray} />

                    <HeightSpacer height={8} />

                    <View style={reusable.rowWidthSpace("flex-start")}>
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

export default ReusableTile

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    }
})