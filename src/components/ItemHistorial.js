import React from 'react'
import Constants from 'expo-constants'
import Item from './Item'
import ItemPlaylist from './itemPlaylist'
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback, FlatList, TouchableNativeFeedbackBase } from 'react-native'


const listPlaylist = ({ navigation, key, img, nombreItem }) => {
// const placeholderData = [1, 2, 3, 4, 5, 6, 7, 8];
let placeholderData = data && data.data && data.data.tracks;    
    console.log(placeholderData); 
    // Ahora también puedes usar navigation.navigate, navigation.push, etc.
    return(
        <View overScrollMode='never'>            
            <FlatList overScrollMode='never'
                // data={data && data.data.tracks}
                data={placeholderData}
                horizontal={true}
                renderItem={({ item }) => (
                    <View>
                        <ItemPlaylist key={key} img={img} nombreItem={nombreItem} descItem={descItem} />                        
                    </View>
                )}
            />    
        </View>  
    )
    
}

export default listPlaylist

const listStyle = StyleSheet.create({    
    titleSection:{
        fontSize: 22,
        minWidth: '80%',
        backgroundColor: 'black',
        color: 'white',        
        paddingLeft: 10,
        borderRadius: 3,
        textTransform: 'capitalize' 
  }
})