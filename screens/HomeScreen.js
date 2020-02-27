import * as React from 'react';
import { SafeAreaView, Platform, StyleSheet, View, FlatList, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function HomeScreen() {
  //onActionPress = () => console.log("You have clicked on the action option")

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <List>
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left>
                <Text>Simon Mignolet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
  
          </List>

          
      </ScrollView>
    </View>
  );
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
});
