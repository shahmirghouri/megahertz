// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import Home from './components/Home';
// //import type {Node} from 'react';
// import Login from './components/Login'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {
//   Button,
//   Text,
//   View,
//   StyleSheet,
//   TextInput
// } from 'react-native';



// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       name:"",
//       pass:"",
//       address:"",
//     }
//   }

//   const Stack = createNativeStackNavigator();

//   submit()
//   {
//       // alert("Data Submitted");
//       console.warn("all values", this.state);
//   }


//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator> 
//       <View>
//         <TextInput placeholder="Enter Name" style={[styles.borders]} 
//           onChangeText={(text)=> {this.setState({name:text})}} >

//         </TextInput>

//         <TextInput placeholder="Enter Password" style={[styles.borders] } secureTextEntry={true}
//           onChangeText={(text)=> {this.setState({pass:text})}} >

//         </TextInput>

//         <TextInput placeholder="Enter Address" style={[styles.borders]} 
//           onChangeText={(text)=> {this.setState({address:text})}} >

//         </TextInput>

//         <Button title="Submit" onPress={()=>{this.submit()}}></Button>
//       </View>
//       </NavigationContainer>

//     )
//   }
// }


// const styles = StyleSheet.create({
//   // colors:{
//   //   color:'maroon',
//   //   backgroundColor:'lightpink'

//   // },
//   // fonts:{
//   //   fontSize: 30,
//   //   fontFamily:'ariel'
    
//   // },
//   //  backColor:{
//   //    backgroundColor:'#808080'
//   //  },

//   borders:{
//     borderColor:'skyblue',
//     borderWidth:2,
//     padding:10,
//     marginHorizontal:10,
//     marginVertical:10



//   }
// })




// export default App;
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import { useEffect } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from 'react-native';



const App = () => {




  return (
    <View style={{flex:1}}>
      <Routes />
      <FlashMessage position='top'/>
    </View>
  );
}

export default App;