import React, {useState} from 'react';

import {View, Text, SafeAreaView, TextInputComponent, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import ConstButton from '../../asset/button';
import TextInputWithLable from '../../Component/TextInputWithLable';
import navigationString from '../../constants/navigationString';
import styles from './styles';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SocialButton from '../../asset/socialButton';
import { SocialIcon } from 'react-native-elements'


export default function SignIn({navigation}) {
  const [state, setState] = useState({
    isLoading: false,

    email: '',
    password: '',
    isSecure: true,
  });

  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });

    if (error) {
      //   alert(error);
      showError(error);
      return false;
    } else {
      return true;
    }
  };

  const onLogin = () => {
    const checkValid = isValidData();
    if (checkValid) {
      navigation.navigate('SignUp');
    }
  };

  return (

    

    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
      <View style={styles.img}> 
      <Image source={require('../../asset/login.png')} style={{ width: 250, height: 250}}/>
      


      </View>
      

      {/* <Text style={styles.txt}>sign in</Text> */}


      <TextInputWithLable
        placeholder="Your Email"
        label="E-mail"
        onChangeText={email => updateState({email})}
      />

      <TextInputWithLable
        placeholder="Your Password"
        label="Password"
        isSecure={isSecure}as
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />
    
      

      <ConstButton text="SIGN IN" onPress={onLogin} />
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.forget_btn} onPress={()=> navigation.navigate(navigationString.SIGNIN)}>

            <Text >Forget Password?</Text>
        
        </TouchableOpacity>

        <SocialButton 
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf8"
        
        />
          <SocialButton 
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        
        />
        

    </View>
    

  );
}

