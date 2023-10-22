import { StyleSheet } from 'react-native'
  
 const myStyles = StyleSheet.create({   
   container: {                       
     marginTop: 150,
     backgroundColor: '#ededed',
     flexWrap: 'wrap'
   },
   body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 })
  
 const buttons = StyleSheet.create({  
   primary: {                         
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   }
 })
  
 export { myStyles, buttons }           
  