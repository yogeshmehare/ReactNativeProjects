import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../constants/Color'

const MyHeader = (props) => {
  return (
    <View style={styles.view1}>
      <Text style={styles.titleText}>{props.headerName}</Text>
    </View>
  )
}

export default MyHeader

const styles = StyleSheet.create({
  titleText:{
    fontSize:30,
    fontWeight:'600',
    color:Color.WhiteChocolate,  
    padding:10,
  },
  view1:{
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:Color['Red Wine or Wine Red'],
  }
})