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
    setSelectedId: React.Dispatch<React.SetStateAction<number>>,
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,}

export const CardProdutosHome = ({ item, setIsModalVisible, setSelectedId}: productProps) => {   
    function abrirModal () {
		setSelectedId(item.id);
		setIsModalVisible(true);
	}
    return (
        <TouchableOpacity onPress={abrirModal}>
            <View style={styles.container}>
                <Image
                    style={styles.Image}
                    source={{ uri: item !== undefined ? item.thumbnail : 'Loading...' }}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{item !== undefined ? item.title : 'Loading...'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
