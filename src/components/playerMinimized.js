import {React, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const ReproductorMinimizado = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
    <View style={PlayerStyles.container}>
        <View style={PlayerStyles.left}>
            <Image
                source={require("../imgs/800px-Clics-modernos-charly-garcia-front.jpg")} 
                style={{ 
                    height: 50,
                    width: 50
                }}
            />
            <View>
                <View style={{                
                    alignItems: 'start',
                    paddingHorizontal: 5,                
                    backgroundColor: 'gray',
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: 'white'
                    }}>Clics Modernos</Text>
                    <Text style={{
                        fontSize: 9,
                        color: 'white'
                    }}>Charly Garcia</Text>
                </View> 
            </View>
        </View>
        <View style={PlayerStyles.center}>
            <FontAwesome name="smile-o" style={{fontSize: 40}}/>
        </View>
        <View style={PlayerStyles.right}>
            <FontAwesome name="fast-backward" style={PlayerStyles.playerIcons}/>
            {/* <FontAwesome name="backward" style={PlayerStyles.playerIcons}/> */}
            <TouchableOpacity onPress={togglePlayPause}>
                <FontAwesome name={isPlaying ? "pause" : "play"} style={PlayerStyles.playerIcons} />
            </TouchableOpacity>
            {/* <FontAwesome name="forward" style={PlayerStyles.playerIcons}/> */}
            <FontAwesome name="fast-forward" style={PlayerStyles.playerIcons}/>
        </View>
    </View> 
  );
};

export default ReproductorMinimizado;

const PlayerStyles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        backgroundColor: 'red',
        width: '100%',
        height: 50
    },
    left:{
        flexDirection: 'row', 
        width: '45%', 
        backgroundColor: 'cyan', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    center:{
        width: '10%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    right:{
        flexDirection: 'row', 
        width: '45%',
        backgroundColor: 'cyan',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    playerIcons:{
        fontSize: 30,
        width: 30,
        height: 30,
        marginHorizontal: 15
    }
})