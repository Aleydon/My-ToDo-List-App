//by Roberto Aleydon

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';






function ContentComponentView ({ data, handleRemoveTask }){
    return(
        <Animatable.View style={styles.list} animation="bounce" duration={1500} useNativeDriver>
            <View style={styles.container}>
                    <Text>{data}</Text>
                    <Icon  name="check" size={24} color="green" onPress={() => handleRemoveTask(data)}/>
            </View>
        </Animatable.View>
)}


export default ContentComponentView;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 15,
        padding: 10,
        borderRadius:7,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    list: {
        width: '85%',
        alignSelf: 'center'
    },


})