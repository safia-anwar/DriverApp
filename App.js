
import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Button ,TextInput} from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignupScreen } from './screens/SignupScreen';
import { LoginScreen } from './screens/LoginScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { Logout } from './screens/Logout';
import { OrganizationDetail } from "./screens/OrganizationDetail";
import { VehicleDetail } from "./screens/VehicleDetail";
import { ProgressBar } from "./screens/UserDetailProgressBar";
import AsyncStorage from '@react-native-community/async-storage';

import DrawerNavigatorExample from "./screens/Dashboard/DashboardNavigator";


//const Stack = createStackNavigator();

export default function App() {

  const [isloggedin,setLogged] = useState(null)

      const detectLogin= async ()=>{
       const token = await AsyncStorage.getItem('token')
      if(token){
            setLogged(true)
           }else{
            setLogged(false)
          }
        }
  useEffect(()=>{
     detectLogin()
  },[])

  return(

    //   <NavigationContainer>
    //   <Stack.Navigator initialRouteName="loading"
    //      screenOptions={{
    //       headerShown: false
    //     }}>
    //     <Stack.Screen name="loading" component={LoadingScreen}/>
    //     <Stack.Screen name="home" component={HomeScreen} />
    //     <Stack.Screen name="login" component={LoginScreen}/>
    //     <Stack.Screen name="signup" component={SignupScreen} />
    //     <Stack.Screen name="logout" component={Logout} />
    //     <Stack.Screen name="userdetail" component={UserDetail} />

    //   </Stack.Navigator>
    // </NavigationContainer>

    <ProgressBar/>
     
  );
  
}


