import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';


interface ModalEquipeProps {
    isModalVisible: boolean,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalEquipe = ({ isModalVisible, setIsModalVisible }: ModalEquipeProps) => {
    return (
        <>
            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => { setIsModalVisible(false) }}>
                <TouchableOpacity onPressOut={() => setIsModalVisible(false)} activeOpacity={1}
                    style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor:'rgba(0,0,0,0.5)' }}
                >
                    <View style={styles.conteiner}>
                        <View>
                            <Text style={[styles.titulo, { fontFamily: 'BebasNeue-Regular' }]}>NOSSA EQUIPE</Text>
                        </View>
                        <View style={{ gap: 6 }}>
                            <View style={styles.conteinerRow}>
                                <Text style={[styles.texto, { fontFamily: 'Poppins-Regular' }]}>Alexander Oliveira</Text>
                                <View style={{flexDirection:'row', gap:10}}>
                                    <AntDesign name="github" size={24} color="white" />
                                    <AntDesign name="linkedin-square" size={24} color="white" />
                                </View>
                            </View>
                            <View style={styles.conteinerRow}>
                                <Text style={[styles.texto, { fontFamily: 'Poppins-Regular' }]}>Bruna Zimbrão</Text>
                                <View style={{flexDirection:'row', gap:10}}>
                                    <AntDesign name="github" size={24} color="white" />
                                    <AntDesign name="linkedin-square" size={24} color="white" />
                                </View>
                            </View>
                            <View style={styles.conteinerRow}>
                                <Text style={[styles.texto, { fontFamily: 'Poppins-Regular' }]}>Dayane Thuller</Text>
                                <View style={{flexDirection:'row', gap:10}}>
                                    <AntDesign name="github" size={24} color="white" />
                                    <AntDesign name="linkedin-square" size={24} color="white" />
                                </View>
                            </View>
                            <View style={styles.conteinerRow}>
                                <Text style={[styles.texto, { fontFamily: 'Poppins-Regular' }]}>Lucas Caldas</Text>
                                <View style={{flexDirection:'row', gap:10}}>
                                    <AntDesign name="github" size={24} color="white" />
                                    <AntDesign name="linkedin-square" size={24} color="white" />
                                </View>
                            </View>
                            <View style={styles.conteinerRow}>
                                <Text style={[styles.texto, { fontFamily: 'Poppins-Regular' }]}>Natally Monteiro</Text>
                                <View style={{flexDirection:'row', gap:10}}>
                                    <AntDesign name="github" size={24} color="white" />
                                    <AntDesign name="linkedin-square" size={24} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

        </>
    )
}

