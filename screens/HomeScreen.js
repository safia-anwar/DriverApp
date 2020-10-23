
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DashboardNavigator from "./Dashboard/DashboardNavigator";

export const HomeScreen = (props) => {
   const [email,setEmail] = useState("loading")
   const Boiler = async ()=>{
      const token = await AsyncStorage.getItem("token")
    fetch('http://192.168.1.103:3000/',{
    headers:new Headers({
      Authorization:"Bearer "+token
    })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      setEmail(data.email)
    }
    )
   }
useEffect(()=>{
   Boiler()
},[])
  
  // export const logout =(props)=>{
//       AsyncStorage.removeItem("token").then(()=>{
//         props.navigation.replace("login")
//       })
//    }


  return (
   <> 

      {/* <Text style={{fontSize:18}}>your email is {email}</Text>
    <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
         onPress={() => logout(props)}>
        logout
      </Button>
     */}
    <DashboardNavigator/>

   </>
  );
};



//export default HomeScreen;
