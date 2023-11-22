import { View, Text, TouchableOpacity, Modal, ActivityIndicator, ScrollView, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { getProductDetails, getProductResponse } from '../../service/api';
import { styles } from './style';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

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
		stock: null,
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
					<TouchableOpacity style={styles.modal} onPressOut={() => setIsModalVisible(false)}>
						<TouchableOpacity activeOpacity={1} onPress={() => {}}  style={styles.modalContainer}>
							{
								isLoading ?
									<ActivityIndicator
										size={"large"}
									/>
									:
									<>
										{/* Modal de Imagem */}
										<View style={styles.containerImage}>
											<Image style={styles.image} source={{ uri: product.thumbnail }} />
											{/* <TouchableOpacity onPress={() => setIsModalVisible(false)}>
												<AntDesign style={styles.close} name="close" size={32} color={'black'} />
											</TouchableOpacity> */}
										</View>
										{/* Modal de Textos */}
										<View style={styles.containerText}>
											<View style={{ justifyContent: "center", alignItems: "flex-end" }}>
												<Text style={styles.brand}>{product.brand}</Text>
											</View>
											<View style={{
												flexDirection: 'row',
												alignItems: 'center',
												justifyContent: 'flex-start',
												gap: 8,
												marginBottom: 11

											}}>
												<Entypo name="star" size={18} color="#EFE15F" />
												<Text style={styles.rating}>{product.rating}</Text>
												<Text style={styles.stock}>({product.stock})</Text>
											</View>
											<View style={{ marginBottom: 3 }}>
												<Text style={styles.title}>{product.title}</Text>
											</View>
											<View>
												<Text style={styles.description}>{product.description}</Text>
											</View>
											<View style={{
												marginTop: 11,
												flexDirection: 'row',
												alignItems: 'center',
												gap: 16

											}}>
												<Text style={styles.price}>${product.price}</Text>
												<AntDesign name="heart" size={24} color="#DF3232" />
											</View>
										</View>
									</>
							}
						</TouchableOpacity>
					</TouchableOpacity>
			</Modal>
		</>
	)
}