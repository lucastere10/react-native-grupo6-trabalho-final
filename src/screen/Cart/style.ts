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
        flex:1,
        flexDirection:"column",
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    containerPrice:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        height:60,
        gap:24,
    },
    priceText:{
        fontSize:20,
    },
    text:{
        fontSize:20,
        color:'#3F3335',
        textDecorationLine:'underline'
    },
    removeAllButton:{
        backgroundColor:'#8b0000',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:4,
        gap:8
    },
    removeAllText:{
        color:'#FFFFFF',
        fontSize:16,
    }
    
});