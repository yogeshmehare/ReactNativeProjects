import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyModal from '../components/MyModal';
import MyHeader from '../components/MyHeader';
import String from '../constants/String';
import Color from '../constants/Color';
import MyPressableButton from '../components/MyPressableButton';
import { myStyles } from '../constants/Styles';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class User {
    constructor(name,id,age) {
      this.name = name;
      this.id = id;
      this.age = age;
    }
  }

export function HomeScreen({navigation,route}) {

    const [li, setli] = useState(Array.from(Array(5)));
    const [refreshing, setRefreshing] = useState(false);
    const [users, setUsers] = useState([{title:'emp_1_5', data:[new User('Yo',1,25),new User('Che',2,20)]},{title:'emp_6_10', data:[new User('Yo',1,25),new User('Che',2,20)]}]);
    const [MyModalodalVisible, setMyModalodalVisible] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

    useEffect(() => {
        // console.warn(route.params?.post)

          if (route.params?.isChecked) {
              // Post updated, do something with `route.params.post`
              // For example, send the post to the server
              console.warn(route.params?.isChecked)
          }
          if(route.params?.userEmail)
            setUserEmail(route.params?.userEmail)
          if(route.params?.userPassword)
            setUserPassword(route.params?.userPassword)
          // setUserName(navigation.getParam(userName,"hi"))
          // setUserPassword(navigation.getParam(userPassword,"hi"))
    }, [route.params?.isChecked,route.params?.UserEmail,route.params?.userPassword])
  
    function handleNavigateToScreenClick() {
      navigation.navigate(String.Screen.AccountScreen,{id:1,name:'Yogesh'})
    }

    function handleSubmitClick() {
        // Alert.alert("Warning","submit button clicked",[
        //   {text:'ok',onPress:()=>{console.warn("ok pressed")}},
        //   {text:'cancel',onPress:()=>{console.warn("cancel pressed");
        // ToastAndroid.showWithGravityAndOffset("cancelled toast",ToastAndroid.SHORT,ToastAndroid.TOP,100,100)}},
        // ],{cancelable:true,onDismiss() {
        //     console.warn("alert cancelled")
        // },})
        setMyModalodalVisible(true);
    }
    
    function handleOk() {
      console.warn("ok")
      setMyModalodalVisible(false);
    }

    function handleNavigateToUserAgreementScreenClick() {
      navigation.navigate(String.Screen.UserAgreementScreen)
    }
    
  
    function handleNavigateToLoginScreenClick() {
      navigation.navigate(String.Screen.LoginScreen)
    }
    
  
    return (
      <>
      <MyHeader headerName="React Native"/>
      <View style={myStyles.body}>
        <AntdesignIcon name="verticleleft" size={30} color="#900" />
        <EvilIcons name="sc-facebook" size={50} color="#3b5998" />
        {/* <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </Icon.Button> */}
      <MyModal text={String.dataSubmitSuccess} type={String.success} MyModalodalVisible={MyModalodalVisible} setMyModalodalVisible={(prop)=>{setMyModalodalVisible(prop)}} handleSubmitClick={()=>handleOk()}/>
      <MyPressableButton text="Submit" handleClick={()=>handleSubmitClick()}/>
      <MyPressableButton text="Go to Account Screen" handleClick={()=>handleNavigateToScreenClick()} myStyle={{margin:2,width:220,height:50,padding:5,borderRadius:15,backgroundColor:Color.PineGreen}} textStyle={{color:Color.white}}/>
      <MyPressableButton text="Go to UserAgreementScreen" handleClick={()=>handleNavigateToUserAgreementScreenClick()} myStyle={{margin:2,width:220,height:70,padding:5,borderRadius:15,backgroundColor:Color.PineGreen}} textStyle={{color:Color.white}}/>
      <MyPressableButton text="Go to Login Screen" handleClick={()=>handleNavigateToLoginScreenClick()} myStyle={{margin:2,width:220,height:70,padding:5,borderRadius:15,backgroundColor:Color.PineGreen}} textStyle={{color:Color.white}}/>
      <Text>Checked : {route.params?.isChecked}</Text>
      <Text>UserEmail : {userEmail}</Text>
      <Text>Password : {userPassword}</Text>
      <>
      {/*
      // <SectionList
      //    sections={users}
      //    renderItem={(user)=>{
      //     return (
      //             <Text style={styles.text1}>{user.item.name}</Text>
      //         );
      //    }}
      //    renderSectionHeader={(user)=>{
      //     return (
      //           <View style={styles.view1}>
      //             <Text style={styles.text1}>{user.section.title}</Text>
      //           </View>
      //         );
      //    }}

      // />

      // <FlatList data={li}
      // renderItem={(item=>{
      //   return (
      //     <View style={styles.view1}>
      //       <Text style={styles.text1}>{item.index}</Text>
      //     </View>
      //   );
      // })}
      // refreshControl={
      //   <RefreshControl
      //     refreshing={refreshing}
      //     onRefresh={ () => {
      //       setRefreshing(true);
      //       setli([...li,Math.random() * 10]);
      //       setRefreshing(false);
      //       }
      //     }
      //     colors={['#67EE54']}
      //   />
      // }
      // />



    //   <ScrollView
    //    horizontal={false}
    //    refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={ () => {
    //         setRefreshing(true);
    //         [...li,Array.from(Array(21,30).keys())];
    //         setRefreshing(false);
    //       }
    //       }
    //       />}
    //    >
    //     {
    //       li.map((_num) => {
    //         return (
    //           <View style={styles.view1}>
    //             <Text style={styles.text1}>{_num}</Text>
    //           </View>
    //         );
    //       })
    //     }
    // </ScrollView>
    */}</>
    </View>
      </>
    );
  }