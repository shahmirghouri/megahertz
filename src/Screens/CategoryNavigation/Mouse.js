import React from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import navigationString from '../../constants/navigationString'
import styles from './styles'

export default function Mouse({navigation}) {
    
    return (
        <View style={styles.container}>
         

        <Text style={{justifyContent:'center', alignItems:'center', fontSize:30}}>Mouse</Text>
        
        </View>
    )
}