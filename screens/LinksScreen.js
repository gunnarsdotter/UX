import * as React from 'react';
import { StyleSheet, View, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { render } from 'react-dom';

export default class LinksScreen extends React.Component{
  state = {
    currentDay: null,
    currentDate: null
  }
  
  

  render(){
    return (
      <ScrollView>
        <Calendar
          // Initially visible month. Default = Date()
          current={'2020-03-01'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {this.setState({ currentDay: day.day, currentDate: day.dateString})}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          markedDates={{
            '2020-03-04': {marked: true, dotColor: '#56C596'},
            '2020-03-17': {marked: true, dotColor: '#56C596'},
            '2020-03-18': {marked: true, dotColor: '#56C596', activeOpacity: 0},
            '2020-03-24': {marked: true, dotColor: '#56C596', activeOpacity: 0},
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#56C596',
            todayTextColor: '#56C596',
            selectedDotColor: '#ffffff',
            arrowColor: '#56C596',
            monthTextColor: '#56C596',
            indicatorColor: '#56C596',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
        <Text style={styles.optionText}>{this.state.currentDate}</Text>
              {this.state.currentDay == 4 ? 
              <List>
                <ListItem>
                  <Body>
                    <Text>Legs</Text>
                    <Text note>This is a workout</Text>
                  </Body>
                  <Right>
                    <Text note>12:00 - 12:45</Text>
                  </Right>
                </ListItem>
              </List> : <View></View>}
              {this.state.currentDay == 17 ?
              <List>
                <ListItem>
                <Body>
                  <Text>Back</Text>
                  <Text note>Time for a backattack!</Text>
                </Body>
                <Right>
                  <Text note>09:00 - 10:00</Text>
                </Right>
                </ListItem> 
              </List>: <View></View>}
              {this.state.currentDay == 18 ?
              <List>
                <ListItem>
                <Body>
                  <Text>HIIT</Text>
                  <Text note>Let's sweat!</Text>
                </Body>
                <Right>
                  <Text note>11:00 - 11:30</Text>
                </Right>
                </ListItem> 
              </List>: <View></View>}
              {this.state.currentDay == 24 ?
              <List>
                <ListItem>
                <Body>
                  <Text>Cardio</Text>
                  <Text note>Run baby run!</Text>
                </Body>
                <Right>
                  <Text note>11:00 - 12:00</Text>
                </Right>
                </ListItem> 
              </List>: <View></View>}
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
