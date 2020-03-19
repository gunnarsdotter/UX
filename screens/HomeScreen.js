import * as React from 'react';
import { SafeAreaView, Platform, StyleSheet, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Item } from 'native-base';
import {Icon} from 'react-native-elements'
import Button from './../components/Button.js'
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandler } from 'expo';

const list = [
  {
    key: 1,
    name: 'Mitt Grymma Pass',
    pic: 'fitness-center',
    bodypart: ['Ben', 'Mage']
  },
  {
    key:2,
    name: 'Fit it Pass',
    pic: 'favorite-border',
    bodypart: ['Armar, ', 'Bröst']
  },
  {
    key:3,
    name: 'Squatit',
    pic: 'airline-seat-legroom-extra',
    bodypart: ['Ben, ', 'Rumpa']
  },
  {
    key:4,
    name: 'Run',
    pic: 'directions-run',
    bodypart: ['Helkropp']
  }
]

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titleText}> Mina Pass</Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((i) => (
            <Swipeable renderLeftActions={LeftActions} 
                renderRightActions={RightActions}
                >
              <ListItem
                noIndent style={styles.listItemstyle}
                onPress={() => Alert.alert('Här visas info om pass')}
                onLongPress={() => Alert.alert('skaka och radera')}
              >
              <Left>
                <Icon 
                    name={i.pic} //ios-brush ios-trash
                    size={40}
                    color="#000"
                />
                <View style={styles.box}>
          <Text style={styles.headline} >{i.name}</Text>
          <Text style={styles.details}>{i.bodypart}</Text>
                </View>
                </Left>
                <Right>
                <Button
                    title="STARTA"
                    onPress={() => Alert.alert('Starta pass')}>
                  </Button>
                </Right>
              </ListItem>  
              </Swipeable>      
          ))
        }
          </List>
      </ScrollView>
    </View>
  );
}

const LeftActions = ()=> {
  return (
    <View style={styles.backgroundswipe}>
      <View style={styles.Leftcolumn}>
      <Icon 
            name="create" //ios-brush ios-trash
            type="Ionicons"
            size={40}
            rever
            color="#fff"
            onPress={() => Alert.alert('Här ska du kunna redigera pass')}
        />
      </View>
      <View></View>
    </View>
    
  )
}
const RightActions = ()=> {
  return (
    <View style={styles.backgroundswipe}>
      <View style={styles.Leftcolumn}>
      <Icon 
            name="delete" //ios-brush ios-trash
            type="In"
            size={40}
            rever
            color="#fff"
            onPress={() =>  Alert.alert('Passet har raderats')}
        />
      </View>
      <View></View>
    </View>
    
  )
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  titleText:{
    margin:0,
    textAlign: "center",
    fontSize:40,
    color: "#fff",
    backgroundColor:"#56C596",
    padding: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
  },
  listItemstyle:{
    backgroundColor: "white", 
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#B2B8B8",
    borderRadius: 5
  },
  box: {
    flex: 1, 
    flexDirection: "column",
    paddingLeft: 20  
  },
  headline: {
    alignSelf: "flex-start",
  }, 
  details: {
    alignSelf: "flex-start",
    fontSize: 12,  
  }, 
  button: {
    alignItems: 'center',
    backgroundColor: '#56C596',
    padding: 10
  },
  Leftcolumn:{
    flex:1,
    width: 90,
    justifyContent: "center",
    alignItems:"center"
    
  },
  backgroundswipe:{
    backgroundColor:"#B2B8B8",
    borderRadius: 5
  }
  
  

});
