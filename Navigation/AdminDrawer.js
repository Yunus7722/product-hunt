import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contractor from './Contractor';
import { StatusBar } from 'react-native';
import MyOrganisation from './MyOrganisation';
import { Image } from 'react-native';
import  Icon  from '@expo/vector-icons';
import Compo from './Compo';
import PfReport from './PfReport';
import EsiReport from './EsiReport';
import Dashboard from './Dashboard';



const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
    return (
        <>
        <StatusBar barStyle='light-content'   />
        <Drawer.Navigator
        screenOptions={{
            drawerStyle:{
                width:200,
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
                name='Contractor'
                component={Contractor}
                options={{
                    title:'Contractor',
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
                name='MyOrganisation'
                component={MyOrganisation}
                options={{
                    headerShown:true,
                    headerStyle:{
                        backgroundColor:'#132F3F'
                    }
                    
                }}
                
                
            />
             <Drawer.Screen
                name='PfReport'
                component={PfReport}
                options={{
                    headerShown:true,
                    headerStyle:{
                        backgroundColor:'#132F3F'
                    }
                    
                }}
                
                
            />
             <Drawer.Screen
                name='EsiReport'
                component={EsiReport}
                options={{
                    headerShown:true,
                    headerStyle:{
                        backgroundColor:'#132F3F'
                    }
                    
                }}
                
                
            />
             <Drawer.Screen
                name='Dashboard'
                component={Dashboard}
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

export default AdminDrawer

const styles = StyleSheet.create({})