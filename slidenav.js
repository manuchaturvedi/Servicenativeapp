import * as React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screen/HomeScreen';
import DetailsScreen from './Screen/DetailsScreen';

const Drawer = createDrawerNavigator();
const HomeStack=createStackNavigator();
const DetailsStack=createStackNavigator();
 const HomeStackScreen = ({navigation})=>(
  <HomeStack.Navigator ScreenOptions={{
          headerStyle:{
            backgroundColor:'#542',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            color:'#fff'
          }

        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Overview',
          headerLeft:()=>(
           <Icon.Button  size={25} padding={10} margin={1}
           backgroundColor='blue' onPress={()=>navigation.openDrawer()}>
           </Icon.Button>
          )

        }} />
      </HomeStack.Navigator>
 );

 const DetailsStackScreen = ({navigation})=>(
  <DetailsStack.Navigator ScreenOptions={{
          headerStyle:{
            backgroundColor:'#542',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            color:'#fff'
          }

        }}>
        <DetailsStack.Screen name="Detail" component={DetailsScreen} options={{

        }} />
      </DetailsStack.Navigator>
 );
const Slidenav=()=>{
  return(
    <NavigationContainer>
     
       <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Slidenav;
