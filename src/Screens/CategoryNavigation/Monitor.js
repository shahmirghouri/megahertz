import React from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import navigationString from '../../constants/navigationString'
import styles from './styles'

export default function Monitor({navigation}) {
    
    return (
        <View style={styles.container}>
         

        <Text style={{justifyContent:'center', alignItems:'center', fontSize:30}}>Monitor</Text>
        
        </View>
    )
}