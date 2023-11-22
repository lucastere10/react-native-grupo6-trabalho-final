import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F4F4F4',
        flex:1
    },
    containerUpper: {
        backgroundColor:'#4F392B',
        justifyContent:"center",
        alignItems:'center',
        height:120
    },
    containerLower:{
        backgroundColor:'#7E8F7F',
        justifyContent:"center",
        alignItems:'center',
        height:40
    },
    containerCard:{
        marginTop:20,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"
    },
    containerProducts:{
        justifyContent:'center',
        alignItems:"center",
        marginTop:25,
        gap:16
    },
    containerLowerCard:{
        justifyContent:'center',
        alignItems:"center",
        marginTop:40,
        flexDirection:'row',
        gap:20
    },
    text:{
        fontSize:20,
        color:'#3F3335',
        textDecorationLine:'underline',
    },
    title:{
        fontSize:18,
        color:'#3F3335',
        textDecorationLine:"underline"
    }
});