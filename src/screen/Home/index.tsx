import { View, Text } from "react-native"
import { CardProdutos } from "../../components/cardProdutos"
import { CardEstacoes } from "../../components/cardEstacoes"
import { CardCategoria } from "../../components/cardCategoria"

export const Home = () => {
  return(
    <View>
     
    <CardProdutos/>
    <CardEstacoes/>
    <CardCategoria/>



    </View>
  )
}