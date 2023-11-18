import { View, Text, Image, SafeAreaView, FlatList, ScrollView } from "react-native"
import { styles } from "./style"
import { CardCategoria } from "../../components/cardCategoria"
import { CardEstacoes } from "../../components/cardEstacoes"
import { CardProdutos } from "../../components/cardProdutos"

export const Home = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require("../../assets/images/ShoinLogo.png")}></Image>
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Em Destaque</Text>
      </View>
      <ScrollView>

        <View style={styles.containerCard}>
          <CardCategoria />
        </View>
        <View style={styles.containerProducts}>
          <Text style={styles.title}>Produtos</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
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