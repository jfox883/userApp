import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";


import { Home, Messages, User } from "../screens";
import { COLORS, icons } from "../constants";
import useColorScheme from '../hooks/useColorScheme';


const Tab = createBottomTabNavigator();

const mainTabs = () => {
    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: COLORS[colorScheme].tint
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.notification}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS[colorScheme].primary : COLORS[colorScheme].secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.send}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS[colorScheme].primary : COLORS[colorScheme].secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="User"
                component={User}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS[colorScheme].primary : COLORS[colorScheme].secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default mainTabs
