import React, { useState } from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';
import String from '../constants/String';
import { Icon } from '@rneui/themed';
import Color from '../constants/Color';
import CheckBox from 'react-native-check-box'

export function UserAgreementScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(true);
    const [isChecked, setIsChecked] = useState(false)
    return (
        <>
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            navigation.goBack();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView>
                <Text style={styles.modalText}>{String.loremipsumtext}</Text>
              </ScrollView>
              <View style={styles.inline}>
                <CheckBox
                    onClick={()=>{
                        setIsChecked(!isChecked)
                    }}
                    isChecked={isChecked}
                    rightText=""
                />
                <View>
                <Text style={styles.text}>{String.TAC}</Text>
                </View>
              </View>
              <Pressable
                disabled={!isChecked}
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    navigation.navigate({
                        name: String.Screen.HomeScreen,
                        params: { isChecked: isChecked.toString() },
                        merge: true,
                    });
                    setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      </>
    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 12,
      elevation: 2,
      margin:15,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text: {
      marginLeft:15,
      backgroundColor:Color.White,
      fontSize:12,
      color: 'black',
      fontWeight: 'bold',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    inline:{
        flexDirection:'row',
        marginTop:20,
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    }
  });

export default UserAgreementScreen
