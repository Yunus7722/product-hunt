import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';
import SlidingToast from './SlidingToast';




const LoginScreen = ({ navigation }) => {

    //for Toast Message
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const showToast = (message, duration) => {
        setToastMessage(message);
        setToastVisible(true);

        setTimeout(() => {
            setToastVisible(false);
        }, duration);
    };

    //Functionality for Username and Password
    const [userId, setUserId] = useState('')
    const [OrgId, setOrgId] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {

        if (userId === 'superadmin' && OrgId === 'superadmin' && password === 'admin@123') {
            // showToast('Invalid Credentials', 5000)
            navigation.navigate('MyDrawer')
            
        }else if(userId === 'workmen' && OrgId === 'workmen' && password === 'admin@123')
        {
            // showToast('These is Workmen', 5000)
            navigation.navigate('WorkmenDrawer')
       }else if(userId === 'admin' && OrgId === 'admin' && password === 'admin@123')
       {
           // showToast('These is Workmen', 5000)
           navigation.navigate('AdminDrawer')
      }
       else if(userId === '' && OrgId === '' && password === '')
         {
            showToast('Input Fields are Empty', 5000)
        }
         else {
            showToast('Invalid Credentials', 5000)
        }
    }

    const [hidePassword, setHidePassword] = useState(true)



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image style={styles.logo}
                    animation='zoomIn'
                    // duration={10000}
                    duration={5000}
                    resizeMode='cover'
                    source={require('../images/olo_logo1.png')}
                />
            </View>
            <Animatable.View
                style={styles.footer}
                animation='fadeInUpBig'
                // duration={10000}
                duration={5000}>
                <Text style={styles.text_footer}>Login to your Account</Text>
                <TextInput
                    mode="outlined"
                    label="User Id"
                    value={userId}
                    onChangeText={setUserId}
                    placeholder=''
                    placeholderTextColor='orange'
                    style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                    // labelStyle={{ color: 'green' }}
                    // theme={{ colors: { primary: 'red' }}}
                    // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                    theme={{ colors: { primary: userId === '' ? 'red' : 'orange', placeholder: userId === '' ? 'white' : '#9ef01a', text: 'white' } }}
                />
                <TextInput
                    mode="outlined"
                    label="Organisation Id"

                    value={OrgId}
                    onChangeText={setOrgId}
                    placeholder=''
                    placeholderTextColor='orange'
                    style={[styles.input, { width: '100%', paddingTop: 20 }, styles.label]}
                    // labelStyle={{ color: 'green' }}
                    // theme={{ colors: { primary: 'red' }}}
                    // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                    theme={{ colors: { primary: OrgId === '' ? 'red' : 'orange', placeholder: OrgId === '' ? 'white' : '#9ef01a', text: 'white' } }}

                />
                <View>
                    <TextInput
                        mode="outlined"
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={hidePassword}
                        placeholder=' '
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 20, }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        right={<TextInput.Icon onPress={() => { setHidePassword(!hidePassword) }} icon="eye" color='white' size={22} style={{ marginTop: 15, marginRight: 20 }} />}
                        theme={{ colors: { primary: password === '' ? 'red' : 'orange', placeholder: password === '' ? 'white' : '#9ef01a', text: 'white' } }}


                    />

                </View>
                {/* <Feather name='eye-off' size={20} color='white' /> */}
                {/* </TextInput> */}

                <Image
                    style={{ height: 70, width: 330, marginTop: 20 }}
                    source={require('../images/captha.jpg')}
                    resizeMode='stretch'
                    alignSelf='center'
                />
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10, }}>
                    <TextInput
                        mode='flat'
                        style={{ width: '60%', height: 35, }}
                    // labelStyle={{ color: 'green' }}
                    // theme={{ colors: { primary: 'red' }}}
                    // theme={{ colors: { primary: 'orange', placeholder: '#a2d6f9', text: 'white' } }}

                    />
                    <Button
                        color='black'

                        style={{ backgroundColor: '#bdbdbd', borderTopRightRadius: 20, borderBottomRightRadius: 20, }}>
                        <Text style={{ fontSize: 10 }}>check</Text>
                    </Button>
                </View>
                <Text onPress={() => navigation.navigate('ForgotPassword')}
                    style={{
                        color: '#fff',
                        fontSize: 15,
                        alignSelf: 'center',
                        paddingTop: 5,
                        paddingBottom: 20,
                        fontWeight: '500'
                    }}>Forgot Password ?</Text>

                {/* <TouchableOpacity
                    style={{ height: 40, width: '90%', backgroundColor: '#e91e63', marginLeft: 20, borderRadius: 20 }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        alignSelf: 'center',
                        paddingTop: 5,
                        fontWeight: '800',

                    }}>Login</Text>
                </TouchableOpacity> */}

                <View style={{ alignSelf: 'center' }}>
                    <Ripple
                        onPress={handleLogin}
                        rippleColor='#ffc4d6'
                        rippleContainerBorderRadius={30}
                        rippleOpacity={1}
                        rippleDuration={1000}
                        style={{
                            width: 320,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#EE8021',
                            borderRadius: 20,
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            alignSelf: 'center',
                            fontWeight: '800',
                        }}>Login</Text>
                    </Ripple>

                </View>


            </Animatable.View>
            <SlidingToast
                message={toastMessage}
                visible={toastVisible}
                duration={5000}
            />
        </View>
    )
}

export default LoginScreen


const { height } = Dimensions.get('screen');
const logo_dimen = height * 0.07;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        // paddingBottom: 30,
        paddingBottom: 40,
        marginTop: 10

    },
    footer: {
        flex: 3,
        backgroundColor: '#132F3F',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,

        // paddingVertical: 50
    },
    logo: {
        height: logo_dimen,
        width: logo_dimen * 4,
        borderRadius: 22,
        marginTop: 60
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center',
        paddingTop: 20,
        fontWeight: '500'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        fontSize: 15,
        height: 45,
        color: 'blue',
        paddingHorizontal: 20,
        // paddingTop:50,
        backgroundColor: '#1C4359',

    },
    label: {
        fontSize: 17,
        fontWeight: '500',

    },
});