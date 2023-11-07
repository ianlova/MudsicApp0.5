import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MoodsScreen from '../screens/MoodsScreen';
import Search from '../screens/Search'

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return(
        <Tab.Navigator style={TabStyles.tabNavigator} screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen
                style={TabStyles.tabScreen}
                name="Home"
                component={HomeScreen}
                options={{
                tabBarLabel: '', // O bien, tabBarLabel: undefined
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome style={TabStyles.icon} name="home" color={color} size={size} />
                ),
                }}
            ></Tab.Screen>
            <Tab.Screen style={TabStyles.tabScreen}
                name="Favs"
                component={FavoritesScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome style={TabStyles.icon} name="heart" color={color} size={size} />
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen style={TabStyles.tabScreen}
            name="Search"
            component={Search}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome style={TabStyles.icon} name="search" color={color} size={size} />
                ),
            }}
        ></Tab.Screen>           
            <Tab.Screen style={TabStyles.tabScreen}
                name="Mood"
                component={MoodsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome style={TabStyles.icon} name="smile-o" color={color} size={size} />
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen style={TabStyles.tabScreen}
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome style={TabStyles.icon} name="user" color={color} size={size} />
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}
const TabStyles = StyleSheet.create({
    tabNavigator:{
        position: 'fixed', 
        bottom: 0,
        flexDirection: 'row', // Alinea los iconos horizontalmente
        justifyContent: 'space-evenly', // Espacio entre los iconos
        alignItems: 'center', // Alinea los iconos verticalmente
    },
    tabScreen:{
        width: 50,
        height: 50,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 150
    },
    icon:{
        fontSize: 20,
        marginTop: 'auto'
    }

})