import { View, Text, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { CardCategoriaHome } from "../../components/cardCategoriaHome"
import { CardEstacoes } from "../../components/cardEstacoes"
import { CardProdutosHome, productsListProps } from "../../components/cardProdutosHome"
import { logout } from "../../context/authContext"
import React, { useEffect, useState } from "react"
import { getAllProductList, getCategoriesList } from "../../service/api"
import { useFocusEffect } from "@react-navigation/native"

export const Home = ({ setAuth }) => {

  //pegar valores das categorias
  const randomCategoryIndex = Math.floor(Math.random() * 20)  //gerar valor aleatorio entre 0 e 19 para categoria
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
      getCategoriesList().then(response => setCategoryData(response.data));
      console.log(categoryData[randomCategoryIndex])      
  }, []);

  //pegar produtos
  const [productsList, setProductsList] = useState<productsListProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		listProductsList();
	}, []);
	function listProductsList() {
		getAllProductList()
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
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require("../../assets/images/ShoinLogo.png")}></Image>
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Em Destaque</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => logout(setAuth)}>
          <View>
            <Text>Deslogar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerCard}>
          <CardCategoriaHome item={categoryData[randomCategoryIndex]}/>
        </View>
        <View style={styles.containerProducts}>
          <Text style={styles.title}>Produtos</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
            <CardProdutosHome item = {productsList[Math.floor(Math.random() * 30)]}/>
          </View>
        </View>
        <View style={styles.containerLowerCard}>
          <CardEstacoes></CardEstacoes>
          <CardEstacoes></CardEstacoes>
        </View>
        <View style={{marginBottom:80}}></View>
      </ScrollView>
    </SafeAreaView>
  )
}