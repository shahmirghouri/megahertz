import {Home, Profile} from '../Screens';
import * as React from 'react';
import navigationString from '../constants/navigationString';

export default function(Stack) {
  return (
    <>
      {/* <Stack.Screen name={navigationString.HOME} component={Home} /> */}
      <Stack.Screen name={navigationString.PROFILE} component={Profile} />
    </>
  );
}
