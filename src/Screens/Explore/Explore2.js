// import React from 'react'
// import { View, Text, Button , Image} from 'react-native'
// import navigationString from '../../constants/navigationString'
// import ConstButton from '../../asset/button'
// import styles from './styles'

// export default function Explore2({navigation}) {
    
//     return (
//         <View style={styles.container}>
         
         
//          <View style = {{
                
//          }}>
//     <Image source={require('../../asset/splash_2.png')} style={{ width: 300, height: 200}}/>
//     </View>
//         {/*  <Button title="next" onPress={()=> navigation.navigate(navigationString.HOME)}></Button> */}
//          <ConstButton text="Next" onPress={()=> navigation.navigate(navigationString.SIGNIN)}/>
//         </View>
//     )
// }

import React from 'react'
import { View, Text, Button , Image, TouchableOpacity, StyleSheet} from 'react-native'
import navigationString from '../../constants/navigationString'
import ConstButton from '../../asset/button'
import styles from './styles'

import Onboarding from 'react-native-onboarding-swiper';





const OnboardingScreen =({navigation}) => {
    return(
        <Onboarding

            onDone={() => navigation.navigate(navigationString.SIGNIN)}
            onSkip={() => navigation.navigate(navigationString.SIGNIN)}
            

            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../asset/0.png')} style={{
                        resizeMode: "cover",
                        
                      }}/>,
                    title: 'Explore the best Seller',
                    subtitle: 'Get connected with the most reliable and trusred seller all arounf the world',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../asset/1.png')} style={{
                        resizeMode: "cover",
                        height: 300,
                        width: 400
                      }}/>,
                    title: 'Instant Chatroom',
                    subtitle: 'Get your query with ease by establishing chat with sellers ',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../asset/2.png')} style={{
                        resizeMode: "cover",
                        height: 300,
                        width: 400
                      }}/>,
                    title: 'Find Top-Rated Sellers',
                    subtitle: 'Make your purchase hassle free by doing bussiness with top-rated trusted sellers',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../asset/4.png')} style={{
                        resizeMode: "cover",
                        height: 300,
                        width: 400
                      }}/>,
                    title: 'Lock The DEAL',
                    subtitle: 'Make your deal successful by communicating sellers instantly',
                },
    
        ]}
/>
    )
}

export default OnboardingScreen;

