import Toast from 'react-native-tiny-toast';





export const toastCompleted =  {
    position: Toast.position.center,
    containerStyle:{
     backgroundColor: 'rgba(45, 87, 44, 0.8)',
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



export const toastRemove  =  {
    position: Toast.position.center,
    containerStyle:{
     backgroundColor: '#f00',
     borderRadius: 15,
    },
    textStyle:{
     color:'#fff',
    },
    mask:false,
    maskStyle:{},
    duration: 700,
    animation: true,
};