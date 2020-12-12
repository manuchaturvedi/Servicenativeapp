import React, { Component } from "react";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert,Image, KeyboardAvoidingView, ImageBackground,AsyncStorage} from 'react-native';
import { Button } from 'react-native-elements';
import GlobalFont from 'react-native-global-font'
const appId = "1047121222092614"
const userInfo={username:'admit',password:'pass12'}
export default class LoginScreen extends Component {

  constructor(props)
  {super(props);
   this.state={
     username:'',
     password:''
   }
  }

 
  render() {
    return (
      
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     
        <View style={styles.loginScreenContainer}>
        
          <View style={styles.loginFormView}>
          <Image
        style={styles.backgroundImage}
        source={require('./pic/background.png')}
      />
          <Text style={styles.logoTex}>SERVICE BOOKING SYSTEM 1.0</Text>
          <Text style={styles.logoText}>AGENT ID.</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(username)=>this.setState({username})}
            value={this.state.username}
            autoCapitalize="none" />
            <Text style={styles.logoText}>PASSWORD.</Text>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb"
             style={styles.loginFormTextInput} 
             secureTextEntry={true}
             value={this.state.password}
             onChangeText={(password)=>this.setState({password})}
             />
            <Button
              buttonStyle={styles.loginButton}
              onPress={this._login}
              title="Login"
            />
            <View style={styles.view}>
            <Text style={styles.logoTexts}>Powered By:</Text>
                     <Text style={styles.logoTexts}>NCS TECHNOLOGIES</Text>
                     <Text style={styles.logoTexts}>NEW MANDI,MZN</Text>
            </View>
                     

          </View>
        </View>

      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    )
  }

  componentDidMount() {
    let fontName = 'AbrilFatface-Regular'
    GlobalFont.applyGlobal(fontName)  
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
  _login=async()=>{
    if(userInfo.username===this.state.username && userInfo.password===this.state.password)
       {
        //await AsyncStorage.setItem('isLoggedIn','1')
       //this.props.navigation.navigate('Details')
        alert('logged In');
       }
     else
     {alert('Username or Password is incorrect');
  }}
  
    }

