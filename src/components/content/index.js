//by Roberto Aleydon

import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import contentStyle from './style';





function ContentComponentView ({ data, handleRemoveTask }){
    return(
        <Animatable.View style={contentStyle.list} animation="bounce" duration={1500} useNativeDriver>
            <View style={contentStyle.container}>
                    <Text>{data}</Text>
                    <Icon  name="check" size={24} color="green" onPress={() => handleRemoveTask(data)}/>
            </View>
        </Animatable.View>
)}


export default ContentComponentView;


