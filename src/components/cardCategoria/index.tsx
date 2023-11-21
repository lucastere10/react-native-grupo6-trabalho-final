import { View, TouchableOpacity,Text } from 'react-native';
import { styles } from './style';

export const CardCategoria = ({ item, navigation }) => {


    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Products', { categoria:item });
          }}>
            <View >
                <View style={styles.card}>
                    <Text>{ item }</Text>
                    <View style={styles.info}>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}