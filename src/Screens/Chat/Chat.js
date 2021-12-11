import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from 'react-native';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          date: '9:50 am',
          type: 'in',
          message: 'Hi! Is this available?',
        },
        {
          id: 2,
          date: '9:50 am',
          type: 'out',
          message: 'Yes! Its is.',
        },
        {
          id: 3,
          date: '9:50 am',
          type: 'in',
          message: 'Where can this be seen?',
        },
        {
          id: 4,
          date: '9:50 am',
          type: 'in',
          message: 'Is the Price negotiable?',
        },
        {
          id: 5,
          date: '9:50 am',
          type: 'out',
          message: 'Can be seen at Bhadurabad',
        },
        {
          id: 6,
          date: '9:50 am',
          type: 'out',
          message: 'Sure we can negotiate on the price',
        },
        {
          id: 7,
          date: '9:50 am',
          type: 'in',
          message: 'Perfect then... I will be there',
        },
        {
          id: 8,
          date: '9:50 am',
          type: 'in',
          message: 'At 5pm today',
        },
        {
          id: 9,
          date: '9:50 am',
          type: 'in',
          message: 'Sounds Good?',
        },
      ],
    };
  }

  renderDate = date => {
    return <Text style={styles.time}>{date}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={message => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text style={[styles.msgfont]}>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            );
          }}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={name_address => this.setState({name_address})}
            />
          </View>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={{
                uri: 'https://img.icons8.com/small/75/ffffff/filled-sent.png',
              }}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: '#6902FC',
    width: 45,
    height: 45,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  msgfont: {
    color: '#ffffff',
    fontSize: 18,
  },
  inputContainer: {
    borderBottomColor: '#6902FC',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor: '#2f3542',
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor: '#6902FC',
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 13,
    color: '#ffffff',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6902FC',
    borderRadius: 30,
    padding: 3,
  },
  Sender: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6902FC',
    borderRadius: 300,
    padding: 5,
  },
});