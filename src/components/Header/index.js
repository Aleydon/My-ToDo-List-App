//by Roberto Aleydon

import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import headerStyle from './styles';




function HeaderComponent (){
    return(
        <Animatable.View animation="bounceInDown" useNativeDriver duration={1500}>
            <Text style={headerStyle.title}>My To-Do List App</Text>
        </Animatable.View>
)}



export default HeaderComponent;




