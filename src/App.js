//by Roberto Aleydon

import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList,  TouchableOpacity, Text, TextInput } from 'react-native';
import HeaderComponent from './components/Header';
import ContentComponentView from './components/Content';
import Icon from 'react-native-vector-icons/FontAwesome';
import FAB from 'react-native-fab';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';





function App (){    
    const [ task, setTask ] = useState(['Andar de meiota', 'Aprender React', 'React Native eh Top', 'Programacao eh Vida', 'Roberto Aleydon',
     'Ta ficando Chave, pae', 'Lista de A Fazeres', 'Ta ficando Bonitin', 'Huehueue', 'Voa Mlk', 'Pai ta online']);
    
    const [ visible, setVisible ] = useState(false);

    return(
        <LinearGradient style={styles.container} colors={['#FFBF00', '#FF9400']} > 
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            

            <View>  
                <HeaderComponent />
            </View>


            <View>
                <Modal isVisible={visible} animationIn="slideInUp"
                    onBackButtonPress={() => setVisible(false)} >
                    <View style={styles.modal}>
                        <TextInput placeholder="Type Here Your Task..." style={styles.textInputModal}/>
                        <View style={styles.btnModal}>
                            <TouchableOpacity>
                                <Text style={styles.btnModalStyle}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={styles.btnModalStyle}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>    


            <FlatList 
                showsVerticalScrollIndicator={false}
                data={task}
                keyExtractor={(item) => item}
                renderItem={ ({ item }) => {
                    return <ContentComponentView data={item} />
                }}
            />
        
            <FAB onClickAction={() => setVisible(true)} buttonColor="#e2e2e2" iconTextColor="black"  visible={true} iconTextComponent={<Icon name="plus" size={20} />} />
                    

        </LinearGradient>
)}


export default App;




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    modal: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: "100%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        paddingBottom: 15,
        paddingTop: 30,
    },  

    btnModal: {
        flex: 1,
        flexDirection: 'row',
    },

    btnModalStyle: {
        backgroundColor: '#FF9400',
        width: 100,
        height: 35,
        borderRadius: 50,
        margin: 5,
        color: 'white',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center', 
    },

    textInputModal: {
        width: 200
    }
})