import { View, Text, Image, SafeAreaView, FlatList, ScrollView } from "react-native"
import { styles } from "./style"
import { CardCategoria } from "../../components/cardCategoria"

export const Category = () => {
  return (
    <SafeAreaView>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require("../../assets/images/ShoinLogo.png")}></Image>
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Em Destaque</Text>
      </View>
      <ScrollView>
        <View style={styles.containerCards}>
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
        </View>
        <View style={{marginBottom:200}}></View>
      </ScrollView>
    </SafeAreaView>
  )
}