
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
  Dimensions,
  SafeAreaView, 
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base'



import header from './images/header.png';


export const OrganizationDetail = (props ) => {

//   const [fullName,setfullName] = useState('');
//   //const [password,setPassword]=useState('');
//   const OrganizationDetail:{
      
//   }

//   const sendCred= async (props)=>{
//      fetch("http://192.168.1.105:3000/signup",{
//        method:"POST",
//        headers: {
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({
//         "email":email,
//         "password":password
//       })
//      })
//      .then(res=>res.json())
//      .then(async (data)=>{
//             try {
//               await AsyncStorage.setItem('token',data.token)
//               props.navigation.replace("home")
//             } catch (e) {
//               console.log("error found",e)
//             }
//      })
//   }
  return (

    
     <View style={styles.container}>
        <StatusBar barStyle="light-content" />
     
          {/* <View style={styles.header}>
              <ImageBackground
                source={header}
                style={styles.imageBackground}
              >
                <Text style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:20,
                  marginTop:-100
                }}>Organization Detail</Text>
               

              </ImageBackground>
          </View> */}

           <SafeAreaView style={styles.footer}>
            <ScrollView style={styles.scrollView}>
                    <KeyboardAvoidingView>
               <View style={{justifyContent:"center" }}>

               <Text style={{color:'#415bca',
                  fontWeight:'bold',
                  fontSize:30,marginLeft:30,marginRight:35,marginTop:5}}>Organization Detail</Text>

               </View>
 
              <TextInput
                  label='Enter your Full Name'
                  mode="outlined"
                 //value={email}
                 style={{marginLeft:18,marginRight:18,marginTop:3, 
                   }}
                    theme={{colors:{primary:"blue"}}}
               //onChangeText={(text)=>setEmail(text)}
                            
                  />                         
                       

           <TextInput
             label='Enter your Organization ID'
             mode="outlined"
            secureTextEntry={true}
            //value={password}
            //onChangeText={(text)=>{setPassword(text)}}
            style={{marginLeft:18,marginRight:18,marginTop:10
            }}
            theme={{colors:{primary:"blue"}}}
     
           />

           <TextInput
             label='Enter your Department'
             mode="outlined"
            secureTextEntry={true}
            //value={password}
            //onChangeText={(text)=>{setPassword(text)}}
            style={{marginLeft:18,marginRight:18,marginTop:10
            }}
            theme={{colors:{primary:"blue"}}}
     
           />
           <TextInput
             label='Enter your Faculty'
             mode="outlined"
            secureTextEntry={true}
            //value={password}
            //onChangeText={(text)=>{setPassword(text)}}
            style={{marginLeft:18,marginRight:18,marginTop:10
            }}
            theme={{colors:{primary:"blue"}}}
     
           />
             <TextInput
             label='Enter your Contact Number'
             mode="outlined"
            secureTextEntry={true}
            //value={password}
            //onChangeText={(text)=>{setPassword(text)}}
            style={{marginLeft:18,marginRight:18,marginTop:10
            }}
            theme={{colors:{primary:"blue"}}}
     
           />

           </KeyboardAvoidingView>
           </ScrollView>
           </SafeAreaView>
      
           {/* <Button 
              mode="contained"
             style={{marginLeft:18,marginRight:18,marginTop:35,borderRadius:100,paddingVertical:10,backgroundColor:"#6B00D7"
            }}
              onPress={() => sendCred(props)}>
               Signup
            </Button> */}
{/* 
       <TouchableOpacity>
         <Text
            style={{
             fontSize:18,marginLeft:55,marginTop:5,color:"purple"
         }}
             onPress={()=>props.navigation.replace("login")}
           >Already have an account?</Text>
      </TouchableOpacity> */}

       
          </View>



      

    

   
  );
};



//export default SignupScreen;
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
    marginTop:5
  },
  scrollView: {
    backgroundColor: '#eaedf9',
    marginHorizontal: 0,
    borderRadius:50
  },
});

