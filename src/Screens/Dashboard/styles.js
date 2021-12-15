import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'white'
        backgroundColor:"red", 
        position:"absolute",
        borderRadius:10,
        bottom:35,
        marginHorizontal:30

    },

    bar: {
        backgroundColor:"red", 
        position:"absolute",
        borderRadius:10,
        bottom:35,
        marginHorizontal:30
    },
    input:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray',
        width:250


    },
})


export default styles;