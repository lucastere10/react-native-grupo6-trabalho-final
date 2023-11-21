import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin:18,
        alignSelf: 'center',
        borderRadius: 5,
    },

    produto:{

        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    info:{
        width:300,
        height:40,
        backgroundColor:'#D9D9D9',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        width: 300, 
        height: 160, 
        aspectRatio: 16 / 9, 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 12,
        marginLeft: 10,
    },
    brand: {
        fontStyle: 'italic',
    }
})