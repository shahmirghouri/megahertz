// import React from 'react';
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   TouchableHighlight,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   StatusBar,
//   Linking,
//   Platform,
// } from 'react-native';
// import navigationString from '../../constants/navigationString';
// import styles from './styles';
// import ConstButton from '../../asset/button';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import  Desktop from './Desktop'
// import GraphicCard from './GraphicCard'
// import HeadPhone from './HeadPhone'
// import Keyboard from './Keyboard'
// import Laptop from './Laptop'
// import Monitor from './Monitor'
// import Mouse from './Mouse'
// import Others from './Others'
// import StorageDevice from './StorageDevice'
// // import CustomDrawer from '../../Component/CustomDrawer'

// const Drawer = createDrawerNavigator();

// const CategoryNavigation = (navigation) => {
//     return(
//         <Drawer.Navigator  screenOptions={{headerShown: false}}>

//             <Drawer.Screen name="Desktop" component={Desktop}/>
//             <Drawer.Screen name="GraphicCard" component={GraphicCard}/>
//             <Drawer.Screen name="HeadPhone" component={HeadPhone}/>
//             <Drawer.Screen name="Keyboard" component={Keyboard}/>
//             <Drawer.Screen name="Laptop" component={Laptop}/>
//             <Drawer.Screen name="Monitor" component={Monitor}/>
//             <Drawer.Screen name="Mouse" component={Mouse}/>
//             <Drawer.Screen name="StorageDevice" component={StorageDevice}/>
//             <Drawer.Screen name="Others" component={Others}/>

//         </Drawer.Navigator>
//     )
// }

// export default CategoryNavigation;



import React from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView,TouchableHighlight, Image } from 'react-native'
import navigationString from '../../constants/navigationString'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Others({navigation}) {
    
    return (
        <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems:'center'}}>
        <Image source={require('../../asset/category.png')} style={{ width: 200, height: 200, resizeMode:'contain' }}></Image>
         <Text style={{fontSize:30, paddingBottom:50}}>CATEGORIES</Text>
        </View>
        
        
         <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="desktop-tower"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Desktop</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>

             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="expansion-card"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Graphic Card</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>
             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="headphones"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Headphones</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>

             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="keyboard"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Keyboard</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>
             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="laptop"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Laptop</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>
             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="monitor"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Monitor</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>

             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="mouse"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Mouse</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>

             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="sd"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Storage Devices</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>

             <View style={{paddingHorizontal:25, paddingVertical:0, justifyContent:'center'}}>
            <View style={{width:60, paddingLeft:25}}>
            <MaterialCommunityIcons
              name="blur"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons>
            </View>
            <View style={{paddingLeft:70,paddingRight:20, top:-38,}}>
                <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.HOME)} style={{borderRadius:10,borderWidth:2, height:40,borderColor:'#6902FC',justifyContent:'center'}}>
                        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:20, }}>Other</Text>
                </TouchableOpacity>
            </View>
            
             
             </View>
             </ScrollView>
        </View>
    )
} 