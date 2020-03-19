import * as React from 'react';
import { StyleSheet, View, Modal, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { render } from 'react-dom';

export default class PlusScreen extends React.Component{
  state = {
    modalVisible: false,
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return (
      <ScrollView>
         <View style={{marginTop: 22}}>
            <View style={styles.row}>
              <Text>Hello World!</Text>
              <Text> Poop</Text>

            </View>
      </View>
       
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  
  optionText: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
    color: '#56C596'
  },
});
