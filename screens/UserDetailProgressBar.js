
import React from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
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
import { OrganizationDetail } from "./OrganizationDetail";
import { VehicleDetail } from "./VehicleDetail";


export const ProgressBar = (props) =>{
    return(

             <View style={{flex: 1}}>
        <ProgressSteps>
            <ProgressStep label="First Step" progressBarColor={styles.Change}  nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle}>
                <View style={{ alignItems: 'center'}}>
                    <OrganizationDetail/>
                </View>
            </ProgressStep>
            <ProgressStep label="Second Step" progressBarColor={styles.Change} nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle}>
                <View style={{ alignItems: 'center' }}>
                    <VehicleDetail/>
                </View>
            </ProgressStep>
        </ProgressSteps>
         </View>
    )
}



var styles = StyleSheet.create({

buttonTextStyle:{
    color: '#393939'
},
Change:{
    color:"#eaedf9"
}

})