import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conteiner: {
        width: 320,
        height: 400,
        backgroundColor: '#4F392B',
        padding: 16,
        borderRadius: 15
        
    },

    titulo: {
        color: '#fff',
        fontSize: 40,
        marginBottom: 50,
        marginTop: 15
    },

    texto: {
        color: '#fff',
        fontSize: 21,
    },

    conteinerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        padding: 8
    }

})