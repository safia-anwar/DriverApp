//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.


import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    Text,
} from 'react-native';
// import all basic components

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';


import { Logout } from '../Logout';
import { LoginScreen } from '../LoginScreen';

//Import all the screens


import {Verification} from './Pages/Dashboard';
import Screen2 from './Pages/Screen2';
import Screen3 from './Pages/Screen3';
import Screen4 from './Pages/Screen4';
//import Logout from './Pages/Logout';

//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../images/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    First: {
        screen: Verification,
        navigationOptions: ({ navigation }) => ({
            title: 'Dashboard',

            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#93278f',
                height: 100,
                //borderBottomLeftRadius: 70,
                //borderBottomRightRadius: 70,


            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Second Option will be indexed here
    Second: {
        screen: Screen2,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,

            headerStyle: {
                backgroundColor: '#93278f',
                height: 100,
                borderBottomLeftRadius: 70,
                borderBottomRightRadius: 70,
            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Third Option will be indexed here
    Third: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: 'Previous Rides',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#93278f',
                height: 100,
                borderBottomLeftRadius: 70,
                borderBottomRightRadius: 70,
            },
            headerTintColor: '#fff',
        }),
    },
});
const Screen4_StackNavigator = createStackNavigator({
    //All the screen from the Fourth Option will be indexed here
    Fourth: {
        screen: Screen4,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#93278f',
                height: 100,
                borderBottomLeftRadius: 70,
                borderBottomRightRadius: 70,
            },
            headerTintColor: '#fff',
        }),
    },
});

const Logout_StackNavigator = createStackNavigator({
    //All the screen from the Fifth Option will be indexed here
    Logout: {
        screen: Logout,
        // navigationOptions: ({ navigation }) => ({
        //     title: 'Logout',
        //     headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        //     headerStyle: {
        //         backgroundColor: '#93278f',
        //         height: 100,
        //         borderBottomLeftRadius: 70,
        //         borderBottomRightRadius: 70,
        //     },
        //     headerTintColor: '#fff',
        // }),
        navigationOptions: () => {

            return {

                headerShown: false
            }
        }
    },

    // Login:{
    //     screen:LoginScreen,
    //     navigationOptions: () => {

    //         return {

    //             headerShown: false
    //         }
    //     }
    // },
});



//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
    {
        //Drawer Optons and indexing
        NavScreen1: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Dashboard',
            },
        },
        NavScreen2: {
            screen: Screen2_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Profile',
            },
        },
        NavScreen3: {
            screen: Screen3_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Previous Rides',
            },
        },
        NavScreen4: {
            screen: Screen4_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Settings',
            },
         
        },
        NavScreen5:{
            screen: Logout_StackNavigator,
            navigationOptions:{
                drawerLabel: 'Logout'
            }
        }
    },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        contentComponent: CustomSidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 100,
    }
);

const DashboardNavigator = createAppContainer(DrawerNavigatorExample);

export default DashboardNavigator;