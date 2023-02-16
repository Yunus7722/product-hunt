import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput,Switch,Chip,ProgressBar } from 'react-native-paper'

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';
// import SlidingToast from './SlidingToast';
import DateTimePicker from 'react-native-modal-datetime-picker';





const Summary = ({ navigation }) => {

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
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 37, width: 37 }}
                        source={require('../images/check.png')} />
                    <ProgressBar
                        style={{ width: 300, marginTop: 12, marginLeft: 10 }}
                        progress={1}
                        color='#70e000'
                    />
                </View>
                <View>
                    <Text style={{ color: 'grey', marginTop: 8 }}>STEP 5</Text>
                    <Text style={{ color: '#132F3F', marginTop: 0, fontSize: 25, fontWeight: '400' }}>Summary</Text>
                </View>
                <View style={{width:100,marginTop:5,marginBottom:20}}>
                    <Chip style={{backgroundColor:'#70e000'}}>
                        <Text style={{color:'white'}}>Completed</Text>
                    </Chip>
                </View>
            </View>
            <View
                style={styles.footer}
            >
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Personal Details</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>First name</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Last name</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Gender</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Date of Birth</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Age</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Mobile Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Aadhaar Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>PAN</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>UAN</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>ID Mark</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Guardian's Name</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Marital Status</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Spouse's name</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Emergency Contact{'\n'}Name</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Emergency Contact{'\n'}Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>PF Exempt</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>PF Account Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>ESIC Exempt</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>ESIC Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Job Details</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Principal Employer{'\n'}Code</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Contractor Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Department Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Section Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Workorder Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Item Service Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Employee Type</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Labour Type</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Job Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Skill Code</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Date of Joining</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Employment Status</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Date of Termination</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Reason for{'\n'}Termination</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Work Experience</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Total Experience</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Previous Organisation</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Refered by</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>


                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Relative Working in Company</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>is Working</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Name</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Mobile Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  

                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Bank Details</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Bank Name</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Account Number</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>IFSC</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Name as per Bank{'\n'}Account</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Other Details</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Shoe Size</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Blood Group</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Academic Qualification</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Technical Qualification</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>DL</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>DL Expiry</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Medical Checkup</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Medical checkup Date</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Safety Training</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Safety Training Date</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Skill Certifcation</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>

                
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Present Address</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Address</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Village</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>District</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>State</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Pincode</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>


                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Permanent Address</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Address</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Village</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>District</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>State</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Pincode</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>



                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_footer}>●  Wage Details</Text>
                    {/* <Text style={styles.text_side_footer}>(Section 1/3)</Text> */}
                </View>
                {/* <ScrollView style={{ marginTop: 30, marginBottom: 20 }}> */}
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingTop:30}]}>Basic</Text>
                    <Text style={[styles.Seperator,{paddingTop:30}]}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>DA</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Allowance</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>VDA</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>HRA</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Conveyance</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Special Allowance</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Medical Allowance</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Education Allowance</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.text_side_footer}>Travel Allowance</Text>
                    <Text style={styles.Seperator}> : </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text_side_footer,{paddingBottom:30}]}>Effective Date</Text>
                    <Text style={[styles.Seperator,{paddingBottom:30}]}> : </Text>
                  </View>
                  
                  
                  


                    






                {/* </ScrollView> */}


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
                        onPress={() => navigation.navigate('UploadDocuments')}
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
                        }}>Submit</Text>
                    </Ripple>

                </View>


            </View>

        </View>
        </ScrollView>
    )
}

export default Summary


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
        fontSize: 20,
        // alignSelf: 'center',
        paddingTop: 20,
        fontWeight: '500',
        marginLeft: 5
    },
    text_side_footer:{
        color: '#fff',
        fontSize: 17,
        // alignSelf: 'center',
        paddingTop: 8,
        fontWeight: '400',
        marginLeft: 25
    },
    Seperator:{
        position:'absolute',
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 8,
        fontWeight: '700',
        marginLeft: 200,
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