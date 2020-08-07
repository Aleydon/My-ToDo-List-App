//by Roberto Aleydon

import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import headerStyle from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';




function HeaderComponent ({removeAllTasks}){
    return(
        <Animatable.View animation="bounceInDown" useNativeDriver duration={1500} style={headerStyle.titleSpace}>
            <Text style={headerStyle.title}>My To-Do List App</Text>
            <View style={headerStyle.del}><Icon name="trash" size={25} color="#df0000" onPress={removeAllTasks} style={{left: 18}} /><Text style={{fontSize: 10, paddingTop: 3, left: 16, color: '#000'}}> All</Text></View>
        </Animatable.View>
)}



export default HeaderComponent;




