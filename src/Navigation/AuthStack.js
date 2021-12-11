import {SignIn, SignUp, Explore1, Explore2, Home, Chat, Dashboard, ProductPage} from '../Screens';
import * as React from 'react';
import navigationString from '../constants/navigationString';

export default function(Stack) {
  return (
    <>
    {/* <Stack.navigator headerMode="none" /> */}
    <Stack.Screen name={navigationString.EXPLORE1} component={Explore1} />
    <Stack.Screen name={navigationString.EXPLORE2} component={Explore2} />
      <Stack.Screen name={navigationString.SIGNIN} component={SignIn} />
      <Stack.Screen name={navigationString.SIGNUP} component={SignUp} />
      <Stack.Screen name={navigationString.HOME} component={Home} />
      <Stack.Screen name={navigationString.CHAT} component={Chat} />
      <Stack.Screen name={navigationString.DASHBOARD} component={Dashboard} />
 
    </>
    
  );
}
