//by Roberto Aleydon

import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import HeaderComponent from './components/Header';
import ContentComponentView from './components/Content';
import Icon from 'react-native-vector-icons/FontAwesome';
import FAB from 'react-native-fab';
import LinearGradient from 'react-native-linear-gradient';






function App (){    
    const [ task, setTask ] = useState(['Andar de meiota', 'Aprender React', 'React Native eh Top', 'Programacao eh Vida', 'Roberto Aleydon',
     'Ta ficando Chave, pae', 'Lista de A Fazeres', 'Ta ficando Bonitin', 'Huehueue', 'Voa Mlk', 'Pai ta online']);
     

    return(
        <LinearGradient style={styles.container} colors={['#FFBF00', '#FF9400']} > 
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            

            <View>  
                <HeaderComponent />
            </View>

                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={task}
                    keyExtractor={(item) => item}
                    renderItem={ ({ item }) => {
                        return <ContentComponentView data={item} />
                    }}
                />
            
                <FAB onClickAction={() => alert('FAB')} buttonColor="#e2e2e2" iconTextColor="black"  visible={true} iconTextComponent={<Icon name="plus" size={20} />} />
                    

        </LinearGradient>
)}


export default App;




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})