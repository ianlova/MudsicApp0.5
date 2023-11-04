import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Row from '../components/Row'
import SpotifyRecommendations from '../data/spotifyApi'

const MoodsScreen = ({navigation}) => {
    let data = SpotifyRecommendations()
    console.log(data)
    return(
        <View>
            <ScrollView overScrollMode="never">
                <Row navigation={navigation} tituloSeccion="Canciones" data={data} />
                <Text>{}</Text>
            </ScrollView>
        </View>
    )
}

export default MoodsScreen;