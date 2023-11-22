import { View, TouchableOpacity,Text } from 'react-native';
import { styles } from './style';

export const CardCategoria = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Products', { categoria:item });
          }}>
            <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                <View style={styles.card}>
                    <Text style={[styles.title,{fontFamily:'BebasNeue-Regular'}]}>{ item }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
