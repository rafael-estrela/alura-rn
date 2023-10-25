import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ detalhes }) {
    return <>
        <Texto style={estilos.nome}>{ detalhes.nome }</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={detalhes.logoFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ detalhes.nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ detalhes.descricao }</Texto>
        <Texto style={estilos.preco}>{ detalhes.preco }</Texto>
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