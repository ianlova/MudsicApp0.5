import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import Main from './src/components/Main.js';

export default function App() {
  return (
    <View style={{
      height: '100%',
      
      

  }}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}
