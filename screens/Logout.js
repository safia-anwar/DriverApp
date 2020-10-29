
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  Text,
  BackHandler,
  ImageBackground,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import user from './images/user.jpg'
//import DashboardNavigator from "./Dashboard/DashboardNavigator";
//import { LoginScreen } from "./LoginScreen";

export const Logout = (props ) => {
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
  
  //console.log(props);
  const logout = ( )=>{
       AsyncStorage.removeItem("token").then(()=>{
       console.log("working");
       //props.navigation.navigate("Login");
       BackHandler.exitApp();
    })

 }


  return (
   <> 
      <View style={{flex:1,marginTop:70}}>
       <Image source={user} style={{flex:1,justifyContent:'center',alignItems:'center',
        borderRadius: 100,width:"100%",height:"100%",resizeMode: 'center'}}>
        
        </Image>
     </View>
    <View style={{flex:2}}>
      <Text style={{fontSize:28,marginTop:10,marginLeft:100,marginRight:100,color:"blue"}}>Thank You!</Text>
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18,borderRadius:100,paddingVertical:10,backgroundColor:"#6B00D7"}}
         onPress={() => logout()}>
        Logout
      </Button>
    </View>
    
     
      
      
     
  

   </>
  );
};



//export default HomeScreen;
