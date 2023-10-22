import { View, Text,Pressable, StyleSheet } from 'react-native'
import React from 'react'

const MyPressableButton = (prop) => {
  return (
    <Pressable
    style={({pressed})=>[{backgroundColor:pressed ? '#cce' : '#daf'},styles.pressableButton,prop.myStyle]}
    onPress={()=>{prop.handleClick();}}
    android_ripple={{color:'#ffff55'}}
    >
      <View style={styles.view}>
       <Text style={[styles.text,prop.textStyle]}>{[prop.text]}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressableButton:{
        width:150,
        height:50,
        borderColor:'#67EE54',
        justifyContent:'center',
        alignItems:'center',
        padding:1,
      },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        margin:1,
      },
      text: {
        color:'#000000',
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
      },
})

export default MyPressableButton