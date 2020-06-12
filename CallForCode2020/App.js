import * as React from 'react';

import {AsyncStorage, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import NewsInfo from './src/screens/NewsInfoScreen';
import ItemsInfo from './src/screens/ItemsInfoScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import StartScreen from './src/screens/StartScreen';

import DescScreen from './src/screens/Auths/DescScreen';
import CameraScreen from './src/screens/Auths/CameraScreen';

import CommonDataManager from "./src/singleton/CommonDataManager"

let commonData = CommonDataManager.getInstance();
let _isAutoLogin = commonData._isAutoLogin;
//초기에 시작시 로그인이 체크
 function login(){
  return _isAutoLogin;
}

class FirstScreenClass extends React.Component{
    constructor() {
      super()
      this.state = {imgUrl : "" , loginState : false}
   }
  
   render() {
    return (
       <Stack.Navigator  screenOptions={{ headerShown: false}}>
       {this.state.loginState == false ? <Stack.Screen name="Login" component={LoginScreen}/> : null}
       <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
        <Stack.Screen name="ItemsInfo" component={ItemsInfo}/>
        <Stack.Screen name="NewsInfo" component={NewsInfo}/>
        <Stack.Screen name="DescScreen" component={DescScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CameraScree" component={CameraScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
      </Stack.Navigator>
    );
   }
  }



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
        <FirstScreenClass/>
    </NavigationContainer>
  );
}
