// export const logout =(props)=>{
//       AsyncStorage.removeItem("token").then(()=>{
//         props.navigation.replace("login")
//       })
//    }


//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
// import all basic components

export default class Logout extends Component {
  //Screen2 Component
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Are you sure? You want to Logout </Text>

        <Button 
            mode="contained"
            style={{marginLeft:18,marginRight:18,marginTop:18}}
             onPress={() => this.props.navigation.replace("login")}>
        logout
      </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
    
  },
});