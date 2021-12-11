import React from 'react';
//import type {Node} from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

const Home = (props) => {
    return(
        <View>
            <Text style={{fontSize: 30}}>
                Hellooo... {props.data}
            </Text>
        </View>
    )
}

export default Home;
