import * as React from 'react';
import { SafeAreaView, Platform, StyleSheet, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';
import {Icon} from 'react-native-elements'
import Swipeable from "react-native-gesture-handler/Swipeable";
//import { render } from 'react-dom';
import { GestureHandler } from 'expo';
//const {Swipeable} = GestureHandler;



export default function HomeScreen() {
  //onActionPress = () => console.log("You have clicked on the action option")
 
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <List>
      <Swipeable renderLeftActions={LeftActions} 
                renderRightActions={RightActions}>
            <ListItem noIndent style={styles.listItemstyle}>
              <Left>
              <Icon 
                  name="fitness-center" //ios-brush ios-trash
                  size={40}
                  color="#000"
                  onPress={() => console.log('hello')}
              />
              <View style={styles.box}>
                <Text style={styles.headline} >Mitt Grymma Pass</Text>
                <Text style={styles.details}>Ben, Mage</Text>
              </View>
              </Left>
              <Right>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => Alert.alert('Simple Button pressed')}>
                  <Text> Start </Text>
                </TouchableOpacity>
              </Right>
            </ListItem>    
          </Swipeable>        
          <Swipeable renderLeftActions={LeftActions} 
                renderRightActions={RightActions}>
            <ListItem noIndent style={styles.listItemstyle}>
              <Left>
              <Icon 
                  name="favorite-border" //ios-brush ios-trash
                  size={40}
                  color="#000"
                  onPress={() => console.log('hello')}
              />
              <View style={styles.box}>
                <Text style={styles.headline} >Fit it Pass</Text>
                <Text style={styles.details}>Armar, Bröst</Text>
              </View>
              </Left>
              <Right>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => Alert.alert('Simple Button pressed')}>
                  <Text> Start </Text>
                </TouchableOpacity>
              </Right>
            </ListItem>    
            </Swipeable>        
            <Swipeable renderLeftActions={LeftActions} 
                renderRightActions={RightActions}>
            <ListItem noIndent style={styles.listItemstyle}>
              <Left>
              <Icon 
                  name="airline-seat-legroom-extra" //star-border, favorite-border
                  size={40}
                  color="#000"
                  onPress={() => console.log('hello')}
              />
              <View style={styles.box}>
                <Text style={styles.headline} >Squatit</Text>
                <Text style={styles.details}>Ben, Rumpa</Text>
              </View>
              </Left>
              <Right>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => Alert.alert('Simple Button pressed')}>
                  <Text> Start </Text>
                </TouchableOpacity>
              </Right>
            </ListItem>    
            </Swipeable>        
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
            onPress={() => console.log('hello')}
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
            onPress={() => console.log('hello')}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
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
