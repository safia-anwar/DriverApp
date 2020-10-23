import React,{useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';



import woologo from './images/woologo.png';

export const LoadingScreen = (props) => {
  
    const detectLogin= async ()=>{
    const token = await AsyncStorage.getItem('token')
        if(token){
              props.navigation.replace("home")
        }else{
             
               setTimeout(() => {
                  props.navigation.replace("login")
               }, 2000);
            
               
        }
  }
  useEffect(()=>{
   detectLogin()
  },[])

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#3E00B3', '#6B00D7', '#A230ED', '#C364FA', '#D391FA']}
          style={styles.gradient}>
          <View>
            <Image source={woologo} />
          </View>

          <ActivityIndicator size="large" color="white" style={{ margin: 10 }} />
        </LinearGradient>


      </View>
  );


};



var styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gradient:
  {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
  }

}); 
