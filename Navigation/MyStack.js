import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../Screens/Splash'
import LoginScreen from '../Screens/LoginScreen'
// import ForgotPassword from '../Screens/ForgotPassword'
// import ResetPassword from '../Screens/ResetPassword'
// import OnBoard from './OnBoard'
import MyDrawer from './Drawer'
// import WorkmenDrawer from './WorkmenDrawer'


//These is Because To eliminate the error as these will utilize the  component when needed 
// const WorkmenDrawer = React.lazy(()=>import('./WorkmenDrawer'))

const Stack = createStackNavigator();


const MyStack = ({ navigation }) => {

  
  return (
    <Stack.Navigator
    // screenOptions={{
    //     cardStyleInterpolator: ({ current: { progress }, layouts: { screen } }) => {
    //       return {
    //         cardStyle: {
    //           transform: [
    //             {
    //               translateX: progress.interpolate({
    //                 inputRange: [0, 1],
    //                 outputRange: [screen.width, 0],
    //               }),
    //             },
    //           ],
    //         },
    //       };
    //     },
    // }} //for Slide Animation
    >
      <Stack.Screen name='Splash'
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='MyDrawer'
        component={MyDrawer}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}

export default MyStack

const styles = StyleSheet.create({

})