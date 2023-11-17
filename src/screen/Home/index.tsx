import { View, Text, Image, SafeAreaView, FlatList } from "react-native"
import { styles } from "./style"
import { CategoryCard } from "../../components/CategoryCard"
import { ProductCard } from "../../components/ProductCard"
import { LowerCard } from "../../components/LowerCard"

export const Home = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={{marginTop:30}} source={require("../../assets/images/ShoinLogo.png")}></Image>
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Em Destaque</Text>
      </View>
      <View style={styles.containerCard}>
        <CategoryCard />
      </View>
      <View style={styles.containerProducts}>
        <Text style={styles.title}>Produtos</Text>
        <View style={{flexDirection:'row', gap:10 }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
        <View style={{flexDirection:'row', gap:10 }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </View>
      <View style={styles.containerLowerCard}>
        <LowerCard></LowerCard>
        <LowerCard></LowerCard>
      </View>
    </SafeAreaView>
  )
}