import React from 'react';
import {Dimensions, TouchableHighlight, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import navigationString from '../../constants/navigationString';
import ConstButton from '../../asset/button';
const categories = [
  'Laptop',
  'Graphics Card',
  'Monitor',
  'Keyboard',
  'Mouse',
  'Processor',
  'Motherboard',
];
const condition = ['New', 'Used', 'Refurbished'];

import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import AddPostView from './AddPostView';

export default function Post({navigation}) {
  
    return (
        
      <ScrollView>
         
        <View>
            
          <View style={styles.iconcontainer}>

              
              
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                
              <Image source={require('../../asset/backicon1.png')} />
            </TouchableOpacity>

            <Text style={styles.Heading}>Create Ad</Text>
          </View>

          
          <View style={{height:300}}><Text></Text></View>
          <View>
            <Text style={styles.price}>Enter Product Title</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g: ASUS RTX 3060ti"
              keyboardType="default"
            />
            <Text style={styles.price}>Product Description</Text>
            <TextInput
              style={{
                height: 150,
                width: 350,
                marginLeft: 22,
                marginTop: 7,
                fontSize: 17,
                borderWidth: 0.2,
                borderColor: '#6902FC',
                padding: 10,
                textAlignVertical: 'top',
                marginBottom:20,
              }}
              placeholder="Add a description about your product"
              keyboardType="default"
            />
            <Text style={styles.price}>Price</Text>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                width: 350,
                marginLeft: 22,
                marginTop: 7,
                borderWidth: 0.2,
                borderColor: '#6902FC',
                marginBottom:20,
              }}>
              <Text
                style={{
                  paddingHorizontal: 5,
                  fontWeight: '400',
                  marginTop: 9,
                  fontSize: 22,
                  color: '#6902FC',
                  
                }}>
                PKR
              </Text>
              <TextInput
                style={{fontSize: 20}}
                placeholder="28500                           "
                keyboardType="numeric"
              />
            </View>

            <View
              style={{
                marginTop: 22,
                marginLeft: 20,
                borderWidth: 1.5,
                borderRadius: 4,
                width: 200,
            borderColor: '#6902FC',
                elevation: 10,
                marginBottom:20,
              }}>
              <TouchableOpacity>
                <SelectDropdown
                  data={categories}
                  defaultButtonText="Select Category"
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 18,
                marginLeft: 20,
                borderWidth: 1.5,
                borderRadius: 4,
                width: 200,
              borderColor: '#6902FC',
                elevation: 3,
                marginBottom:20
              }}>
              <TouchableOpacity>
                <SelectDropdown
                  data={condition}
                  defaultButtonText="Select Condition"
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ConstButton text="Upload Images" onPress={() => navigation.navigate(navigationString.ADDIMAGE)} />
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
    marginTop: 13,
    marginLeft: 10,
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: 350,
    marginLeft: 22,
    marginTop: 7,
    fontSize: 17,
    borderWidth: 0.2,
   borderColor: '#6902FC',
    padding: 10,
    marginBottom:20,
  },
  price: {
    color: '#6902FC',
    fontWeight: '500',
    fontSize: 22,
    marginTop: 14,
    marginLeft: 24,
  },
});