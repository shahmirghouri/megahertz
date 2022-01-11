import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Linking,
  Platform,
} from 'react-native';
import navigationString from '../../constants/navigationString';
import styles from './styles';
import ConstButton from '../../asset/button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import Dashboard from '../Dashboard/Dashboard';
import call from 'react-native-phone-call';
// import Review  from '../Review/Review';



export default function Detail({navigation, route}) {
  const Products = route.params;

  const triggerCall = () => {
    // if (Products.phone.length != 10) {
    //     alert('Please insert correct contact number');
    //     return;
    //   }

    // const args = {
    //   number: Products.phone,
    //   prompt: true,
    // };
    // // Make a call
    // call(args).catch(console.error);
    let phoneNumber = "";
    if(Platform.OS === 'android')
    {
      phoneNumber = `tel:${Products.phone}`;

    }
    else
    {
      phoneNumber = `teleprompt:${Products.phone}`;
    }
    Linking.openURL(phoneNumber);


  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white',}}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left-circle"
          size={28}
          color={'#6902FC'}
          onPress={() => navigation.goBack()}></MaterialCommunityIcons>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationString.CHAT)}>
          <MaterialCommunityIcons
            name="forum"
            size={25}
            color={'#6902FC'}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={Products.img}
          style={{resizeMode: 'contain', flex: 1}}></Image>
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.categoryLine} />
          <Text style={{fontWeight: 'bold', marginLeft: 5, color: 'darkgray'}}>
            {Products.category}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, width: 250, color:'black'}}>
            {Products.name}
          </Text>
          <View style={styles.priceTag}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Rs. {Products.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal:20, marginTop:10}}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Description</Text>
            
        </View>
        <ScrollView style={{paddingHorizontal:20, marginTop:10}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize:16, lineHeight:22, marginTop:10, marginBottom:20}}>{Products.about}</Text>
       
            <ConstButton text="Make a call" onPress={triggerCall}/>
            {/* <View>
            <TouchableOpacity style={{      borderRadius:8,
       
       marginVertical:25,
       marginHorizontal:25,
       paddingVertical:14,
       paddingHorizontal:10,
       backgroundColor: '#6902FC',}} onPress={() => navigation.navigate(navigationString.REVIEW)}>
              <View><Text>fdfd</Text></View>
            </TouchableOpacity>
            </View> */}
           
            
        
       
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}
