/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Modal, Text, View,StyleSheet, Image } from 'react-native';
import Color from '../constants/Color';
import MyPressableButton from './MyPressableButton';
import { Icon } from '@rneui/themed'; 
import String from '../constants/String';

const MyModal = (prop) => {

  // console.warn(prop)

    return (
        <Modal visible={prop.MyModalodalVisible} transparent animationType='fade' onRequestClose={()=>prop.setMyModalodalVisible(false)}>
          <View style={styles.body}>
          <View style={styles.modal_title}>
            <Text style={styles.titleText}>{prop.type}</Text>
          </View>
          <View style={styles.modal_text}>
            {(prop.type===String.success)
            ?
            <Icon
              name='checkmark-circle'
              type='ionicon'
              color='#517fa4'
              size={30}
              style={{padding:5,}}              
            /> 
            :
            <Icon
              name='error'
              type='materialicon'
              color={Color.OrangeGold}
              size={30}
              style={{padding:5,}}              
            />
            }
            <Text style={styles.text}>{prop.text}</Text>
          </View>
          <MyPressableButton myStyle={{
              backgroundColor:(prop.text===String.success)?Color.AlgaeGreen:Color.LightGoldenRodYellow,
              width:300,
              height:50,
              borderWidth:0.5,
              borderColor:Color.Black,
              borderBottomStartRadius:5,
              borderBottomEndRadius:5,
            }} 
            handleClick={()=>prop.handleSubmitClick()}
            text="OK"
          />
          </View>
        </Modal>
    );
  }

export default MyModal;



const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00000080'
  },
  titleText:{
    fontSize:20,
    fontWeight:'600',
    color:Color.Black  
  },
  text:{
    fontSize:18,
    fontWeight:'800',
    textAlign:'center',
    color:Color.ViolaPurple,
  },
  modal_title:{
    backgroundColor:Color.Yellow,
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:50,
    borderWidth:0.5,
    borderColor:Color.Black,
    borderTopStartRadius:5,
    borderTopEndRadius:5,
  },
  modal_text:{
    backgroundColor:Color.White,
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:150,
    borderWidth:0.2,
  },
});
