import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnBoard from './OnBoard';
import { StatusBar } from 'react-native';
import Organisation from './Organisation';
import { Image } from 'react-native';
import  Icon  from '@expo/vector-icons';
import Compo from './Compo';



const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <>
        <StatusBar barStyle='light-content'   />
        <Drawer.Navigator
        screenOptions={{
            drawerStyle:{
                width:150,
                marginTop:57,
            },
            drawerActiveBackgroundColor:'#05375a',
            drawerActiveTintColor:'white',
            drawerInactiveBackgroundColor:'white' ,
            drawerInactiveTintColor:'#46494c' ,
            headerTintColor:'white'
            
        }}
        
        >
            <Drawer.Screen
                name='OnBoard'
                component={OnBoard}
                options={{
                    headerShown:true,
                    headerStyle:{
                        backgroundColor:'#132F3F',
                    },
                    
                    headerTitle:<Compo/>
                    //, headerLeft: () => (
                    //     <TouchableOpacity onPress={() => alert("Icon pressed!")}>
                    //       <Icon name="ios-menu" size={30} color="#fff" style={{ marginLeft: 10 }} />
                    //     </TouchableOpacity>
                    //   )
                }}
                


                
            />
             <Drawer.Screen
                name='Organisation'
                component={Organisation}
                options={{
                    headerShown:true,
                    headerStyle:{
                        backgroundColor:'#132F3F'
                    }
                    
                }}
                
                
            />
        </Drawer.Navigator>
        </>

    )
}

export default MyDrawer

const styles = StyleSheet.create({})