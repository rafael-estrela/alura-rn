import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
    let estilo = style?.fontWeight === 'bold' ? estilos.textoNegrito : estilos.texto;

    return <Text style={[style, estilo]}>{ children }</Text>;
}

const estilos = StyleSheet.create({
    texto: {
        fontWeight: 'normal',
        fontFamily: 'MontserratRegular'
    }, textoNegrito: {
        fontWeight: 'normal',
        fontFamily: 'MontserratBold',
    }
});