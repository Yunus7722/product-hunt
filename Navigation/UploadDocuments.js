import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput,Switch ,Chip,ProgressBar} from 'react-native-paper'

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';
// import SlidingToast from './SlidingToast';
import DateTimePicker from 'react-native-modal-datetime-picker';





const UploadDocuments = ({ navigation }) => {

    //For Switch

    const [switchOn,setSwitchOn] = useState(false)
    const handleSwitch = () => {
        setSwitchOn(!switchOn);
    }


    //For Date Picker
    const [DatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisible(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisible(false)
    }

    const handleDatePicker = (date) => {
        setSelectedDate(date);
        hideDatePicker();

    }

    //for Toast Message
    // const [toastVisible, setToastVisible] = useState(false);
    // const [toastMessage, setToastMessage] = useState('');

    // const showToast = (message, duration) => {
    //     setToastMessage(message);
    //     setToastVisible(true);

    //     setTimeout(() => {
    //         setToastVisible(false);
    //     }, duration);
    // };

    //Functionality for Username and Password
    const [userId, setUserId] = useState('')
    const [OrgId, setOrgId] = useState('')
    const [password, setPassword] = useState('')

    // const handleLogin = () => {

    //     if (userId === 'superadmin' && OrgId === 'superadmin' && password === 'admin@123') {
    //         // showToast('Invalid Credentials', 5000)
    //         navigation.navigate('MyDrawer')

    //     }else if(userId === 'workmen' && OrgId === 'workmen' && password === 'admin@123')
    //     {
    //         // showToast('These is Workmen', 5000)
    //         navigation.navigate('WorkmenDrawer')
    //    }else if(userId === '' && OrgId === '' && password === '')
    //      {
    //         showToast('Input Fields are Empty', 5000)
    //     }
    //      else {
    //         showToast('Invalid Credentials', 5000)
    //     }
    // }

    // const [hidePassword, setHidePassword] = useState(true)



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 37, width: 37 }}
                        source={require('../images/work-in-progress.png')} />
                    <ProgressBar
                        style={{ width: 300, marginTop: 12, marginLeft: 10 }}
                        progress={0.9}
                        color='orange'
                    />
                </View>
                <View>
                    <Text style={{ color: 'grey', marginTop: 8 }}>STEP 4</Text>
                    <Text style={{ color: '#132F3F', marginTop: 0, fontSize: 25, fontWeight: '400' }}>Upload Documents</Text>
                </View>
                <View style={{width:100,marginTop:5}}>
                    <Chip style={{backgroundColor:'#FFDD9E'}}>
                        <Text style={{color:'#132F3F'}}>In Progress</Text>
                    </Chip>
                </View>
            </View>
            <View
                style={styles.footer}
            >
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>Upload Highest Qualification Documents</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                    <TextInput
                        mode="outlined"
                        label="Select Documents"
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
                   






                {/* </ScrollView> */}


                <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 40,marginTop:305}}>
                    <Ripple
                        onPress={() => navigation.goBack()}
                        rippleColor='#ffc4d6'
                        rippleContainerBorderRadius={30}
                        rippleOpacity={1}
                        rippleDuration={1000}
                        style={{
                            width: 150,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1C4359',
                            borderRadius: 20,
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            alignSelf: 'center',
                            fontWeight: '800',
                        }}>Previous</Text>
                    </Ripple>

                    <Ripple
                        onPress={() => navigation.navigate('Summary')}
                        rippleColor='#ffc4d6'
                        rippleContainerBorderRadius={30}
                        rippleOpacity={1}
                        rippleDuration={1000}
                        style={{
                            width: 150,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#EE8021',
                            borderRadius: 20,
                            marginLeft: 30
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            alignSelf: 'center',
                            fontWeight: '800',
                        }}>Next</Text>
                    </Ripple>

                </View>


            </View>

        </View>
    )
}

export default UploadDocuments


const { height } = Dimensions.get('screen');
const logo_dimen = height * 0.07;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.9,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 30,
        // paddingBottom: 30,
        // paddingBottom: 40,
        marginTop: 30

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
        // alignSelf: 'center',
        paddingTop: 20,
        fontWeight: '500',
        marginLeft: 25
    },
    text_side_footer:{
        color: '#fff',
        fontSize: 16,
        // alignSelf: 'center',
        paddingTop: 22,
        fontWeight: '400',
        marginLeft: 10
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
    icon: {
        position: 'absolute',
        right: 30,
        top: 38,
        bottom: 0,
        justifyContent: 'center',
        padding: 10,
    },
    termination_icon: {
        position: 'absolute',
        right: 30,
        top: 10,
        bottom: 0,
        justifyContent: 'center',
        padding: 10,
    },
    DobContainer: {
        flexDirection: 'row',
        // position: 'relative',
        // alignItems: 'center',
        // width: '80%',
        // marginLeft: 40
    },
});