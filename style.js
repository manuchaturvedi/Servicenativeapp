const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 20,
  fontWeight: "800",
  marginTop: 15,
  marginBottom: 3,
  marginLeft:20,
  textAlign: 'left',
  color:'#000',
  fontFamily: 'serif',

},
logoTex:{
  color:'#133bb0',
  fontSize:40,
  fontWeight: 'bold',
  padding:15,
  fontFamily: 'serif',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,
  fontFamily: 'serif',


},
loginButton: {
  backgroundColor: '#133bb0',
  borderRadius: 5,
  height: 45,
  width:150,
  marginLeft:20,
  alignItems:'center',
  marginTop: 10,
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
  fontFamily: 'serif',

},
image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center"
},
view:{
  marginTop: 45,
  marginleft:100,
  padding:15,
},
logoTexts:{
  color:'#133bb0',
  fontSize:20,
  fontWeight: "500",
  textAlign:'right',
  fontFamily: 'serif',
},
tinyLogo:{
  flex: 1,
    resizeMode: 'cover',

},
backgroundImage:{
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width:1000,
  height:650,
  opacity: 0.9
},
};
