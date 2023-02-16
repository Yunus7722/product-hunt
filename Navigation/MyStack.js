import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../Screens/Splash'
import LoginScreen from '../Screens/LoginScreen'
import ForgotPassword from '../Screens/ForgotPassword'
import ResetPassword from '../Screens/ResetPassword'
// import OnBoard from './OnBoard'
import MyDrawer from './Drawer'
// import WorkmenDrawer from './WorkmenDrawer'
import AdminDrawer from './AdminDrawer'
import JobDetails from './JobDetails'
import WorkmenOnBoard from './WorkmenOnBoard'
import PersonalDetails from './PersonalDetails'
import PersonalDetails2 from './PersonalDetails2'
import PersonalDetails3 from './PersonalDetails3'
import PresentAddress from './PresentAddress'
import PermanentAddress from './PermanentAddress'
import JobDetails2 from './JobDetails2'
import JobDetails3 from './JobDetails3'
import WageDetails from './WageDetails'
import UploadDocuments from './UploadDocuments'
import Summary from './Summary'

//These is Because To eliminate the error as these will utilize the  component when needed 
const WorkmenDrawer = React.lazy(()=>import('./WorkmenDrawer'))

const Stack = createStackNavigator();

const WoStack = createStackNavigator();

export const WorkOnBoardStack = ({ navigation }) => {
  return (
    <WoStack.Navigator
       screenOptions={{
        cardStyleInterpolator: ({ current: { progress }, layouts: { screen } }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
    }} //for Slide Animation
    >
      <WoStack.Screen
        name='WorkmenOnBoard'
        component={WorkmenOnBoard}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='JobDetails'
        component={JobDetails}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='PersonalDetails'
        component={PersonalDetails}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='PersonalDetails2'
        component={PersonalDetails2}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='PersonalDetails3'
        component={PersonalDetails3}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='PresentAddress'
        component={PresentAddress}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='PermanentAddress'
        component={PermanentAddress}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='JobDetails2'
        component={JobDetails2}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='JobDetails3'
        component={JobDetails3}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='WageDetails'
        component={WageDetails}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='UploadDocuments'
        component={UploadDocuments}
        options={{ headerShown: false }}
      />
       <WoStack.Screen
        name='Summary'
        component={Summary}
        options={{ headerShown: false }}
      />
       {/* <WoStack.Screen
        name='JobDetails'
        component={JobDetails}
        options={{ headerShown: true }}
      /> */}
    </WoStack.Navigator>
  )
}

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
      <Stack.Screen name='ForgotPassword'
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='ResetPassword'
        component={ResetPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='MyDrawer'
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='WorkmenDrawer'
        component={WorkmenDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='AdminDrawer'
        component={AdminDrawer}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='JobDetails' 
        component={JobDetails}  
        options={{ headerShown:true}} 
        /> */}


    </Stack.Navigator>
  )
}

export default MyStack

const styles = StyleSheet.create({

})