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
    setSelectedId: React.Dispatch<React.SetStateAction<number>>,
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CardProdutos = ({ item, setIsModalVisible, setSelectedId}: productProps) => {
    
    function abrirModal () {
		setSelectedId(item.id);
		setIsModalVisible(true);
	}
    
    return (
        <TouchableOpacity onPress={abrirModal}>
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
