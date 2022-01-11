// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   TouchableHighlight,
//   Image,
//   SafeAreaView,
//   TextInput,
//   Dimensions,
//   FlatList,
// } from 'react-native';
// import navigationString from '../../constants/navigationString';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from './styles';
// import ConstButton from '../../asset/button';
// import {hide} from 'yargs';
// import {color} from 'react-native-elements/dist/helpers';
// import Products from '../../asset/Products';
// import Boton from '../../asset/likeButton'

import React from 'react';
import {Dimensions, TouchableHighlight} from 'react-native';

import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Notification({navigation}) {
  return (
    <ScrollView>
      <View>
        <View style={styles.iconcontainer}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
            <Image source={require('../../asset/backicon.png')} />
          </TouchableOpacity>
          <Text style={styles.Heading}>Notifications</Text>
        </View>
        {/* First Message starts here */}

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Muhammad M.</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Muhammad added your Ad RTX 2060 to ....
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Low Inventory</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Your product HP Pavilion is low on Invent....
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Low Inventory</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Your product Reddragon R21 is low on Inv....
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Sufyan Ch.</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Sufyan just reviewed his purchase of Benq....
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Asad Shahmir</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Asad just reviewed his purchase of Benq ...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Asghar Rizvi</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Asghar just reviewed his purchase of Ben ...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Hassan Sultan</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Hassan added your Ad GTX 1050 to his wi....
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Congratulations!</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            You just got promoted to Seller Level Two....
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.banner}>
          <View style={styles.datedayview}>
            <Text style={styles.msgHeading}>Muhammad M.</Text>
            <Text style={styles.dateday}>Sun 04/07/2021</Text>
          </View>
          <Text style={styles.textcontent}>
            Hi there! I just saw your Ad. Is this availabl....
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  dateday: {
    fontSize: 14,
    color: '#6902FC',
    textAlign: 'right',
    flex: 1,
    marginTop: 15,
    marginRight: 15,
  },
  datedayview: {
    flexDirection: 'row',
  },
  textcontent: {
    color: '#444444',
    fontSize: 17.5,
    marginLeft: 19,
    alignContent: 'center',
    marginRight: 18,
    marginBottom: 20,
  },
  bannerhead: {
    color: 'white',
    fontWeight: '700',
    fontSize: 28,
    marginTop: 12,
    marginLeft: 30,
    marginBottom: 15,
  },
  banner: {
    marginleft: 20,
    marginBottom: 2,
    backgroundColor: 'white',
    borderRadius: 9,
    borderBottomWidth: 0.5,
    borderColor: '#6902FC',
  },
  iconcontainer: {
    backgroundColor: '#6902FC',
    flexDirection: 'row',
  },
  icon: {
    marginTop: 10,
  },
  Heading: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 19,
    marginBottom: 15,
  },
  msgHeading: {
    color: '#6902FC',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 19,
    marginBottom: 5,
  },
});