import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Dimensions
  
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';



import header from './images/header.png';



export const LoginScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  
  
  const sendCred = async (props)=>{
    fetch("http://192.168.1.105:3000/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             props.navigation.replace("home")
           } catch (e) {
             console.log("error:",e)
              Alert(e)
           }
    })
 }

 console.log(props);

  return ( 
    <>
    
     <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.header}>
              <ImageBackground
                source={header}
                style={styles.imageBackground}
              >
                <Text style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:30,
                  marginTop:-100
                }}>Login as Driver</Text>
               

              </ImageBackground>
          </View>

          <View style={styles.footer}>

             <TextInput
             label='Enter your Email'
             mode="outlined"
             value={email}
             style={{marginLeft:18,marginRight:18,marginTop:18
              }}
              theme={{colors:{primary:"purple"}}}
              onChangeText={(text)=>setEmail(text)}
     
           />

           <TextInput
             label='Enter your Password'
             mode="outlined"
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
            style={{marginLeft:18,marginRight:18,marginTop:18
            }}
            theme={{colors:{primary:"purple"}}}
     
           />
           
           <Button 
              mode="contained"
             style={{marginLeft:18,marginRight:18,marginTop:35,borderRadius:100,paddingVertical:10,backgroundColor:"#6B00D7"
            }}
              onPress={() => sendCred(props)}>
               Login
            </Button>

       <TouchableOpacity>
         <Text
            style={{
             fontSize:18,marginLeft:55,marginTop:5,color:"purple"
         }}
             onPress={()=>props.navigation.replace("signup")}
           >dont have a account?</Text>
      </TouchableOpacity>

          
          </View>



      </View>

    
   </>
   
  );
};


var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    marginTop:-9
  },
  header: {
    flex:1,
  },
  imageBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 100,
    width:'100%',
    height:'100%',

  },

  footer:{
    flex:2,
    padding:18,
    marginTop:1
  }
});





//export LoginScreen;



