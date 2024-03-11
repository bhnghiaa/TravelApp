import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './slides.style'
import React from 'react'
import ReusableText from '../Reusable/ReusableText'
import ReusableBtn from '../Buttons/ReusableBtn'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
const Slides = ({ item }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Image source={item.image} style={styles.image} />
            <View style={styles.stack}>
                <ReusableText text={item.title}
                    family="medium"
                    size={SIZES.xxLarge}
                    color={COLORS.white} />
                <HeightSpacer height={40} />
                <ReusableBtn
                    onPress={() => navigation.navigate("Bottom")}
                    btnText={"Let's go"}
                    width={(SIZES.width - 50) / 2.2}
                    backgroundColor={COLORS.red}
                    borderColor={COLORS.red}
                    borderWidth={0}
                    textColor={COLORS.white}
                />
                {/* <HeightSpacer height={40} />
                <ReusableBtn
                    onPress={() => console.log("Press")}
                    btnText={"Let's go"}
                    width={(SIZES.width - 50) / 2.2}
                    backgroundColor={COLORS.white}
                    borderColor={COLORS.red}
                    borderWidth={1}
                    textColor={COLORS.black}
                /> */}
            </View>
        </SafeAreaView>
    )
}

export default Slides
