import React from 'react';
import { View, Text } from 'react-native';

const ReproductorMinimizado = () => {
  return (
    <View style={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'blue',
        height: 30,
        width: '100%',
    }}>
      {/* Timeline */}
      <Text>Tiempo actual / Tiempo total</Text>
      <Text>Nombre de la canción</Text>
    </View>
  );
};

export default ReproductorMinimizado;
