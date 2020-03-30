import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View , FlatList} from 'react-native';
import {Card, CardItem, Thumbnail, Button, Icon, Left, Body, Row} from 'native-base';
import Swiper from 'react-native-swiper'; //måste laddas ned 

import { MonoText } from '../components/StyledText';
const DATA = [
  {
    id: '1',
    title: '2 Mars',
    incr : '+1kg',
  },
  {
    id: '2',
    title: '5 Mars',
    incr : '-2kg',
  },
  {
    id: '3',
    title: '10 Mars',
    incr : '+3kg',
  },
];
const DATA2 = [
  {
    id: '1',
    title: '4 Mars',
    incr : '-3kg',
  },
  {
    id: '2',
    title: '11 Mars',
    incr :'+1kg',
  },
  {
    id: '3',
    title: '14 Mars',
    incr : '+3kg',
  },
];
const DATA3 = [
  {
    id: '1',
    title: '2 Mars',    
    incr: '+0kg',
  },
  {
    id: '2',
    title: '5 Mars',
    incr : '-1kg',
  },
  {
    id: '3',
    title: '10 Mars',
    incr :'+2kg',
  },
];

function Item({ title, incr }) {
  return (
    <View style={styles.listitem}>
      <Text style={styles.listtitle}>{title}</Text>
      <Text style={styles.listincr}>{incr}</Text>
    </View>
  );
}
class Display extends React.Component {
  
  render() {
     return (
        <View style={styles.contentContainer}>
            
             <Card style={styles.cardStyle} transparent> 
             <CardItem header> 
                  <Text style={{color:'#56C596', fontSize: 25, alignSelf: 'center'}}> {this.props.titleLabel} </Text>
              </CardItem>
              <CardItem>
                  <Image source={__DEV__
                    ? require('../assets/images/benboj.jpg')
                    : require('../assets/images/benboj.jpg') } style={{height: 250, flex:1, borderColor:'grey', borderWidth:1}}/>
              </CardItem> 
             </Card>
            
            <Text style={styles.textStyle}> Utveckling</Text>
              <FlatList
                data={this.props.data}
                renderItem={({ item }) => <Item title={item.title} incr={item.incr} />}
                keyExtractor={item => item.id} />
           
         </View>
  );
  }
}

export default class StatScreen extends React.Component {

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={true}
        dotColor={'gray'}
        activeDotColor = {'#56C596'}
        index={1}>
        <View style={styles.container}>
          <Display titleLabel="Benböj" data={DATA} />
        </View>     
        <View style={styles.container}>
          <Display titleLabel="Marklyft" data={DATA2}/>
        </View>
        <View style={styles.container}>
          <Display titleLabel="Axelpress" data={DATA3} />
        </View>
      </Swiper>
      
    )
  }
}

StatScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    //flex:1,
    flexDirection: 'column',
    alignContent: "space-between",
  },
  listitem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 7.5,
    alignContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: 'lightgray',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderRightColor: 'white'
  },
  listtitle: {
    fontSize: 15,
    flex:1
  },
  listincr:{
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  textStyle: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  cardStyle: {
    borderWidth: 0,
    borderColor: 'white',
  }

});
