import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

export interface productsListProps {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
    brand: string;
}

export interface productProps {
    item: productsListProps
}

export const CardProdutos = ({ item }: productProps) => {
    const limitedDescription = item.description.split(' ').slice(0, 25).join(' ');

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.produto}>
                    <Image source={{uri: item.thumbnail}} style={styles.image} />
                </View>
                <View style={styles.info}>                    
                    <Text style={styles.title}>
                        {item !== undefined ? `${item.title} - ${item.brand}` : 'Loading...'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}