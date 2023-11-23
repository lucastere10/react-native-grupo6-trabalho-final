import { View, Text, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { CardCategoriaHome } from "../../components/cardCategoriaHome"
import { CardEstacoes } from "../../components/cardEstacoes"
import { CardProdutosHome, productsListProps } from "../../components/cardProdutosHome"
import { logout } from "../../context/authContext"
import React, { useEffect, useState } from "react"
import { getAllProductList, getCategoriesList } from "../../service/api"
import { useFocusEffect } from "@react-navigation/native"
import { ModalProduto } from "../../components/modalProduto"
import { ModalEquipe } from "../../components/modalEquipe"
import { ModalEmpresa } from "../../components/modalEmpresa"

export const Home = ({ setAuth }) => {

  //pegar valores das categorias
  const randomCategoryIndex = Math.floor(Math.random() * 20)  //gerar valor aleatorio entre 0 e 19 para categoria
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    getCategoriesList().then(response => setCategoryData(response.data));
    console.log(categoryData[randomCategoryIndex])
  }, []);

  //montar a porra do modal
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [selectedId, setSelectedId] = useState<number>(null);

  //montar a porra do modal de equipe
  const [isTeamModalVisible, setIsTeamModalVisible] = useState<boolean>(false);
  const [isEmpresaModalVisible, setIsEmpresaModalVisible] = useState<boolean>(false);

  //pegar produtos
  const [productsList, setProductsList] = useState<productsListProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);  // não faço ideia do que eu fiz aqui

  //GERAR E GUARDAR ID DE PRODUTOS PRA ESSA MERDA NAO ATUALIZAR A CADA CLIQUE
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    listProductsList();
  }, []);
  function listProductsList() {
    getAllProductList()
      .then(response => {
        setProductsList(response.data.products);
        // console.log(productsList)
        // 
        const newRandomProducts = Array.from({ length: 12 }, () => [Math.floor(Math.random() * 30)]);
        setRandomProducts(newRandomProducts);
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
        <Text style={[styles.text, {fontFamily:'Poppins-SemiBold'}]}>Em Destaque</Text>
      </View>
      <ScrollView>
        <View style={styles.containerCard}>
          <CardCategoriaHome item={categoryData[randomCategoryIndex]} index={randomCategoryIndex} />
        </View>
        <View style={styles.containerProducts}>
          <Text style={[styles.title, {fontFamily:'Poppins-SemiBold'}]}>Produtos em Destaque</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutosHome
              item={productsList[randomProducts[0]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[1]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[2]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutosHome
              item={productsList[randomProducts[3]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[4]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[5]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutosHome
              item={productsList[randomProducts[6]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[7]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[8]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutosHome
              item={productsList[randomProducts[9]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[10]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
            <CardProdutosHome
              item={productsList[randomProducts[11]]}
              setIsModalVisible={setIsModalVisible}
              setSelectedId={setSelectedId}
            />
          </View>
        </View>
        <View style={styles.containerLowerCard}>
          <CardEstacoes setIsModalVisible={setIsTeamModalVisible} titulo={"NOSSA EQUIPE"} cor={'#D1B8A4'}/>
          <CardEstacoes setIsModalVisible={setIsEmpresaModalVisible} titulo={"NOSSA EMPRESA"} cor={'#7E8F7F'}/>
        </View>
        <View style={{ marginBottom: 40 }}></View>
      </ScrollView>
      {isModalVisible && <ModalProduto id={selectedId} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />}
      {isTeamModalVisible && <ModalEquipe isModalVisible={isTeamModalVisible} setIsModalVisible={setIsTeamModalVisible}/>}
      {isEmpresaModalVisible && <ModalEmpresa isModalVisible={isEmpresaModalVisible} setIsModalVisible={setIsEmpresaModalVisible}/>}
    </SafeAreaView>
  )
}