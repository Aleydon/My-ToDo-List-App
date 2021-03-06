/* by Roberto Aleydon */

import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, FlatList,  TouchableOpacity, Text, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import FAB from 'react-native-fab';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-community/async-storage';

import HeaderComponent from './components/header';
import ContentComponentView from './components/content';
import Modal from 'react-native-modal';
import { toastCompleted, toastRemove } from './components/toasts';
import appStyle from './components/styles';






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
            }catch(err){
                Toast.show(`err`);
            }
        };
        loadTasks();
    }, []);




    //Remove LocalStorage | Clear Todo List
    const removeAllTasks = useCallback(() => {
        async function removeAll(){
            try{
                await AsyncStorage.removeItem('@local-tasks');
                setTask(task.filter((tasksDelete) => (tasksDelete === task) ));
                Toast.show('All Tasks Deleted', toastRemove);

                if(task.length == 0 || task == null){
                    Toast.show('No Tasks Found!', toastRemove);
                }
                
            }catch(error){
                alert(error);
            }
        }
        removeAll();
    });




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
       Toast.showSuccess('Task Completed', toastCompleted);
    });




    //Add taks and clear input
    const  handleAdd = useCallback(() => {
        if(input != ''){
            const newTask = input;
            setTask([...task, newTask]);
            setInput('');
            setVisible(false);
        }
    });



    //Clear and Hidden modal when back button is clicked
    function backButtonHiddenModal(){
        setVisible(false);
        setInput('');
    };



    return(
        <LinearGradient style={appStyle.container} colors={['#FFBF00', '#FF9400']} > 
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            

            <View style={{marginBottom: 15}}>  
                <HeaderComponent removeAllTasks={removeAllTasks} />
            </View>



            <View>
                <Modal isVisible={visible} animationIn="slideInUp"
                    animationInTiming={90}
                    useNativeDriver={true}
                    onBackButtonPress={backButtonHiddenModal}>


                    <View style={appStyle.modal}>
                        <TextInput placeholder="Type Here Your Task..." 
                            style={appStyle.textInputModal}
                            multiline={false}
                            value={input}
                            onChangeText={(text) => setInput(text)}
                        />

                        <View style={appStyle.btnModal}>
                            <TouchableOpacity onPress={handleAdd}>
                                <Text style={appStyle.btnModalStyle}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancel}>
                                <Text style={appStyle.btnModalStyle}>Cancel</Text>
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
                renderItem={ ({ item, index }) =>  <ContentComponentView data={item} handleRemoveTask={handleRemoveTask} >
                    </ContentComponentView>
                }
            />
        
            <FAB onClickAction={() => setVisible(true)} buttonColor="#e2e2e2" iconTextColor="black"  visible={true} iconTextComponent={<Icon name="plus" size={20} />} style={{borderWidth: 1, borderColor: '#e3e3e3'}} />
                    

        </LinearGradient>
)}



export default App;





