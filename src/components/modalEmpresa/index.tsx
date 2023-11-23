import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { styles } from './style';


interface ModalEmpresaProps {
    isModalVisible: boolean,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalEmpresa = ({ isModalVisible, setIsModalVisible }: ModalEmpresaProps) => {
    return (
        <>
            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => { setIsModalVisible(false) }}>
                <TouchableOpacity onPressOut={() => setIsModalVisible(false)} activeOpacity={1}
                    style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}
                >
                    <View style={styles.conteiner}>
                        <View>
                            <Text style={[styles.titulo, { fontFamily: 'BebasNeue-Regular' }]}>NOSSA EMPRESA</Text>
                        </View>
                        <View style={styles.conteinerRow}>
                            <Text style={styles.texto}>A “Shoin” começou como uma empresa de mostruários de roupas no Brasil. Com uma paixão pela moda e um olho para o estilo, a Shoin rapidamente ganhou reputação por suas exibições criativas e atraentes.</Text>
                            <Text style={styles.texto}>No entanto, com o passar do tempo, a empresa percebeu que o mercado de mostruários de roupas estava se tornando cada vez mais saturado. Foi então que a Shoin decidiu pivotar e se transformar em uma empresa de venda de produtos do exterior.</Text>
                            <Text style={styles.texto}>Hoje, a Shoin é conhecida por trazer os melhores e mais exclusivos produtos do exterior para o Brasil. A história da Shoin é um testemunho do poder da reinvenção e da adaptabilidade no mundo dos negócios.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

        </>
    )
}

