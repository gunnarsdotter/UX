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
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
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
  
  optionText: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
    color: '#56C596'
  },
});
