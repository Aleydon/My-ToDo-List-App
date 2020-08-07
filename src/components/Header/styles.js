import { StyleSheet } from 'react-native'



export default  headerStyle =  StyleSheet.create({
    title: {
        color: "black",
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    titleSpace: {
        flexDirection: 'row',
        marginLeft: 40,
        textAlign: 'center',
        height: 90,
        marginTop: 10,
        width: 300
    },

    del: {
        height: 50,
        justifyContent: 'center',
        left: 60,
        bottom: -50,
        width: 80,
        alignItems: 'center'
    }
});