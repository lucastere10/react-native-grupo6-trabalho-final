import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical:16,
        alignSelf: 'center',
        borderRadius: 6,
    },

    produto:{
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    info:{
        padding:8,
        backgroundColor:'#D9D9D9',
        maxWidth:280
    },
    image: {
        width: 280, 
        height: 160, 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, 
    },
    title: {
        fontSize: 16,   
    },
    brand: {
        fontSize:12
    }
})