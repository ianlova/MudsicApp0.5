import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Row from '../components/Row';
import Player from './Player';
import PlayerMinimized from './playerMinimized';
import SpotifyRecommendations from '../data/spotifyApi'

const HomeScreen = ({ navigation }) => {
    let data = SpotifyRecommendations()
    console.log(data)
    return (
        <View>
            <ScrollView overScrollMode="never">
                <Row navigation={navigation} tituloSeccion="Canciones" data={data} />
                <Text>{}</Text>
            </ScrollView>
            {/* <Player/> */}
        </View>
    );
};


export default HomeScreen;

