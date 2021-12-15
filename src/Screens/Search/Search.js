import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import navigationString from '../../constants/navigationString';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Products from '../../asset/Products';
import Boton from '../../asset/likeButton'


export default function Search({navigation}) {
    return(
        <SafeAreaView style={{flex:1,  paddingHorizontal:20}}>
      <View>
        
        {/* <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to</Text> */}
        <Text style={{fontSize: 36, fontWeight: 'bold', color: '#6902FC'}}>
          Search
        </Text>

        <View
          style={{
            // centring Tab Button...
            position: 'absolute',

            top: 17,
            right: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.HOME)}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={25}></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={25}></MaterialCommunityIcons>
          <TextInput placeholder="Search" style={styles.input}></TextInput>
        </View>

        <View style={styles.filterButton}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={25}
            color="#f4f4f4"

            // color='#6902FC'
          ></MaterialCommunityIcons>
        </View>

       
      </View>

   
    </SafeAreaView>
    )
}