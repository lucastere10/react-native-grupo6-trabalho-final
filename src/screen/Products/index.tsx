import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, FlatList, ActivityIndicator } from "react-native"
import { styles } from "./style"
import { CardProdutos, productsListProps } from "../../components/cardProdutos";
import { ModalProduto } from "../../components/modalProduto";
import { getAllProductList, getProductList } from "../../service/api";
import { useFocusEffect } from '@react-navigation/native';



export const Products = ({ route }) => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [selectedId, setSelectedId] = useState<number>(null);
	const { categoria } = route.params;
	console.log(`categoria dos produtos: ${categoria}`)
	const [productsList, setProductsList] = useState<productsListProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		listProductsList();
	}, []);

	useFocusEffect(
		React.useCallback(() => {
			listProductsList();
		}, [categoria])
	);

	function listProductsList() {
		getProductList(categoria)
			.then(response => {
				setProductsList(response.data.products);
				// console.log(productsList)
			})
			.catch(error => {
				console.log(error.data);
			})
			.finally(() => {
				setIsLoading(false);
			})
	}

	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={styles.containerUpper}>
				<Image style={{ marginTop: 30 }} source={require("../../assets/images/ShoinLogo.png")}></Image>
			</View>
			<View style={styles.containerLower}>
				<Text style={styles.text}>{categoria}</Text>
			</View>
			{
				isLoading ?
					<ActivityIndicator
						size={"large"}
						color={'#156'}
					/>
					:
					<FlatList
						data={productsList}
						renderItem={({ item }) => {
							console.log(`${item}`);
							return <CardProdutos 
								item={item}  
								setIsModalVisible={setIsModalVisible}
								setSelectedId={setSelectedId}
							/>;
						}}
					/>
			}
			{isModalVisible && <ModalProduto id={selectedId} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />}
		</SafeAreaView>
	)
}