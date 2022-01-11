import React from 'react';
import {Dimensions, TouchableHighlight} from 'react-native';
import navigationString from '../../constants/navigationString'

import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Inbox({navigation}) {
  
    return (
      <ScrollView>
        <View>
          <View style={styles.iconcontainer}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
              <Image source={require('../../asset/backicon.png')} />
            </TouchableOpacity>
            <Text style={styles.Heading}>Messages</Text>
          </View>
          {/* First Message starts here */}

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Muhammad M.</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Ali Zaid</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Shafay Nadeem</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Sufyan Ch.</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Asad Shahmir</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Asghar Rizvi</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Hassan Sultan</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Abdul Hannan</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Abdul Rafay</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.banner} onPress={()=> navigation.navigate(navigationString.CHAT)}>
            <View style={styles.datedayview}>
              <Text style={styles.msgHeading}>Muhammad M.</Text>
              <Text style={styles.dateday}>Sun 04/07/2021</Text>
            </View>
            <Text style={styles.textcontent}>
              Hi there! I just saw your Ad. Is this availabl....
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  dateday: {
    fontSize: 14,
    color: '#6902FC',
    textAlign: 'right',
    flex: 1,
    marginTop: 15,
    marginRight: 15,
  },
  datedayview: {
    flexDirection: 'row',
  },
  textcontent: {
    color: '#444444',
    fontSize: 17.5,
    marginLeft: 19,
    alignContent: 'center',
    marginRight: 18,
    marginBottom: 20,
  },
  bannerhead: {
    color: 'white',
    fontWeight: '700',
    fontSize: 28,
    marginTop: 12,
    marginLeft: 30,
    marginBottom: 15,
  },
  banner: {
    marginleft: 20,
    marginBottom: 2,
    backgroundColor: 'white',
    borderRadius: 9,
    borderBottomWidth: 0.5,
    borderColor: '#6902FC',
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
    fontSize: 20,
    marginTop: 14,
    marginLeft: 19,
    marginBottom: 15,
  },
  msgHeading: {
    color: '#6902FC',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 19,
    marginBottom: 5,
  },
});