import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getProductDetails } from '../../service/api';
import { styles } from './style';

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

	function writeProductDetails(id: string) {
		getProductResponse(id)
			.then(response => {
				setMagicItem(response.data);
				magicItemWithPrice
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

}