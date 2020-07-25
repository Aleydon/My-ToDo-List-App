//by Roberto Aleydon

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';






function HeaderComponent (){
    return(
        <View>
            <Text style={styles.title}>My To Do List App</Text>
        </View>
)}



export default HeaderComponent;





const styles = StyleSheet.create({
    title: {
        color: "black",
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})