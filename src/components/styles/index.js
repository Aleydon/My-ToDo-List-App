import { StyleSheet } from 'react-native';



export default appStyle = StyleSheet.create({
    container: {
        flex: 1,
    },

    modal: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: "100%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        paddingBottom: 15,
        paddingTop: 30,
    },  

    btnModal: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
    },

    btnModalStyle: {
        backgroundColor: '#FF9400',
        width: 100,
        height: 35,
        borderRadius: 50,
        margin: 5,
        color: 'white',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center', 
        borderWidth: 1,
        borderColor: '#20232a',
    },

    textInputModal: {
        width: 250,
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        marginBottom: 10,
        borderColor: '#e3e3e3'
    },
});