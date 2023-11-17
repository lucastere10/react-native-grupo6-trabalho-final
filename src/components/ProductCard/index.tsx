import { View, Text, Image, SafeAreaView,TouchableOpacity } from "react-native"
import { styles } from "./style"

export const ProductCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={{ width: 72, height: 85 }} source={require('../../assets/images/loginBackground.png')} />
        <View style={styles.containerText}>
          <Text style={styles.text}>Nome</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}