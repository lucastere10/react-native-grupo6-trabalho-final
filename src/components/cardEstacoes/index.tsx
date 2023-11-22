import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

export interface cardEstacoesProps{ 
    titulo: string;
    cor:  string;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CardEstacoes = ({titulo, cor, setIsModalVisible }: cardEstacoesProps) => {
    function abrirModal () {
        setIsModalVisible(true);
    }
        return (
        <TouchableOpacity onPress={abrirModal}>
            <View style={[styles.card,{backgroundColor:cor}]}>
                <Image style={styles.image} source={require('../../assets/images/ShoinLogo.png')} />
                <Text style={[styles.titulo, {fontFamily:'BebasNeue-Regular'}]}>{titulo}</Text>
            </View>

        </TouchableOpacity>
    )
}