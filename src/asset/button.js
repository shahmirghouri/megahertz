import React from 'react'
import { StyleSheet , View, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native'

export default function ConstButton({text, onPress})
{
    return(
        <TouchableOpacity  onPress={onPress} >
        <View style={styles.button}>

            <Text style={styles.btnTxt}>
            {text}
            </Text>

        </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius:8,
       
        marginVertical:25,
        marginHorizontal:25,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor: '#6902FC',
        // shadowColor:"#000",
        // shadowOpacity:0.06,
        // shadowOffset:{width:10, height:10}
        


    },

    btnTxt:{
        color: 'white',
        // backgroundColor: 'f4f4f4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }

})