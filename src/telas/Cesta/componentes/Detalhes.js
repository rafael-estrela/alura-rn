import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={logo}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>;
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 32,
        color: '#464646',
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginStart: 12
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});