import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Texto';

export default function Botao({ style, children, onPress }) {
    return <TouchableOpacity style={[style, estilos.botao]} onPress={onPress}>
        <Texto style={estilos.textoBotao}>{ children }</Texto>
    </TouchableOpacity>;
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26
    }
});