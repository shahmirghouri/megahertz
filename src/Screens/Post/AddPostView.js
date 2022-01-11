import React , {useState, useContext}from 'react';
import {
  
  Dimensions,
  TextInput,
  Image,
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewAlert,
  ActivityIndicator,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRef} from 'react';
import navigationString from '../../constants/navigationString';
import Home from '../Home/Home';
import Inbox from '../Chat/Inbox';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
// import Post from '../Post/Post';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';

import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { AddImage } from '..';

const AddPostView = ({newImages, addImages,}) => {

    const _renderItem = ({item, index}) =>  {
        return(
            <View styles={s.slide}  key={index}>
                <Image style={{width:'88%', borderRadius:15, height:200,}} source={{uri: item.path}}/>
                <View style ={{marginTop:10, flexDirection:'row', alignItems:'center'}}> 
                    
                </View>

            </View>
        )
    }

    return(
        <View style={s.container1}>
            <View style= {s.header}>
                <Image source={require('../../asset/uploadimage.png')} style={{height: 50, width: 50}} />
               

            </View>
            {
                    newImages?.length > 0 ? (
                        <Carousel 
                        
                        data = {newImages}
                        renderItem={_renderItem}
                        onSnapToItem={(index) => console.log(index)}
                        sliderWidth={400}
                        itemWidth={400}
                        vertical={false}
                        />
                    ) : ( <TouchableOpacity onPress={addImages} style={s.noImage}>
                        <Text>Add an Image</Text>
                    </TouchableOpacity>)
                }
        </View>
    )
}
export default AddPostView;

const s = StyleSheet.create({
    container1: {
        flex:1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,

    },

    header: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom:10
    },

    noImage: {
        backgroundColor: '#E9EDF3',
        height:200,
        width:'100%',
        borderRadius: 15,
        borderColor:'#6902FC',
        borderWidth:2,
        justifyContent: 'center',
        alignItems:'center'

    },
    slide:{

    }


})