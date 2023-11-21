import { View, Text, Image, SafeAreaView} from "react-native"
import { styles } from "./style"

export const Profile = ({ setAuth }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require("../../assets/images/ShoinLogo.png")}></Image>
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Em Destaque</Text>
      </View>
      <Text>Página de Perfil</Text>
    </SafeAreaView>
  )
}