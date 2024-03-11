import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import Location from '../../screens/location/Location';
import Chat from '../../screens/chat/Chat';
import Profile from '../../screens/profile/Profile';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme';
const Tab = createBottomTabNavigator();
const tabBarStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 12,
    height: 55,
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={
                {
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'grid' : 'grid-outline'}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26} />
                    )
                }
            } />
            <Tab.Screen name="Location" component={Location} options={
                {
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'location' : 'location-outline'}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26} />
                    )
                }
            } />
            <Tab.Screen name="Chat" component={Chat} options={
                {
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26} />
                    )
                }
            } />
            <Tab.Screen name="Profile" component={Profile} options={
                {
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26} />
                    )
                }
            } />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})