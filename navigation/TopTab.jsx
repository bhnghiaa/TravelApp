import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopBookings from '../screens/top/TopBookings';
import TopInfor from '../screens/top/TopInfor';
import TopTrips from '../screens/top/TopTrips';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';
import NetworkImage from '../components/Reusable/NetworkImage';
import AppBar from '../components/Reusable/AppBar';
import styles from './TopTab.style';
import HeightSpacer from '../components/Reusable/HeightSpacer';
import ReusableText from '../components/Reusable/ReusableText';
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    <NetworkImage
                        source={"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"}
                        width={"100%"}
                        height={300}
                        radius={0}
                    />
                    <AppBar
                        top={20}
                        left={20}
                        right={20}
                        color={COLORS.white}
                        icon={"logout"}
                        color1={COLORS.white}
                        onPress1={() => alert("Logout")}
                    />
                    <View style={styles.profile}>
                        <Image
                            source={{ uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" }}
                            style={styles.image}
                        />
                        <HeightSpacer height={5} />


                        <View style={{ alignItems: "center" }}>
                            <ReusableText
                                text={"Bui Hai Nghia"}
                                family={"medium"}
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                            <HeightSpacer height={5} />
                            <View style={styles.name}>
                                <ReusableText
                                    text={"hainghia1216@gmail.com"}
                                    family={"medium"}
                                    size={SIZES.medium}
                                    color={COLORS.white}
                                />
                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Bookings" component={TopBookings} />
                <Tab.Screen name="Trips" component={TopTrips} />
                <Tab.Screen name="Infor" component={TopInfor} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}
//004

export default TopTab