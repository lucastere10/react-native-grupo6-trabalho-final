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
    stock: number;
}

export interface productProps {
    item: productsListProps
    setSelectedId: React.Dispatch<React.SetStateAction<number>>,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CardProdutos = ({ item, setIsModalVisible, setSelectedId }: productProps) => {
    function abrirModal() {
        setSelectedId(item.id);
        setIsModalVisible(true);
    }
    return (
        <TouchableOpacity onPress={abrirModal}>
            <View style={styles.container}>
                <View style={styles.produto}>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                </View>
                <View style={styles.info}>
                    <Text style={[styles.brand, { fontFamily: 'Poppins-Regular' }]}>
                        {item !== undefined ? `${item.brand}` : 'Loading...'}
                    </Text>
                    <Text style={[styles.title, { fontFamily: 'Poppins-Bold' }]} numberOfLines={1}>
                        {item !== undefined ? `${item.title}` : 'Loading...'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}