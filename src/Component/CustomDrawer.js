import React from 'react'
import {View, Text, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
           <Image source={require('../../asset/mhz_logo.png')} style={{ width: 200, height: 50}}/>
            <Text style={{top:20,bottom:20, justifyContent:'center', alignItems:'center', fontSize:20}}>Categories</Text>
            <DrawerContentScrollView >
            <DrawerItemList  />
        </DrawerContentScrollView>
        </View>
    )
}