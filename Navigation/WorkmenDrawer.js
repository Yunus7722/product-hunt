import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkmenOnBoard from './WorkmenOnBoard';
import { StatusBar } from 'react-native';
import Employees from './Employees';
import { Image } from 'react-native';
import Icon from '@expo/vector-icons';
import Compo from './Compo';
import JobDetails from './JobDetails';
import { WorkOnBoardStack } from './MyStack';



const Drawer = createDrawerNavigator();

const WorkmenDrawer = () => {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        width: 200,
                        marginTop: 57,
                    },
                    drawerActiveBackgroundColor: '#05375a',
                    drawerActiveTintColor: 'white',
                    drawerInactiveBackgroundColor: 'white',
                    drawerInactiveTintColor: '#46494c',
                    headerTintColor: 'white'

                }}

            >
                <Drawer.Screen
                    name='WorkOnBoardStack'
                    component={WorkOnBoardStack}
                    options={{
                        title: 'Workmen-OnBoard',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#132F3F',
                        },

                        headerTitle: <Compo />
                        //, headerLeft: () => (
                        //     <TouchableOpacity onPress={() => alert("Icon pressed!")}>
                        //       <Icon name="ios-menu" size={30} color="#fff" style={{ marginLeft: 10 }} />
                        //     </TouchableOpacity>
                        //   )
                    }}




                />
                <Drawer.Screen
                    name='Employees'
                    component={Employees}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#132F3F'
                        }

                    }}


                />

                {/* <Drawer.Screen
                    name='JobDetail'
                    component={JobDetails}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#132F3F'
                        }

                    }}


                /> */}
            </Drawer.Navigator>
        </>

    )
}

export default WorkmenDrawer

const styles = StyleSheet.create({})