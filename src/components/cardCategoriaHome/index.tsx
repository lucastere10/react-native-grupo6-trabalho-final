import { View, TouchableOpacity,Text } from 'react-native';
import { styles } from './style';

export const CardCategoriaHome = ({ item }) => {


    return (
        <TouchableOpacity onPress={() => {
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