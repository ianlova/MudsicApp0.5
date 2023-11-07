import React, { useEffect, useState } from 'react';
import {Button} from 'react-native';
import {Audio} from 'expo-av'
import Constants from 'expo-constants'
import Item from './Item'
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback, FlatList, TouchableNativeFeedbackBase } from 'react-native'
import * as Shazam from '../data/Shazam'
import { shadow } from 'react-native-paper';



// // Para pausar el audio
// try {
//   await soundObject.pauseAsync();
// } catch (error) {
//   console.log('Error al pausar el audio', error);
// }

// // Para reanudar el audio
// try {
//   await soundObject.playAsync();
// } catch (error) {
//   console.log('Error al reanudar el audio', error);
// }

// // Para ajustar el volumen
// try {
//   await soundObject.setVolumeAsync(0.5); // Establece el volumen al 50%
// } catch (error) {
//   console.log('Error al ajustar el volumen', error);
// }

const Row = ({ titleSection, navigation, data }) => {
const [soundObject] = useState(new Audio.Sound());
const [status, setSatus] = useState({});
// const placeholderData = [1, 2, 3, 4, 5, 6, 7, 8];
let placeholderData = data && data.items;
    // console.log(titleSection);
    // console.log(placeholderData); 
    async function Preview(url) {
        // Para cargar y reproducir el audio
            // await setSoundObject()
        try {

            if (status.isLoaded) {
                await soundObject.stopAsync();
                await soundObject.unloadAsync();
            }
            if (url === null) {
                url = 'https://p.scdn.co/mp3-preview/fbef3cdacb1636624f4a3bbc2050b008414dd1d7?cid=eed31a43318f478ba48917070c9c3b37'
                // url = await search(item.name).tracks.items
            }
            try {
                await soundObject.loadAsync({uri: url});
            } catch (error) {
                await soundObject.unloadAsync();
            }
            await soundObject.stopAsync();
            await soundObject.setVolumeAsync(0); 
            await soundObject.playAsync();
            let volume = 0;
            const increaseVolumeInterval = setInterval(async () => {
            volume += 0.00005;
            if (volume > 0.2) {
                volume = 0.2;
                clearInterval(increaseVolumeInterval);
            }
            await soundObject.setVolumeAsync(volume);
            }, 100);
            setSatus(await soundObject.getStatusAsync())
            console.log(status)
        } catch (error) {
            console.log('Error al reproducir el audio', error);
            // await soundObject.unloadAsync();
            await soundObject.loadAsync({uri: url});

        }
    }
    
    return(
        <View overScrollMode='never'>
            <Text
            style={RowStyles.titleSection}
            >{titleSection}</Text>
            <FlatList overScrollMode='never'
                // data={data && data.data.tracks}
                data={placeholderData}
                horizontal={true}
                renderItem={({ item }) => {
                    switch (titleSection) {
                        case 'Artistas':
                            return(                
                                <View onStartShouldSetResponder={async ()=>{
                                        // link = await Shazam.search(item.name).artists[0];

                                    }
                                    } onTouchEnd={()=>console.log('Artista')}>
                                    {/* <Button title='a' onPress={()=>console.log('precionado')} > */}
                                    <Item key={item} img={item.images&&item.images[0]&&item.images[0].url} nombreItem={item.name} descItem={item.genres} />        
                                    {/* </Button>                 */}
                                </View>
                                )
                            break;
                        case 'Canciones':
                            
                            return(                
                                <View onStartShouldSetResponder={async ()=>{
                                    let url
                                    if (item.preview_url === null) {
                                        url = await Shazam.search(item.name)
                                        url = url.data[0].preview
                                        await Preview(url)
                                        console.log(url)

                                    }else{
                                        console.log('no nulo')
                                        await Preview(item.preview_url)
                                    }}} onTouchEnd={()=>console.log('Cancion')}>
                                    <Item key={item} img={item.album.images[0].url} nombreItem={item.name} descItem={item.artists[0].name} />                        
                                </View>
                                )
                            break;
                        case 'Albumes':
                            return(
                                <View onStartShouldSetResponder={()=>console.log('Preview')} onTouchEnd={()=>console.log('Album')}>
                                    <Item key={item} img={item.images[0].url} nombreItem={item.name} descItem={item.artists.map(artist => artist.name).join(', ')} />
                                </View>
                            )
                            break;
                        default:
                            break;
                    }
                // return(
                //     <View>
                //         <Item key={item} img={item.album.images[0].url} nombreItem={item.name} descItem={item.artists[0].name} />                        
                //     </View>
                // )
            }

                }
                
            />    
        </View>  
    )
    
}

export default Row

const RowStyles = StyleSheet.create({    
    titleSection:{
        fontSize: 22,
        backgroundColor: 'black',
        color: 'white',
        marginTop: 20, 
        paddingLeft: 10,
        borderRadius: 3,
        textTransform: 'capitalize'        
    }
})