import React from "react";
import {
    Image
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons,COLORS} from "../constants/"
import { Home} from "../screens/"

const Tab = createBottomTabNavigator();
const taboptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
        height: "10%",
        backgroundColor: COLORS.black
    }
}

const Tabs = ( ) => {
    return (
        <Tab.Navigator
            
            screenOptions= {({route}) => ({
                //tabBarOptions: {taboptions},
                headerShown:false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: "10%",
                    backgroundColor: COLORS.black
                },
                tabBarIcon: ( {focused } ) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray
                    switch (route.name) {
                        case "Home" : 
                            return (
                                <Image 
                                    source={icons.dashboard_icon}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        height: 20,
                                        width: 20
                                    }}
                                />
                            )
                        case "search" : 
                            return (
                                <Image 
                                    source={icons.search_icon}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        height: 20,
                                        width: 20
                                    }}
                                />
                            )
                        case "notification" : 
                            return (
                                <Image 
                                    source={icons.notification_icon}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        height: 20,
                                        width: 20
                                    }}
                                />
                            )
                        case "setting" : 
                            return (
                                <Image 
                                    source={icons.menu_icon}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        height: 20,
                                        width: 20
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen 
                name= "Home"
                component= {Home}
            />
            <Tab.Screen 
                name= "search"
                component= {Home}
            />
            <Tab.Screen 
                name= "notification"
                component= {Home}
            />
            <Tab.Screen 
                name= "setting"
                component= {Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs;