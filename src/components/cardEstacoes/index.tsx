import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';




export const CardEstacoes = ({titulo, cor}) => {

    return (
        <TouchableOpacity >
            <View style={[styles.card,{backgroundColor:cor}]}>
                <Image style={styles.image} source={require('../../assets/images/ShoinLogo.png')} />
                <Text style={[styles.titulo, {fontFamily:'BebasNeue-Regular'}]}>{titulo}</Text>
            </View>

        </TouchableOpacity>
    )
}