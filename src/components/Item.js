import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback, Image } from 'react-native'

const Item = ({img, nombreItem, descItem}) => {
    // console.log(img)
    return (
        <View style={ItemStyles.container}>
            { <Image
                source={{uri: img}} 
                style={ItemStyles.img}
            /> }
            <View style={ItemStyles.textContainer}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={ItemStyles.nameItem
                }>{nombreItem}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={ItemStyles.descItem
                }>{descItem}</Text>
            </View>
            
        </View>
    )

} 
export default Item

const ItemStyles = StyleSheet.create({    
    container: {
        margin: 5,
        padding: 7,
        flexDirection: 'column', // Alinea la imagen y el texto en fila
        alignItems: 'center',
        backgroundColor: 'gray',
        width: 150,
        height: 200,
      },
      img: {
        width: 130,
        height: 130,
      },
      textContainer: {
        flex: 1, // El texto debe ocupar todo el espacio disponible
        maxWidth: 170,
        height: 80,
        justifyContent: 'center',
      },
      nameItem: {
        fontSize: 12,
        paddingHorizontal: 5,
        color: 'white',
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '800'
      },
      descItem: {
        fontSize: 11,
        fontStyle: 'italic',
        paddingHorizontal: 7,
        marginTop: -5,
        color: 'white',
        textAlign: 'center'
      },
})