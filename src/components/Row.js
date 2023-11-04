import React from 'react'
import Constants from 'expo-constants'
import Item from './Item'
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback, FlatList, TouchableNativeFeedbackBase } from 'react-native'


const Row = ({ tituloSeccion, navigation, data }) => {
// const placeholderData = [1, 2, 3, 4, 5, 6, 7, 8];
let placeholderData = data && data.data && data.data.tracks;
    console.log(tituloSeccion); // Debería imprimir: 'Canciones'
    console.log(placeholderData); 
    // Ahora también puedes usar navigation.navigate, navigation.push, etc.
    return(
        <View overScrollMode='never'>
            <Text
            style={RowStyles.titleSection}
            >{tituloSeccion}</Text>
            <FlatList overScrollMode='never'
                // data={data && data.data.tracks}
                data={placeholderData}
                horizontal={true}
                renderItem={({ item }) => (
                    <View>
                        <Item key={item} img={item.album.images[0].url} nombreItem={item.name} descItem={item.artists[0].name} />                        
                    </View>
                )}
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