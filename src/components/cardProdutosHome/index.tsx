import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export interface productsListProps {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
}

export interface productProps {
    item: productsListProps
}

export const CardProdutosHome = ({ item }: productProps) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.produto}>
                </View>
                <View style={styles.info}>                    
                    <Text>{item !== undefined ? item.title : 'Loading...'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
