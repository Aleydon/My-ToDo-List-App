//by Roberto Aleydon

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';





function HeaderComponent (){
    return(
        <Animatable.View animation="bounceInDown" useNativeDriver duration={1500}>
            <Text style={styles.title}>My To-Do List App</Text>
        </Animatable.View>
)}



export default HeaderComponent;





const styles = StyleSheet.create({
    title: {
        color: "black",
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
    }
})