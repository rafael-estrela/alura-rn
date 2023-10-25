import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Topo from  './componentes/Topo';
import Detalhes from './componentes/Detalhes';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Topo>Detalhes da cesta</Topo>

        <View style={estilos.cesta}>
            <Detalhes />
        </View>
    </>;
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});