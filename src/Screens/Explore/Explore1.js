import React from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import navigationString from '../../constants/navigationString'
import styles from './styles'
import ConstButton from '../../asset/button'
import { hide } from 'yargs'

export default function Explore1({navigation}) {
    
    return (
        <View style={styles.container}>
         

        <Image source={require('../../asset/mhz_logo.png')} style={{ width: 400, height: 350 }}/>

         <ConstButton text="Let's get started" onPress={()=> navigation.navigate(navigationString.EXPLORE2)}/>
        
         <TouchableOpacity onPress={()=> navigation.navigate(navigationString.SIGNIN)}>

            <Text style={styles.skip_btn}>Skip for now</Text>
        
        </TouchableOpacity>
        
        </View>
    )
}