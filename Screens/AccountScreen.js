import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import String from '../constants/String';
import Color from '../constants/Color';
import MyPressableButton from '../components/MyPressableButton';
import { myStyles } from '../constants/Styles';
import MyHeader from '../components/MyHeader';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from './HomeScreen';
import UserAgreementScreen from './UserAgreementScreen';
import ProductScreen from './ProductScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationScreen from './NotificationScreen';


export default function AccountScreen({route,navigation}) {

    const {id,name} = route.params;
    // console.warn(id,name)
  const Tab = createMaterialBottomTabNavigator();


    function handleNavigateToScreenClick() {
      navigation.goBack()
    }
  
    return (
      <>
      <MyHeader headerName="AccountScreen"/>
      <Tab.Navigator barStyle={{ backgroundColor: '#1df' }} activeColor={Color.AztechPurple} inactiveColor={Color.Black}>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Product" component={ProductScreen} 
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen} 
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
          tabBarBadge:4,
        }}
        />
    </Tab.Navigator>
      {/* <View style={myStyles.body}>
      <MyPressableButton text="Go to HomeScreen" handleClick={()=>handleNavigateToScreenClick()} myStyle={{margin:2,width:220,height:50,padding:5,borderRadius:15,backgroundColor:Color.PineGreen}} textStyle={{color:Color.white}}/>
      </View> */}
      </>
    );
  }