import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ nome, imagem }) {
    return <View style={estilos.item} key={ nome }>
        <Image source={ imagem } style={estilos.imagem}/>
        <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        alignItems: 'center',
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginStart: 11,
        color: '#464646'
    }
});