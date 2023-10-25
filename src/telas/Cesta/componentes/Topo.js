import { Dimensions, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Topo({ topo }) {
    return <>
        <Image style={estilos.topo} source={topo.imagem} />
        <Texto style={estilos.titulo}>{ topo.titulo }</Texto>
    </>;
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
});