
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import DashboardNavigator from "./Dashboard/DashboardNavigator";

export const Logout = (props) => {
   const [email,setEmail] = useState("loading")
   const Boiler = async ()=>{
   const token = await AsyncStorage.getItem("token")
    fetch('http://192.168.1.105:3000/',{
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
  
  const logout =( )=>{
       AsyncStorage.removeItem("token").then(()=>{
       this.props.navigation.replace("login")
    })

 }


  return (
   <> 

      <Text style={{fontSize:12}}>You want to Logout?</Text>
    <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
         onPress={() => logout()}>
        Logout
      </Button>
     
  

   </>
  );
};



//export default HomeScreen;
