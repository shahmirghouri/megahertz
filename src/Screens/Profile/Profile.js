import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.settingicon}
            onPress={() => {
              alert('you clicked me');
            }}>
             <MaterialCommunityIcons
                name="cog-outline"
                size={25}
                color={'white'}
              ></MaterialCommunityIcons>
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../../asset/profile.jpeg')}
            />
            <Text style={styles.name}>Muhammad M.</Text>
            <Text style={styles.metadata}>Since Jun'21</Text>
          </View>
        </View>

        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Products</Text>
            <Text style={styles.count}>23</Text>
          </View>

          <View style={styles.detailContent}>
            <Text style={styles.title}>Followers</Text>
            <Text style={styles.count}>318</Text>
          </View>

          <View style={styles.detailContent}>
            <Text style={styles.title}>Following</Text>
            <Text style={styles.count}>200</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttex}>Follow!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.Blackhead}>Published Products</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6902FC',
    height: 310,
  },
  metadata: {
    color: '#ffffff',
    fontSize: 13.5,
    alignItems: 'center',
    fontWeight: '400',
  },
  headerContent: {
    alignItems: 'center',
  },
  buttex: {
    color: 'white',
    fontSize: 22,
  },
  avatar: {
    width: 135,
    height: 135,
    borderRadius: 50,
    backgroundColor: '#faae1c',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
  },
  Blackhead: {
    marginTop: 165,
    marginLeft: 20,
    fontSize: 26,
    color: '#6902FC',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  settingicon: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 350,
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 260,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderColor: '#6902FC',
    borderWidth: 4,
    elevation: 13,
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#6902FC',
  },
  count: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '500',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: 50,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#f11150',
    elevation: 8,
  },
});