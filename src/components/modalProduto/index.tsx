import { View, Text, TouchableOpacity, Modal, ActivityIndicator, ScrollView, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { getProductDetails, getProductResponse } from '../../service/api';
import { styles } from './style';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

interface ModalProductDetailsProps {
	isModalVisible: boolean,
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
	id: number,
}

export const ModalProduto = ({ isModalVisible, setIsModalVisible, id }: ModalProductDetailsProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [product, setProduct] = useState<getProductResponse>({
		id: null,
		title: "",
		category: "",
		description: "",
		thumbnail: "",
		brand: "",
		price: null,
		rating: null,
	})

	useEffect(() => {
		writeProductDetails(id)
	}, []);

	function writeProductDetails(id: number) {
		getProductDetails(id)
			.then(response => {
				setProduct(response.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	return (
		<>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => {
					setIsModalVisible(false);
				}}
			>
				<View style={styles.modal}>
					{
						isLoading ?
							<ActivityIndicator
								size={"large"}
							/>
							:
							<>
								{/* Modal de Imagem */}
								<View style={styles.containerImage}>
									<Image source={{ uri: product.thumbnail }} />
									<TouchableOpacity onPress={() => setIsModalVisible(false)}>
										<AntDesign name="close" size={32} color={'black'} />
									</TouchableOpacity>
								</View>
								{/* Modal de Textos */}
								<View style={styles.containerText}>
									<View>
										<Text>{product.brand}</Text>
									</View>
									<View>
										<Text>Star</Text>
										<Text>{product.rating}</Text>
										<Text>21</Text>
									</View>
									<View>
										<Text>{product.title}</Text>
									</View>
									<View>
										<Text>{product.description}</Text>
									</View>
									<View>
										<Text>{product.price}</Text>
										<Text>Heart</Text>
									</View>
								</View>
							</>
					}
				</View>
			</Modal>
		</>
	)
}