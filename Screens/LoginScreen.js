import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, TextInput, HelperText } from 'react-native-paper'

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';
import SlidingToast from './SlidingToast';

// User Id : admin
//password :admin@123


const LoginScreen = ({ navigation }) => {

    

    const { width, height } = Dimensions.get('window').width;

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
    const [password, setPassword] = useState('')

    const handleLogin = () => {

        if (userId === 'admin' && password === 'admin@123') {
            // showToast('Invalid Credentials', 5000)
            navigation.navigate('MyDrawer')

        } 
        else {
            showToast('Invalid Credentials', 5000)
        }
    }

    const [hidePassword, setHidePassword] = useState(true)

    //For helper Text

    // const onChangeUserId = userId => setUserId(userId);

    // const userIdError =()=>{
    //     return !userId.includes('@');
    // }



    //For Validation for userID

    const [userIDFocused, setUserIDFocused] = useState(false)
    const [userIDValidated, setUserIDValidated] = useState(false)
    const userIdRegex = /^[a-zA-Z0-9]*$/;
    const orgIdRegex = /^[a-zA-Z0-9]*$/;

    const handleUserIdFocus = () => {
        setUserIDFocused(true);
    }
    const handleUserIdBlur = () => {
        setUserIDFocused(false);
    }

    useEffect(() => {
        const errors = !userIdRegex.test(userId)
        setUserIDValidated(!errors)
    }, [userId])

    const hasUserErrors = () => {
        return (
            !userIdRegex.test(userId)
        );
    };


    //For Validation for password

    const [passwordFocused, setPasswordFocused] = useState(false)
    const [passwordValidated, setPasswordValidated] = useState(false)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    }
    const handlePasswordBlur = () => {
        setPasswordFocused(false);
    }

    useEffect(() => {
        const errors = password.length > 0 && !passwordRegex.test(password)
        setPasswordValidated(!errors)
    }, [password])

    const hasPasswordErrors = () => {
        return (
            password.length > 0 && !passwordRegex.test(password)
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            
            </View>
            <Animatable.View
                style={styles.footer}
                animation='fadeInUpBig'
                // duration={10000}
                duration={5000}>
                <Text style={styles.text_footer}>Login to your Account</Text>
                <TextInput
                    mode="outlined"
                    label="User ID"
                    value={userId}
                    onChangeText={setUserId}
                    onFocus={handleUserIdFocus}
                    onBlur={handleUserIdBlur}
                    placeholder=''
                    placeholderTextColor='orange'
                    style={[styles.input, { width: '100%', paddingTop: 20, height: 50 }, styles.label]}
                    // labelStyle={{ color: 'green' }}
                    // theme={{ colors: { primary: 'red' }}}
                    // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                    theme={userIDValidated ? { colors: { primary: '#9ef01a', placeholder: 'white', text: 'white' } } : { colors: { primary: 'red', placeholder: '#9ef01a', text: 'white' } }}
                />
                <HelperText style={{ marginLeft: '3%' }} type='error' visible={hasUserErrors()} >
                    <Text style={{ color: '#fb4b4e', fontSize: 13 }}>User Id is not Invalid</Text>
                </HelperText>

                <View>
                    <TextInput
                    
                        mode="outlined"
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={hidePassword}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                        placeholder='admin@123'
                        placeholderTextColor='#e5e5e5'
                        style={[styles.input, { width: '100%', paddingTop: 0, height: 50 }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        right={<TextInput.Icon onPress={() => { setHidePassword(!hidePassword) }} icon="eye" color='white' size={22} style={{ marginTop: 15, marginRight: 20 }} />}
                        theme={passwordValidated ? { colors: { primary: '#9ef01a', placeholder: 'white', text: 'white' } } : { colors: { primary: 'red', placeholder: '#9ef01a', text: 'white' } }}


                    />
                    <HelperText style={{ marginLeft: '3%' }} type='error' visible={hasPasswordErrors()} >

                        {
                            (password.length > 0 && password.length <= 8)
                                ? <Text style={{ color: '#fb4b4e', fontSize: 13 }}>Password should be at least 8 characters long </Text> :
                                <Text style={{ color: '#fb4b4e', fontSize: 13 }}>Password should contain at least one digit and one special character</Text>
                        }
                    </HelperText>

                </View>
               

                <View style={{ alignSelf: 'center', width: '90%', height: '30%' }}>
                    <Ripple
                        onPress={handleLogin}
                        rippleColor='#ffc4d6'
                        rippleContainerBorderRadius={30}
                        rippleOpacity={1}
                        rippleDuration={1000}
                        style={{
                            // width: 340,
                            height: '30%',
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
        flex: 1.4,
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
        width: logo_dimen * 4.2,
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
        paddingTop: '20%',
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