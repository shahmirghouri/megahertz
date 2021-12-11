import React, {useState} from 'react';

import {View, Text, SafeAreaView, TextInputComponent, Image,  KeyboardAvoidingView } from 'react-native';
import ConstButton from '../../asset/button';
import TextInputWithLable from '../../Component/TextInputWithLable';
import navigationString from '../../constants/navigationString';
import styles from './styles';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import SocialButton from '../../asset/socialButton';





export default function SignUp({navigation}) {
  const [state, setState] = useState({
    isLoading: false,
    userName: '',
    email: '',
    password: '',
    isSecure: true,
  });

  const {isLoading, userName, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      userName,
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

  const onSignup = () => {
    const checkValid = isValidData();
    if (checkValid) {
        navigation.navigate(navigationString.DASHBOARD)
        
    }
  };

  return (
    <View style={styles.container}>

      <KeyboardAvoidingView behavior="position">

      <View style={styles.img}> 
      <Image source={require('../../asset/signup.png')} style={{ width: 250, height: 250}}/>
      


      </View>

      <TextInputWithLable
        placeholder="Your Username"
        label="Username"
        onChangeText={userName => updateState({userName})}
      />

      <TextInputWithLable
        placeholder="Your Email"
        label="E-mail"
        onChangeText={email => updateState({email})}
      />

      <TextInputWithLable
        placeholder="Your Password"
        label="Password"
        isSecure={isSecure}
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />

      <ConstButton text="SIGNUP" onPress={onSignup} />
      </KeyboardAvoidingView>

      <SocialButton 
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf8"
        
        />
          <SocialButton 
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        
        />

    </View>
  );
}
