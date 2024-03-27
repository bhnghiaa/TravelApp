import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import ReusableText from '../../components/Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './home.style'
import Places from '../../components/Home/Places'
import Recommendations from '../../components/Home/Recommendations'
import BestHotels from '../../components/Home/BestHotels'
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={reusable.container}>
            <View>
                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText text={"Hey User!"}
                        family={"regular"}
                        size={TEXT.xxLarge}
                        color={COLORS.black} />
                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Search")}>
                        <AntDesign name='search1' size={26} />
                    </TouchableOpacity>
                </View>
                <HeightSpacer height={SIZES.xLarge} />
                <ReusableText text={"Places"}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black} />
                <Places />
                <HeightSpacer height={15} />
                <Recommendations />
                <HeightSpacer height={30} />
                <BestHotels />
            </View>
        </SafeAreaView>
    )
}

export default Home


//08/004