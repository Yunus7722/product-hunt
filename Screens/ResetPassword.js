import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';




const ForgotPassword = ({ navigation }) => {
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
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.text_footer}>Reset your password</Text>
                    <TextInput
                        mode="outlined"
                        label="New Password *"

                        placeholder=''
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}

                    />
                    <TextInput
                        mode="outlined"
                        label="Confirm Password *"

                        placeholder=''
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 20 }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}

                    />

                    <Text onPress={() => navigation.goBack('LoginScreen')} style={{
                        color: '#fff',
                        fontSize: 15,
                        // alignSelf: 'center',
                        paddingLeft: 20,
                        paddingTop: 20,
                        paddingBottom: 20,
                        fontWeight: '500',
                        alignSelf: 'center'
                    }}>Login page ..... ?</Text>
                    <View style={{ height: 40, width: '90%', backgroundColor: '#e91e63', marginLeft: 20, borderRadius: 20 }}>
                        {/* <TouchableOpacity >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            alignSelf: 'center',
                            paddingTop: 5,
                            fontWeight: '800'
                        }}>Reset Password</Text>
                    </TouchableOpacity> */}
                        <View style={{ alignSelf: 'center' }}>
                            <Ripple
                                rippleColor='#ffc4d'
                                rippleContainerBorderRadius={30}
                                rippleOpacity={1}
                                rippleDuration={1000}
                                style={{
                                    width: 340,
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
                                }}>Reset Password</Text>
                            </Ripple>
                        </View>

                    </View>
                </View>
            </Animatable.View>

        </View>
    )
}

export default ForgotPassword


const { height } = Dimensions.get('screen');
const logo_dimen = height * 0.07;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop:40
    },
    header: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingBottom: 50,

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
        marginTop: 70
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 22,
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