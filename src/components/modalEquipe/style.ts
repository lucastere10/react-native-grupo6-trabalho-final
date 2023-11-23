import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conteiner: {
        width: 320,
        height: 340,
        backgroundColor: '#17181C',
        padding: 16,
        borderRadius: 15
        
    },

    titulo: {
        color: '#fff',
        fontSize: 36,
        marginBottom: 50,
        marginTop: 10,
        textDecorationLine:'underline'
    },

    texto: {
        color: '#fff',
        fontSize: 21,
    },

    conteinerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }

})