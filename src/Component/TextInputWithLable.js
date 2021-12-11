//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextInputWithLable = ({label, value, placeholder, onChangeText,  isSecure, ...props}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtStyle}>{label}</Text>
          
            <TextInput 
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                
                {...props }
                
            
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   inputStyle: {

    height:48,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:8,
    paddingHorizontal:15,
    marginHorizontal:20,
    
    

   },

   txtStyle:{
       marginHorizontal:20,
       marginVertical:8,
       fontSize:16,
       fontWeight:'bold',

   }

});

//make this component available to the app
export default TextInputWithLable;
