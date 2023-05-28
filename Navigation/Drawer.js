import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddProduct from './AddProduct';
import { StatusBar } from 'react-native';
import ViewProducts from './ViewProducts';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Compo from './Compo';




const Drawer = createDrawerNavigator();

// const handleLogout = ({ navigation }) => {
//     // add your logout logic here
//     navigation.navigate('LoginScreen')

//     // alert('Logout button pressed');
// };


// const LogoutButton = ({ navigation, onPress }) => (
//     <TouchableOpacity onPress={() => handleLogout(navigation)} style={{ marginRight: 20 }}>
//         <MaterialIcons name="logout" size={24} color="white" />
//     </TouchableOpacity>
// );

const MyDrawer = ({ navigation }) => {

    const handleLogout = () => {
        // add your logout logic here
        navigation.goBack()
    };

    const renderLogoutButton = () => {
        return (
            <TouchableOpacity onPress={handleLogout} style={{ marginRight: 20 }}>
                <MaterialIcons name="logout" size={24} color="white" />
            </TouchableOpacity>
        );
    };


    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#132F3F' />
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        width: '50%',
                        marginTop: '14%',
                    },
                    drawerActiveBackgroundColor: '#132F3F',
                    drawerActiveTintColor: 'white',
                    drawerInactiveBackgroundColor: 'white',
                    drawerInactiveTintColor: '#46494c',
                    headerTintColor: 'white',
                    headerRight: renderLogoutButton,

                }}

            >
                <Drawer.Screen
                    name='Add Products'
                    component={AddProduct}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#132F3F',
                        },

                        headerTitle: <Compo />,

                        //, headerLeft: () => (
                        //     <TouchableOpacity onPress={() => alert("Icon pressed!")}>
                        //       <Icon name="ios-menu" size={30} color="#fff" style={{ marginLeft: 10 }} />
                        //     </TouchableOpacity>
                        //   )
                    }}




                />
                <Drawer.Screen
                    name='View Products List'
                    component={ViewProducts}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#132F3F'
                        }

                    }}


                />
            </Drawer.Navigator>
        </>

    )
}

export default MyDrawer

const styles = StyleSheet.create({})