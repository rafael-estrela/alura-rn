import { Dimensions, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ children }) {
    return <>
        <Image style={estilos.topo} source={topo} />
        <Texto style={estilos.titulo}>{ children }</Texto>
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