import React from 'react'
import { View,Text,ImageBackground,Button} from 'react-native'
import Style from './Style'
const App =()=>{
    return(
        <View>
        <ImageBackground source={require('./images/img-1.png')} style={Style.image}>


          <Text style={Style.text}>Php Basics</Text>
          <Text style={Style.text2}>Questions: 60                                 2.00 Min</Text>

          <Text style={Style.text1}>Q13. What is the purpose of constant() function?</Text>
          <Text style={Style.text3}>function will return value</Text>
          <Text style={Style.text4}>function will return value</Text>
          <Text style={Style.text5}>function will return value</Text>
          <Text style={Style.text6}>function will return value</Text>
    <View style={Style.screenContainer}>
      <Button title="Submit" />
    </View>
    
        </ImageBackground>
            
        </View>
    )
}

export default App;