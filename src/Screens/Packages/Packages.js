import React from 'react';
import {Dimensions, TouchableHighlight} from 'react-native';
import navigationString from '../../constants/navigationString'

import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Packages({navigation}) {
 
    return (
      <ScrollView>
        <View>

          
          <View style={styles.iconcontainer}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
              <Image source={require('../../asset/backicon.png')} />
            </TouchableOpacity>

            <Text style={styles.Heading}>Packages</Text>
          </View>
          <View>
            <Text
              style={{
                color: '#6902FC',
                fontSize: 45,
                marginTop: 55,
                marginLeft: 25,
                fontWeight: 'bold',
              }}>
              Browse through our Packages
            </Text>
          </View>




          
          <TouchableOpacity style={styles.banner}>
            <Text style={styles.Heading}>Package 1</Text>
            <Text style={styles.textcontent}>
              Boost upto 3 Ads for 3 days and get more exposure!
            </Text>
            <View
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get('window').width +
                      Dimensions.get('window').height,
                  ) / 2,
                width: Dimensions.get('window').width * 0.25,
                height: Dimensions.get('window').width * 0.25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>PKR 99/-</Text>
            </View>
            <Text> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner}>
            <Text style={styles.Heading}>Package 2</Text>
            <Text style={styles.textcontent}>
              Boost upto 7 Ads for 15 days and get more exposure!
            </Text>
            <View
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get('window').width +
                      Dimensions.get('window').height,
                  ) / 2,
                width: Dimensions.get('window').width * 0.25,
                height: Dimensions.get('window').width * 0.25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>PKR 179/-</Text>
            </View>
            <Text> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner}>
            <Text style={styles.Heading}>Package 3</Text>
            <Text style={styles.textcontent}>
              Boost upto 12 Ads for 30 days and get more exposure!
            </Text>
            <View
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get('window').width +
                      Dimensions.get('window').height,
                  ) / 2,
                width: Dimensions.get('window').width * 0.25,
                height: Dimensions.get('window').width * 0.25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>PKR 249/-</Text>
            </View>
            <Text> </Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  textcontent: {
    color: 'white',
    fontSize: 17.5,
    marginLeft: 18,
    alignContent: 'center',
    marginRight: 18,
    marginBottom: 10,
  },
  bannerhead: {
    color: 'white',
    fontWeight: '700',
    fontSize: 28,
    marginTop: 14,
    marginLeft: 30,
    marginBottom: 15,
  },
  banner: {
    marginTop: 35,
    alignItems: 'center',
    marginleft: 30,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: '#6902FC',
    borderRadius: 30,
    width: 350,
    borderColor: 'white',
    elevation: 20,
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
    fontSize: 25,
    marginTop: 14,
    marginLeft: 10,
    marginBottom: 15,
  },
  price: {
    color: '#6902FC',
    fontWeight: '500',
    fontSize: 25,
    marginTop: 14,
    marginLeft: 10,
    marginBottom: 15,
  },
});