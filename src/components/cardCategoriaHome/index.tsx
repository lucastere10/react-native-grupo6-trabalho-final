import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { styles } from './style';

const images = [
    require('../../assets/images/background1.jpg'),
    require('../../assets/images/background2.jpg'),
    require('../../assets/images/background3.jpg'),
    require('../../assets/images/background4.jpg'),
    require('../../assets/images/background5.jpg'),
    require('../../assets/images/background6.jpg'),
    require('../../assets/images/background7.jpg'),
    require('../../assets/images/background8.jpg'),
    require('../../assets/images/background9.jpg'),
    require('../../assets/images/background10.jpg'),
    require('../../assets/images/background11.jpg'),
    require('../../assets/images/background12.jpg'),
    require('../../assets/images/background13.jpg'),
    require('../../assets/images/background14.jpg'),
    require('../../assets/images/background15.jpg'),
    require('../../assets/images/background16.jpg'),
    require('../../assets/images/background17.jpg'),
    require('../../assets/images/background18.jpg'),
    require('../../assets/images/background19.jpg'),
    require('../../assets/images/background20.jpg'),
];

export const CardCategoriaHome = ({ item, index }) => {
    // Substitua 'image' pela imagem de fundo que você deseja usar
    const image = images[index % images.length];
    
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                <ImageBackground source={image} style={styles.card}>
                    <Text style={[styles.title,{fontFamily:'BebasNeue-Regular'}]}>{ item }</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )

}