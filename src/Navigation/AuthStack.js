import {SignIn, SignUp, Explore1, Explore2, Home, Chat, Dashboard, ProductPage, Post,Detail, Search,Packages,Inbox,CategotyNavigation} from '../Screens';
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
      <Stack.Screen name={navigationString.DETAIL} component={Detail} />
      <Stack.Screen name={navigationString.CATEGORYNAVIGATION} component={CategotyNavigation} />
      <Stack.Screen name={navigationString.INBOX} component={Inbox} />
      <Stack.Screen name={navigationString.PACKAGES} component={Packages} />
      <Stack.Screen name={navigationString.SEARCH} component={Search} />
      <Stack.Screen name={navigationString.POST} component={Post} />
 
    </>
    
  );
}
