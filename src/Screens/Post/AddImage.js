// import React , {useState, useContext}from 'react';
// import {
  
//   Dimensions,
//   TextInput,
//   Image,
//   View,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   ViewAlert,
//   ActivityIndicator,
// } from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {useRef} from 'react';
// import navigationString from '../../constants/navigationString';
// import Home from '../Home/Home';
// import Inbox from '../Chat/Inbox';
// import Search from '../Search/Search';
// import Profile from '../Profile/Profile';
// import Post from '../Post/Post';
// import ActionButton from 'react-native-action-button';
// import ImagePicker from 'react-native-image-crop-picker';
// import AddPostView from './AddPostView';




// const AddImage = () => {
//     const [images, setImages] = useState();

//     const openImagePicker = () => {
            
//         let imageList = [];

//         ImagePicker.openPicker({
//             multiple: true,
//             waitAnimationEnd: false,
//             includeExif: true,
//             forceJpg: true,
//             compressImageQuality: 0.8,
//             maxFiles:10,
//             mediaType:'any',
//             includeBase64: true,

//         }).then(response => {console.log('Response: ', response);
//         response.map(image => {
//             imageList.push({
//                 filename: image.filename,
//                 path: image.path,
//                 data: image.data,
//             })
//         }); setImages(imageList);
//     }).catch(e => console.log('Error', e.message));

//     };

//     return(
//         <AddPostView newImages={images} addImages={openImagePicker}/>

//     )

// }

// export default AddImage;























import React , {useState, useContext}from 'react';
import {
  
  Dimensions,
  TextInput,
  Image,
  View,
  ScrollView,
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
import SelectDropdown from 'react-native-select-dropdown';
import ConstButton from '../../asset/button';
import AddPostView from './AddPostView';

const condition = ['New', 'Used', 'Refurbished'];

const categories = [
    'Laptop',
    'Graphics Card',
    'Monitor',
    'Keyboard',
    'Mouse',
    'Processor',
    'Motherboard',
  ];

const AddImage = ({navigation}) => {
    const [images, setImages] = useState();

    const openImagePicker = () => {
            
        let imageList = [];

        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
            compressImageQuality: 0.8,
            maxFiles:10,
            mediaType:'any',
            includeBase64: true,

        }).then(response => {console.log('Response: ', response);
        response.map(image => {
            imageList.push({
                filename: image.filename,
                path: image.path,
                data: image.data,
            })
        }); setImages(imageList);
    }).catch(e => console.log('Error', e.message));

    };

    return(
        
        <ScrollView>
         
        <View>
            
          <View style={styles.iconcontainer}>

              
              
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                
              <Image source={require('../../asset/backicon1.png')} />
            </TouchableOpacity>

            <Text style={styles.Heading}>Create Ad</Text>
          </View>

          
          <View style={{height:300}}>
          <AddPostView newImages={images} addImages={openImagePicker}/>
          </View>
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
          <ConstButton text="Upload Images" onPress={() => navigation.navigate(navigationString.DASHBOARD)} />
        </View>
      </ScrollView>


    )

}

export default AddImage;






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










































// import {
//     InputField,
//     InputWrapper,
//     AddImages,
//     SubmitBtn,
//     SubmitBtnText,
//     StatusWrapper,
//   } from './styles';
// import styles from '../Home/styles';


// export default function AddImage({navigation}) {
// const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const takePhotoFromCamera = () => {
//     ImagePicker.openCamera({
//       width: 1200,
//       height: 780,
//       cropping: true,
      
//     }).then((image) => {
//       console.log(image);
//       const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//       setImage(imageUri);
//     });
//   };

//   const choosePhotoFromLibrary = () => {
//     // ImagePicker.openPicker({
//     //     multiple: true,
//     //   width: 1200,
//     //   height: 780,
//     //   cropping: true,

//     // }).then((image) => {
//     //   console.log(image);
//     //   const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//     //   setImage(imageUri);
//     // });
    
//         ImagePicker.openPicker({
//           width: 200,
//           height: 200, compressImageMaxHeight: 400,
//           compressImageMaxWidth: 400, cropping: true, multiple: true
//         })
//           .then(response => {
//             let tempArray = []
//             console.log("responseimage-------" + response)
//             this.setState({ ImageSource: response })
//             console.log("responseimagearray" + this.state.ImageSource)
//             response.forEach((item) => {
//               let image = {
//                 uri: item.path,
//                 // width: item.width,
//                 // height: item.height,
//               }
//               console.log("imagpath==========" + image)
//               tempArray.push(image)
//               this.setState({ ImageSourceviewarray: tempArray })
//               // console.log('savedimageuri====='+item.path);
    
//               console.log("imagpath==========" + image)
//             })
    
//           })
    
      
//   };

//   return (
//     // <View>
//     //   <Text>hi</Text>
//     // </View>
//     <View style={sty.container}>
//     <InputWrapper>
//       {image != null ? <AddImages source={{uri: image}} /> : null}

//       <InputField
//         placeholder="What's on your mind?"
//         multiline
//         numberOfLines={4}
//       //  value={post}
//         onChangeText={(content) => setPost(content)}
//       />
//       {uploading ? (
//         <StatusWrapper>
//           <Text>{transferred} % Completed!</Text>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </StatusWrapper>
//       ) : (
//         <SubmitBtn onPress={alert('Product Upload Successfully!')}>
//           <SubmitBtnText>Post</SubmitBtnText>
//         </SubmitBtn>
//       )}
//     </InputWrapper>
//     <ActionButton buttonColor="#2e64e5">
//       <ActionButton.Item
//         buttonColor="#9b59b6"
//         title="Take Photo"
//         onPress={takePhotoFromCamera}>
//         <MaterialCommunityIcons
//                 name="home-outline"
//                 size={25}
//                 color={'#6902FC'}
                
//               ></MaterialCommunityIcons>
//       </ActionButton.Item>
//       <ActionButton.Item
//         buttonColor="#3498db"
//         title="Choose Photo"
//         onPress={choosePhotoFromLibrary}>
//         <MaterialCommunityIcons
//                 name="home-outline"
//                 size={25}
//                 color={'#6902FC'}
                
//               ></MaterialCommunityIcons>
//       </ActionButton.Item>
//     </ActionButton>
//   </View>
//   );
// }

// const sty = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     actionButtonIcon: {
//       fontSize: 20,
//       height: 22,
//       color: 'white',
//     },
//   });