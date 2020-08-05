import React from 'react';
import Toast from 'react-native-tiny-toast';





export const toastCompleted =  {
    position: Toast.position.center,
    containerStyle:{
     backgroundColor: 'rgba(45, 87, 44, 0.7)',
     borderRadius: 15,
     width: '90%',
     height: 70,
    },
    textStyle:{
     color:'#fff',
    },
    mask:false,
    duration: 700,
    animation: true,
   }