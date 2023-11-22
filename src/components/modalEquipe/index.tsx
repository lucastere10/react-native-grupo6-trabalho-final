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
                    <TouchableOpacity onPressOut={()=>setIsModalVisible(false)} activeOpacity={1}> 
                <View style={styles.conteiner}>
                    <View>
                        <Text style={styles.titulo}>NOSSA EQUIPE</Text>
                    </View>
                    <View style={{gap: 6}}>
                        <View style={styles.conteinerRow}>  
                            <Text style={styles.texto}>Alexander Oliveira       </Text>
                            <AntDesign name="github" size={24} color="white" />
                            <AntDesign name="linkedin-square" size={24} color="white" />
                        </View>
                        <View style={styles.conteinerRow}>
                            <Text style={styles.texto}>Bruna Zimbrão            </Text>
                            <AntDesign name="github" size={24} color="white" />
                            <AntDesign name="linkedin-square" size={24} color="white" />
                        </View>
                        <View style={styles.conteinerRow}>
                            <Text style={styles.texto}>Dayane Thuller            </Text>
                            <AntDesign name="github" size={24} color="white" />
                            <AntDesign name="linkedin-square" size={24} color="white" />
                        </View>
                        <View style={styles.conteinerRow}>
                            <Text style={styles.texto}>Lucas Caldas                </Text>
                            <AntDesign name="github" size={24} color="white" />
                            <AntDesign name="linkedin-square" size={24} color="white" />
                        </View>
                        <View style={styles.conteinerRow}>
                            <Text style={styles.texto}>Natally Monteiro         </Text>
                            <AntDesign name="github" size={24} color="white" />
                            <AntDesign name="linkedin-square" size={24} color="white" />
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            </Modal>

        </>
    )
}

