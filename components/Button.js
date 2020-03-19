import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';



export default class Button extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress} >
                    <Text style={styles.button} 
                    > {this.props.title}</Text>
                </TouchableOpacity>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#56C596',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 20,
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      width: 100

    },
    container: {
      flex:1
    },
  });