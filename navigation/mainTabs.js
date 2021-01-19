import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";


import { Home, Messages, User } from "../screens";
import { COLORS, icons } from "../constants";


const Tab = createBottomTabNavigator();

const mainTabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: COLORS.tint
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
                                tintColor: focused ? COLORS.primary : COLORS.secondary
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
                                tintColor: focused ? COLORS.primary : COLORS.secondary
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
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default mainTabs
