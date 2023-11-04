import React from 'react'
import Constants from 'expo-constants'
import Item from './Item'
import Row from './Row'
import Player from '../screens/Player'
import Profile from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayerMinimized from './playerMinimized'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { StyleSheet, Text, View, Image, Alert, TouchableNativeFeedback, FlatList, TouchableNativeFeedbackBase, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './Navigator';
import HomeScreen from '../screens/HomeScreen'

const placeholderData = [1, 2, 3, 4, 5, 6, 7, 8];

const Main = () => {
    return(
        <NavigationContainer style={styles.container}>
            <View style={{flex: 1}}>
                <BottomTab/>  
                <PlayerMinimized/>
            </View>
        </NavigationContainer>
    )
} 
export default Main

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
});