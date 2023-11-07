import {React, useRef} from 'react'
import Constants from 'expo-constants'
import Item from './Item'
import Row from './Row'
import Reproductor from '../screens/Player'
import Profile from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayerMinimized from './playerMinimized'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Rnd } from 'react-rnd';
import DraggableComponent from '../components/moving'
import { StyleSheet, Text, View, Image, Alert, TouchableNativeFeedback, FlatList, TouchableNativeFeedbackBase, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './Navigator';
import HomeScreen from '../screens/HomeScreen'
import { Animated, PanResponder, Dimensions } from 'react-native';




const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const placeholderData = [1, 2, 3, 4, 5, 6, 7, 8];

const Main = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    let lastY
    let movido
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (movido) {
          console.log(pan.getLayout())
          pan.y.setValue(lastY)
          Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(event, gestureState);
          movido=false
        }
          // console.log(pan.getLayout())
          // pan.y.setValue(lastY)
          Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(event, gestureState);
        // console.log(gestureState.dx)
      },
      onPanResponderRelease: () => {
        Animated.spring(pan.y, {
          toValue: pan.y._value < (windowHeight / 300) ? (windowHeight*-1.012) : (windowHeight*-0.0002950),
          useNativeDriver: false,
        }).start(() => {
          movido = true
          lastY = pan.y._value
          console.log(lastY)
          // Esto se ejecuta después de la animación
          // pan.y.setValue(pan.getLayout);  // Restablece pan.y a 0
          // console.log(pan.y._value)
        });
      },
    });
  
    return(
        <View style={{flex:1}}>
              <View style={{flex: 1}}>
                <NavigationContainer style={styles.container}>
                  <BottomTab/>  
                  {/* <PlayerMinimized/> */}
                </NavigationContainer>
              </View>
          <Animated.View {...panResponder.panHandlers} style={[pan.getLayout(), { flex: 0.0015, width: '100%', height: '100000%'}]}>
            <PlayerMinimized></PlayerMinimized>
            <View style={{height:'1000%', position:'absolute', height: (windowHeight + (windowHeight*0.1)), width: windowWidth }}>
                <Reproductor></Reproductor>
            </View>
        </Animated.View>
        </View>
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