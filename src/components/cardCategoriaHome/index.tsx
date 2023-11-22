import { View, TouchableOpacity,Text } from 'react-native';
import { styles } from './style';


export const CardCategoriaHome = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => {
          }}>
            <View style={{ flexDirection: 'row', justifyContent:'center' }} >
                <View style={styles.card}>
                    <Text style={[styles.title,{fontFamily:'BebasNeue-Regular'}]}>{ item }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}