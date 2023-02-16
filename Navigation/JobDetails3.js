
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput, Switch, Checkbox,Chip,ProgressBar } from 'react-native-paper'

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';
// import SlidingToast from './SlidingToast';
import DateTimePicker from 'react-native-modal-datetime-picker';





const JobDetails3 = ({ navigation }) => {
    //For checkbox
    const [secureQr, setSecureQr] = useState(false)

    //For Switch

    const [switchOn, setSwitchOn] = useState(false)
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
                        progress={0.7}
                        color='orange'
                    />
                </View>
                <View>
                    <Text style={{ color: 'grey', marginTop: 8 }}>STEP 3</Text>
                    <Text style={{ color: '#132F3F', marginTop: 0, fontSize: 25, fontWeight: '400' }}>Job Details</Text>
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
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text_footer}>Job Details</Text>
                    <Text style={styles.text_side_footer}>(Section 3/3)</Text>
                </View>
                <ScrollView style={{ marginTop: 30, marginBottom: 20 }}>
                    <Text style={styles.text_Scroll_inside_Footer}>●  Other Details</Text>
                    <TextInput
                        mode="outlined"
                        label="Shoe Size"
                        value={userId}
                        onChangeText={setUserId}
                        placeholder=''
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 10, }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        theme={{ colors: { primary: userId === '' ? 'red' : 'orange', placeholder: userId === '' ? 'white' : '#9ef01a', text: 'white' } }}
                    />
                    <TextInput
                        mode="outlined"
                        label="Blood Group *"

                        value={OrgId}
                        onChangeText={setOrgId}
                        placeholder=''
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 30 }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        theme={{ colors: { primary: OrgId === '' ? 'red' : 'orange', placeholder: OrgId === '' ? 'white' : '#9ef01a', text: 'white' } }}

                    />

                    <TextInput
                        mode="outlined"
                        label="Academic Qualification"
                        value={password}
                        onChangeText={setPassword}
                        // secureTextEntry={hidePassword}
                        placeholder=' '
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        // right={<TextInput.Icon onPress={() => { setHidePassword(!hidePassword) }} icon="eye" color='white' size={22} style={{ marginTop: 15, marginRight: 20 }} />}
                        theme={{ colors: { primary: password === '' ? 'red' : 'orange', placeholder: password === '' ? 'white' : '#9ef01a', text: 'white' } }}


                    />


                    <TextInput
                        mode="outlined"
                        label="Technical Qualification"
                        value={password}
                        onChangeText={setPassword}
                        // secureTextEntry={hidePassword}
                        placeholder=' '
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        // right={<TextInput.Icon onPress={() => { setHidePassword(!hidePassword) }} icon="eye" color='white' size={22} style={{ marginTop: 15, marginRight: 20 }} />}
                        theme={{ colors: { primary: password === '' ? 'red' : 'orange', placeholder: password === '' ? 'white' : '#9ef01a', text: 'white' } }}


                    />

                    <TextInput
                        mode="outlined"
                        label="Driving Licence"
                        value={password}
                        onChangeText={setPassword}
                        // secureTextEntry={hidePassword}
                        placeholder=' '
                        placeholderTextColor='orange'
                        style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                        // right={<TextInput.Icon onPress={() => { setHidePassword(!hidePassword) }} icon="eye" color='white' size={22} style={{ marginTop: 15, marginRight: 20 }} />}
                        theme={{ colors: { primary: password === '' ? 'red' : 'orange', placeholder: password === '' ? 'white' : '#9ef01a', text: 'white' } }}


                    />

                    <View style={styles.DobContainer}>
                        <TextInput
                            mode="outlined"
                            label="Driving Licence Validity Date"
                            placeholder='MM-DD-YY'
                            placeholderTextColor='white'
                            style={[styles.input, { width: '100%', paddingTop: 30 }, styles.label]}
                            value={selectedDate ? selectedDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '4-digit',
                                // year:'2-digit',

                            }).replace(/\//g, '-') : ''}
                            onFocus={showDatePicker}
                            // labelStyle={{ color: 'green' }}
                            // theme={{ colors: { primary: 'red' }}}
                            // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                            theme={{ colors: { primary: OrgId === '' ? 'red' : 'orange', placeholder: OrgId === '' ? 'white' : '#9ef01a', text: 'white' } }}

                        />
                        <Feather name="calendar" size={20} color='white' style={styles.icon} onPress={showDatePicker} />
                    </View>
                    <View>
                        <DateTimePicker
                            isVisible={DatePickerVisible}
                            onConfirm={handleDatePicker}
                            onCancel={hideDatePicker}
                            mode='date'
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12, marginTop: 25 }}>
                        <Checkbox
                            color='#fb8500'
                            status={secureQr ? 'checked' : 'unchecked'}
                            onPress={() => setSecureQr(!secureQr)}
                            uncheckedColor='white'
                        />
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: '500' }}>Medical Checkup Done</Text>
                    </View>

                    <View style={styles.DobContainer}>
                        <TextInput
                            mode="outlined"
                            label="Medical Checkup Date"
                            placeholder='MM-DD-YY'
                            placeholderTextColor='white'
                            style={[styles.input, { width: '100%', paddingTop: 0 }, styles.label]}
                            value={selectedDate ? selectedDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '4-digit',
                                // year:'2-digit',

                            }).replace(/\//g, '-') : ''}
                            onFocus={showDatePicker}
                            // labelStyle={{ color: 'green' }}
                            // theme={{ colors: { primary: 'red' }}}
                            // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                            theme={{ colors: { primary: OrgId === '' ? 'red' : 'orange', placeholder: OrgId === '' ? 'white' : '#9ef01a', text: 'white' } }}

                        />
                        <Feather name="calendar" size={20} color='white' style={styles.Padding_icon} onPress={showDatePicker} />
                    </View>
                    <View>
                        <DateTimePicker
                            isVisible={DatePickerVisible}
                            onConfirm={handleDatePicker}
                            onCancel={hideDatePicker}
                            mode='date'
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12, marginTop: 25 }}>
                        <Checkbox
                            color='#fb8500'
                            status={secureQr ? 'checked' : 'unchecked'}
                            onPress={() => setSecureQr(!secureQr)}
                            uncheckedColor='white'
                        />
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: '500' }}>Safety Training Done</Text>
                    </View>

                    <View style={styles.DobContainer}>
                        <TextInput
                            mode="outlined"
                            label="Safety Training Date"
                            placeholder='MM-DD-YY'
                            placeholderTextColor='white'
                            style={[styles.input, { width: '100%', paddingTop: 0 }, styles.label]}
                            value={selectedDate ? selectedDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '4-digit',
                                // year:'2-digit',

                            }).replace(/\//g, '-') : ''}
                            onFocus={showDatePicker}
                            // labelStyle={{ color: 'green' }}
                            // theme={{ colors: { primary: 'red' }}}
                            // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                            theme={{ colors: { primary: OrgId === '' ? 'red' : 'orange', placeholder: OrgId === '' ? 'white' : '#9ef01a', text: 'white' } }}

                        />
                        <Feather name="calendar" size={20} color='white' style={styles.Padding_icon} onPress={showDatePicker} />
                    </View>
                    <View>
                        <DateTimePicker
                            isVisible={DatePickerVisible}
                            onConfirm={handleDatePicker}
                            onCancel={hideDatePicker}
                            mode='date'
                        />
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12, marginTop: 25 }}>
                        <Checkbox
                            color='#fb8500'
                            status={secureQr ? 'checked' : 'unchecked'}
                            onPress={() => setSecureQr(!secureQr)}
                            uncheckedColor='white'
                        />
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: '500' }}>Skill Certification Done</Text>
                    </View>

                    <View style={styles.DobContainer}>
                        <TextInput
                            mode="outlined"
                            label="Skill Certification Date"
                            placeholder='MM-DD-YY'
                            placeholderTextColor='white'
                            style={[styles.input, { width: '100%', paddingTop: 0 }, styles.label]}
                            value={selectedDate ? selectedDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '4-digit',
                                // year:'2-digit',

                            }).replace(/\//g, '-') : ''}
                            onFocus={showDatePicker}
                            // labelStyle={{ color: 'green' }}
                            // theme={{ colors: { primary: 'red' }}}
                            // theme={{ colors: { primary: 'orange', placeholder: 'white', text: 'white' } }}
                            theme={{ colors: { primary: OrgId === '' ? 'red' : 'orange', placeholder: OrgId === '' ? 'white' : '#9ef01a', text: 'white' } }}

                        />
                        <Feather name="calendar" size={20} color='white' style={styles.Padding_icon} onPress={showDatePicker} />
                    </View>
                    <View>
                        <DateTimePicker
                            isVisible={DatePickerVisible}
                            onConfirm={handleDatePicker}
                            onCancel={hideDatePicker}
                            mode='date'
                        />
                    </View>








                </ScrollView>


                <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 40 }}>
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
                        onPress={() => navigation.navigate('WageDetails')}
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

export default JobDetails3


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
    text_Scroll_inside_Footer: {
        color: '#fff',
        fontSize: 18,
        // alignSelf: 'center',
        paddingTop: 10,
        fontWeight: '500',
        marginLeft: 5,
        paddingBottom: 10
    },
    text_side_footer: {
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
    Padding_icon: {
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