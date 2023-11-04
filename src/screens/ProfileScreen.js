import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import PersonCharts from '../components/personCharts';
import PersonTastes from '../components/personTastes';
import { BottomTab } from '../components/Navigator';


const artistasData = [
    {
        imageUri: 'https://yt3.googleusercontent.com/ytc/APkrFKZpUktxBWFM9yWvMy82hRaLTpn8im_dPaWekiRPtA=s176-c-k-c0x00ffffff-no-rj',
        nombre: 'Rojuu',
        descripcion: '',
    },
    {
        imageUri: 'https://yt3.googleusercontent.com/ytc/APkrFKarUjQSIx2RvQjv5DNB9b95fwIYIgC-h7aMvcnz=s176-c-k-c0x00ffffff-no-rj',
        nombre: 'Charly Garcia',
        descripcion: '',
    },
    {
        imageUri: 'https://yt3.googleusercontent.com/ruwLeTIge03D7kMB5ndj-xTHNvs2ktQhAXWcmP-_PLgZCjnTC4JqLHkBIzM9IfEWnXle4WRngg=s176-c-k-c0x00ffffff-no-rj',
        nombre: 'Dillom',
        descripcion: '',
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5oykZfPkuwthKet9TiOqgCdbW5TyIcFFnBIs2dGZwx0zBBgIWGhu5uK2tUYEmJ7daDs&usqp=CAU',
        nombre: 'Pipe efe e',
        descripcion: '',
    },
];
const cancionesData = [
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Fs9bASUSkoS6jlkZk8KGhbooAgO3D7qCFAaJ6qHrR87RjTNJQK-wmVLknkPl2BK8fZM&usqp=CAU',
        nombre: 'Dumbdvd erasmus',
        descripcion: 'Rojuu',
    },
    {
        imageUri: 'https://i.scdn.co/image/ab67616d0000b2738de852f566517d648d849a78',
        nombre: '0800',
        descripcion: 'Broke Carrey',
    },
    {
        imageUri: 'https://images.genius.com/f06aa6448bcc2d1fc34c63c1f930d4b9.1000x1000x1.jpg',
        nombre: 'Mami Issues',
        descripcion: 'Dillom ft Mechayrxmeo',
    },
    {
        imageUri: 'https://yt3.googleusercontent.com/y-Owt-c51FFvVksUGLuiigdn0SFM5Dg3UY_PYlbP4FlRR1eWoMkZ3wN_pbEGCFYAqK7bbdaPglQ=s900-c-k-c0x00ffffff-no-rj',
        nombre: 'MUNDO ROTO',
        descripcion: 'Ronpe 99',
    },
];
const albumesData = [
    {
        imageUri: 'https://i.pinimg.com/originals/3c/25/27/3c2527984050647fe6738001aaf5c4ca.jpg',
        nombre: 'Un Verano Sin Ti',
        descripcion: 'Bad Bunny',
    },
    {
        imageUri: 'https://source.boomplaymusic.com/group10/M00/04/01/bc32f99be3c9415da142c48bd135409e_320_320.jpg',
        nombre: 'Warp 5',
        descripcion: 'Zeballos',
    },
    {
        imageUri: 'https://yt3.googleusercontent.com/y-Owt-c51FFvVksUGLuiigdn0SFM5Dg3UY_PYlbP4FlRR1eWoMkZ3wN_pbEGCFYAqK7bbdaPglQ=s900-c-k-c0x00ffffff-no-rj',
        nombre: 'MUNDO ROTO',
        descripcion: 'Ronpe 99',
    },
    {
        imageUri: 'https://images.genius.com/c5bdb56fee0b7971262f852bbcdc6f35.1000x1000x1.png',
        nombre: 'Asimetría',
        descripcion: 'Zeballos',
    },
];
const generosData = [
    {
        imageUri: 'https://cdns-images.dzcdn.net/images/artist/e8dd234df195afb7c9690b5f05e37b37/500x500.jpg',
        nombre: 'Rap',
        descripcion: '',
    },
    {
        imageUri: 'https://umomag.com/wp-content/uploads/2019/10/articulo-10-artistas-clave-para-entender-el-trap-latino-duki-umomag.jpg',
        nombre: 'Trap',
        descripcion: '',
    },
    {
        imageUri: 'https://yt3.googleusercontent.com/hf8kXPQU39CWamvIgApLZez_eBYLHf9FSeHJlpph2d49-hdVxdAz76eyqrYKL3ib8ZZdgyhL4w=s900-c-k-c0x00ffffff-no-rj',
        nombre: 'Hyperpop',
        descripcion: '',
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1G1ujsuj4cflqfbA2ZVm7Zr6clci5Vkw7aZ0kxjkJEKvFnp1ILSc0WGJZ6rW8aZgm&usqp=CAU',
        nombre: 'Reggaeton',
        descripcion: '',
    },
];

const ProfileScreen = () => {
    return(
        <ScrollView overScrollMode="never" style={{height: 1600}}>
        <View style={ProfileStyles.container}>
            <View style={ProfileStyles.profile}>
                <Image source={require('../imgs/800px-Clics-modernos-charly-garcia-front.jpg')} 
                style={ProfileStyles.profileImg}/>
                <View style={{marginLeft: 10, marginTop: -70, width: '55%'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nombre usuario</Text>
                    <Text>Mood</Text>
                </View>
            </View>
            <View style={ProfileStyles.personalidad}>
                <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold'
                }}>Personalidad</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'cyan', width: '90%'}}>
                    <View style={{ width: '40%', ...ProfileStyles.caracteristicasYGustos }}>
                        <Text style={ProfileStyles.nombreSeccion}>Características</Text>
                        <PersonCharts titulo="Variabilidad musical" variabilidad={0.9} valorInicial="Estable" valorFinal="Variable"/>
                        <PersonCharts titulo="Duración promedio" variabilidad={0.6} valorInicial="principio" valorFinal="Final"/>
                        <PersonCharts titulo="Lenguaje escuchado" variabilidad={0.1} valorInicial="nativo" valorFinal="internacional"/>
                        <PersonCharts titulo="estabilidad emocional" variabilidad={0.9} valorInicial="Estable" valorFinal="Variable"/>
                    
                    </View>
                    <View style={{ width: '55%', ...ProfileStyles.caracteristicasYGustos }}>
                        <Text style={ProfileStyles.nombreSeccion}>Gustos</Text>
                        <PersonTastes titulo="Artistas favoritos" data={artistasData} />
                        <PersonTastes titulo="Canciones favoritas" data={cancionesData} />
                        <PersonTastes titulo="Albumes favoritos" data={albumesData} />
                        <PersonTastes titulo="Generos favoritos" data={generosData} />
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const ProfileStyles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    profile:{
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'cyan',
        width: '60%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    profileImg:{
        width: 130, 
        height: 130,
        borderRadius: 10000
    },
    personalidad:{
        height: 'auto', 
        width: '100%', 
        backgroundColor: 'blue', 
        marginHorizontal: 40, 
        alignItems: 'center',
        marginBottom: 20
    },
    nombreSeccion:{
        fontWeight: 'bold', 
        fontSize: 16, 
    },
    caracteristicasYGustos:{
        backgroundColor: 'yellow', 
        height: 300, 
        padding: 7,
        height: 'auto',
        marginBottom: 20
    },
})

export default ProfileScreen;