import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, ScrollView } from "react-native"
import { styles } from "./style"
import { CardCategoria } from "../../components/cardCategoria"
import { getCategoriesList } from '../../service/api';

export const Category = ({navigation}) => {

  //pegar valores das categorias
  const [data, setData] = useState([]);
  const gap = 30
  useEffect(() => {
      getCategoriesList().then(response => setData(response.data));
  }, []);


  return (
    <SafeAreaView>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require("../../assets/images/ShoinLogo.png")}></Image>
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Categorias</Text>
      </View>
      <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CardCategoria item={item} navigation={navigation} />}
                contentContainerStyle={{ 
                  paddingBottom: 190, 
                  paddingTop:20,
                  gap,  
                  alignItems: 'center'

                }}
        />

    </SafeAreaView>
  )
}