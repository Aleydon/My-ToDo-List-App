//by Roberto Aleydon

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, StatusBar, FlatList,  TouchableOpacity, Text, TextInput } from 'react-native';
import HeaderComponent from './components/Header';
import ContentComponentView from './components/Content';
import Icon from 'react-native-vector-icons/FontAwesome';
import FAB from 'react-native-fab';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-community/async-storage';
import { toastCompleted } from './components/Toasts';







function App (){    
    const [ task, setTask ] = useState([]);
    const [ visible, setVisible ] = useState(false);
    const [ input, setInput ] = useState('');



    //Load Task in LocalStorage when components is mounted
    useEffect(() => {
        async function loadTasks(){
            try{
                const loadStorage = await AsyncStorage.getItem('@local-tasks');
                if(loadStorage){
                    setTask(JSON.parse(loadStorage));
                }  
            }catch(error){
                Toast.show('error');
            }
        };
        loadTasks();
    }, []);





    //Set tasks in LocalStorage
    useEffect(() => {
        async function setTaskStorage(){
            try{
                await AsyncStorage.setItem('@local-tasks', JSON.stringify(task));
            }catch(error){
                Toast.show('error');
            }
        };
        setTaskStorage();
    }, [task]);




    //Handle cancel modal button
    function handleCancel(){
        const clearInput = '';
        setInput(clearInput);
        setVisible(false);
    }




    //Remove Task filtered
    const handleRemoveTask = useCallback((data) => {
       setTask((removeTask) => {
           return removeTask.filter((tasksRemove) => tasksRemove !== data);
       });
       Toast.showSuccess(data + ' Completed', toastCompleted);
    });




    //Add taks and clear input
    function handleAdd(){
        if(input != ''){
            const newTask = input;
            setTask([...task, newTask]);
            setInput('');
            setVisible(false);
        }
    };



    //Clear and Hidden modal when back button is clicked
    function backButtonHiddenModal(){
        setVisible(false);
        setInput('');
    };



    return(
        <LinearGradient style={styles.container} colors={['#FFBF00', '#FF9400']} > 
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            

            <View>  
                <HeaderComponent />
            </View>



            <View>
                <Modal isVisible={visible} animationIn="slideInUp"
                    animationInTiming={90}
                    useNativeDriver={true}
                    onBackButtonPress={backButtonHiddenModal}>


                    <View style={styles.modal}>
                        <TextInput placeholder="Type Here Your Task..." 
                            style={styles.textInputModal}
                            multiline={true}
                            value={input}
                            onChangeText={(text) => setInput(text)}
                        />

                        <View style={styles.btnModal}>
                            <TouchableOpacity onPress={handleAdd}>
                                <Text style={styles.btnModalStyle}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancel}>
                                <Text style={styles.btnModalStyle}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    
                    </View>
                </Modal>
            </View>    


            <FlatList 
                showsVerticalScrollIndicator={false}
                autoCorrect={false}
                autoFocus={true}
                data={task}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ ({ item, index }) =>  <ContentComponentView data={item} handleRemoveTask={handleRemoveTask} />}
            />
        
            <FAB onClickAction={() => setVisible(true)} buttonColor="#e2e2e2" iconTextColor="black"  visible={true} iconTextComponent={<Icon name="plus" size={20} />} style={{borderWidth: 1, borderColor: '#e3e3e3'}} />
                    

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
        borderWidth: 1,
        borderColor: '#20232a',
    },

    textInputModal: {
        width: 200
    }
})