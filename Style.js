import { StyleSheet } from 'react-native';
import { color, greaterThan } from 'react-native-reanimated';

const Style = StyleSheet.create({


  text: {
    
    fontFamily:'Roboto',
    left:30,
    top:40,
    fontSize:24,
    color:'white',
    fontWeight:'500',
    lineHeight:28.13
    
  
  },

image: {
    position:'absolute',
    width:358,
    height: 640,
    top:50,
    left:25,
    borderRadius:52,
    resizeMode: "cover"
    
    
    
    
},
rectangle:{
  color:'#6f98aa',
  height: 88,
  width: 358,
  borderRadius:101,

},

text1:{
height: 108,
width: 265,
left: 30,
top: 150,
fontFamily:'Roboto',
fontSize: 24,
color:'#ffffff',
fontWeight:'500',
lineHeight:28.13

},
text2:{
height: 25,
width: 390,
left: 30,
top: 100,
fontFamily:'Roboto',
fontSize:18,
lineHeight:21.09,
color:'#ffffff',
fontWeight:'300'

},
text3:{
height: 29,
width: 230,
left: 80,
top: 150,
fontFamily:'Roboto',
fontWeight:'700',
fontSize:18,
lineHeight:21.09,
color:'#ffffff'

},
text4:{
height: 29,
width: 230,
left: 80,
top:170,
fontFamily:'Roboto',
fontWeight:'700',
fontSize:18,
lineHeight:21.09,
color:'#ffffff'
},
text5:{
  height: 29,
width: 230,
left: 80,
top: 190,
fontFamily:'Roboto',
fontWeight:'700',
fontSize:18,
lineHeight:21.09,
color:'#ffffff'
},
text6:{
  height: 29,
width: 230,
left: 80,
top: 210,
fontFamily:'Roboto',
fontWeight:'700',
fontSize:18,
lineHeight:21.09,
color:'#ffffff'
},

screenContainer: {
flex: 1,
justifyContent: "center",
padding: 16,
height: 44,
width: 161,
left: 95,
top: 100,
borderRadius:11,
borderColor:'#07d0f4',
lineHeight:19.92,

}



});

export default Style;