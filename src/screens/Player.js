import {React, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import ReproductorMinimizado from '../components/playerMinimized'
// import PlayerControls from './PlayerControls'; // Crea este componente

// const [position, setPosition] = React.useState(0);
// const status = await sound.getStatusAsync();
// setPosition(status.positionMillis);

const currentTime = '0:12'
const totalTime = '2:12'

const Reproductor = () => {
  const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
  return (
    <View style={{
      // height: '96.5%',
      flex: 1,
      height: '100%',
      alignItems: 'center',   
      backgroundColor: 'orange' ,
      position: 'relative'  
    }}>
      {/* <ReproductorMinimizado></ReproductorMinimizado> */}
      <Text style={PlayerStyles.youAreListening}>Estás escuchando</Text>
      <Text style={PlayerStyles.list}>Nombre de la lista de reproducción</Text>
      <Image
      source={require('../imgs/800px-Clics-modernos-charly-garcia-front.jpg')} 
      style={PlayerStyles.cover} />
      <Text style={PlayerStyles.nameItem}>Nombre de la canción</Text>
      <Text style={PlayerStyles.descItem}>Artista</Text>
        
      <View style={PlayerStyles.timeCont}>
        {/* <Slider
          value={'position'}
          maximumValue={status.durationMillis}
          onValueChange={(value) => setPosition(value)}
        /> */}
        <Text style={PlayerStyles.timeNumber}>{currentTime}</Text>
        <Text style={PlayerStyles.timeNumber}>{totalTime}</Text>
      </View>

      <View style={PlayerStyles.buttonsCont}>
            <FontAwesome name="smile-o" style={PlayerStyles.playerIcons}/>
            <FontAwesome name="list" style={PlayerStyles.playerIcons}/>
            {/* <FontAwesome name="fast-backward" style={PlayerStyles.playerIcons}/> */}
            <FontAwesome name="backward" style={PlayerStyles.playerIcons}/>
            <TouchableOpacity onPress={togglePlayPause}>
                <FontAwesome name={isPlaying ? "pause" : "play"} style={PlayerStyles.playerIcons} />
            </TouchableOpacity>
            {/* <FontAwesome name="pause" style={PlayerStyles.playerIcons}/> */}
            <FontAwesome name="forward" style={PlayerStyles.playerIcons}/>
            {/* <FontAwesome name="fast-forward" style={PlayerStyles.playerIcons}/> */}
            <FontAwesome name="share" style={PlayerStyles.playerIcons}/>
            <FontAwesome name="info" style={PlayerStyles.playerIcons}/>
        </View>
    </View>
  );
};

export default Reproductor;

const PlayerStyles = StyleSheet.create({
    cover:{
      width: 280, 
      height: 280, 
      marginTop: 30, 
      marginBottom: 10
    },
    youAreListening:{
      marginTop: 80,
      fontSize: 16
    },
    list:{
      fontSize: 18
    },
    nameItem:{
      fontSize: 20
    },
    descItem:{
      fontSize: 18,
      marginTop: -3
    },
    timeCont:{
      flexDirection: 'row',
      width: '100%',
      marginTop: 20,
      justifyContent: 'space-between',
      paddingHorizontal: '12%'
    },
    timeNumber:{
      fontSize: 10,
    },
    buttonsCont:{
      flexDirection: 'row',
      width: '85%',
      marginTop: 15,
      backgroundColor: 'yellow',
      justifyContent: 'space-evenly',
      textAlign: 'center',
      padding: 7,
      paddingHorizontal: 3
    },
    playerIcons:{
      fontSize: 27,
      width: 30,
      height: 30,
      backgroundColor: 'blue',
      textAlign: 'center',
      justifyContent: 'center',
      padding: 'auto',
      paddingTop: 1.5
  }
})
