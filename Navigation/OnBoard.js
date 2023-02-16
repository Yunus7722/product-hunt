
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import Collapsible from 'react-native-collapsible'
import { Ionicons } from '@expo/vector-icons';
import { Button, TextInput, Checkbox, DataTable } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { SelectList } from 'react-native-dropdown-select-list';
import { Table, TableWrapper, Row } from 'react-native-table-component-2';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';


const OnBoard = () => {
    //  For DataTable

    const datas = [
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],
        ['Drake', "Sup123", "supervisor", "Actions"],

    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);

    const dataPerPage = 5;
    const tableHead = ['Name', 'User ID', 'Role', 'Action'];
    const widthArr = [100, 100, 200, 100];

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    React.useEffect(() => {
        setTableData(datas);
    }, []);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = tableData.slice(indexOfFirstData, indexOfLastData);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(tableData.length / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    // const data = [
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],
    //     ['Drake',"Sup123", "supervisor","Actions"],

    //   ];

    // const tableData = generateTableData();

    // const [currentPage, setCurrentPage] = useState(1);
    // const dataPerPage = 5;
    // const tableHead = ['Name', 'User ID', 'Role', 'Action'];
    // const widthArr = [200, 100, 200, 100];

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    // React.useEffect(() => {
    //     setTableData(data);
    // }, []);


    // const indexOfLastData = currentPage * dataPerPage;
    // const indexOfFirstData = indexOfLastData - dataPerPage;
    // const currentData = tableData.slice(indexOfFirstData, indexOfLastData);
    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(tableData.length / dataPerPage); i++) {
    //     pageNumbers.push(i);
    // }



    //For Dropdown
    const [selected, setSelected] = useState('')
    const data = [
        { key: '1', label: 'Supervisor 1' },
        { key: '2', label: 'Supervisor 2' },
        { key: '3', label: 'Supervisor 3' },
        { key: '4', label: 'Supervisor 4' },
        { key: '5', label: 'Supervisor 5' },
        { key: '6', label: 'Supervisor 6' },
    ]

    //For Collapsible Accordian
    const [collapsed, setCollapsed] = useState(true);
    //For checkBoxes
    const [adhaarCheck, setAdhaarCheck] = useState(true);
    const [secureQr, setSecureQr] = useState(true);
    //for Image selector
    const [imagePick, setImagePick] = useState(null)

    //For Modal
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };



    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (!result.canceled) {
            setImagePick(result.uri)
        }
    }



    return (

        <SafeAreaView>

            <ScrollView>

                <View>
                    <Text style={styles.Header}>Organisation Onboard</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.boxMain} onPress={toggleExpanded}>
                        <View style={styles.MainCollapseContainer}>
                            <Text style={styles.MainCollapseText}>
                                Organisation Details
                            </Text>
                            <View style={styles.arrow}>
                                <Ionicons name='chevron-down' size={20} color='black' />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed}>
                        <View style={styles.collapseInnerMain} >
                            {/* <Text style={styles.collapseInnerText}>
                                Dummy Text
                            </Text> */}
                            <TextInput
                                mode="outlined"
                                label="Name *"

                                placeholder=''
                                placeholderTextColor='orange'
                                style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                                // labelStyle={{ color: 'green' }}
                                // theme={{ colors: { primary: 'red' }}}
                                theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                            />
                            <TextInput
                                mode="outlined"
                                label="ID *"

                                placeholder=''
                                placeholderTextColor='orange'
                                style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                                // labelStyle={{ color: 'green' }}
                                // theme={{ colors: { primary: 'red' }}}
                                theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12, marginTop: 20 }}>
                                <Checkbox color='red'
                                    status={adhaarCheck ? 'checked' : 'unchecked'}
                                    onPress={() => setAdhaarCheck(!adhaarCheck)}
                                />
                                <Text style={{ marginLeft: 10 }}>Aadhaar Check</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12, marginTop: 20 }}>
                                <Checkbox
                                    color='red'
                                    status={secureQr ? 'checked' : 'unchecked'}
                                    onPress={() => setSecureQr(!secureQr)}
                                />
                                <Text style={{ marginLeft: 10 }}>Secure QR</Text>
                            </View>

                            <TextInput
                                mode="outlined"
                                label="PF of establishment"

                                placeholder=''
                                placeholderTextColor='orange'
                                style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                                // labelStyle={{ color: 'green' }}
                                // theme={{ colors: { primary: 'red' }}}
                                theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                            />
                            <TextInput
                                mode="outlined"
                                label="ESI of establishment"

                                placeholder=''
                                placeholderTextColor='orange'
                                style={[styles.input, { width: '100%', paddingTop: 30, }, styles.label]}
                                // labelStyle={{ color: 'green' }}
                                // theme={{ colors: { primary: 'red' }}}
                                theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                            />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.logoContainer}>
                                    <Button
                                        icon='camera'
                                        mode='outlined'
                                        color='#343a40'
                                        style={styles.buttonLogo}
                                        iconStyle={styles.iconLogo}
                                        uppercase={false}
                                        onPress={pickImage}

                                    >
                                        <Text style={{
                                            fontSize: 16,
                                        }}>Choose Logo</Text>
                                    </Button>
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    {imagePick && <Image resizeMode='contain' source={{ uri: imagePick }} style={{ width: 100, height: 100 }} />}
                                </View>
                            </View>

                            <View style={styles.button}>

                                <TouchableOpacity onPress={showModal}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>
                                        Add Admins
                                    </Text>

                                </TouchableOpacity>
                                <Modal
                                    visible={isModalVisible}
                                    animationType="slide"
                                    transparent={true}
                                    onRequestClose={() => setModalVisible(false)}
                                >
                                    <TouchableWithoutFeedback onPress={hideModal}>
                                        <View style={styles.modalContainer}>
                                            <TouchableWithoutFeedback>
                                                <View style={styles.modalInnerContainer}>
                                                    <Text style={styles.modalHeaderText}>Enter User Details</Text>

                                                    <TextInput
                                                        mode="outlined"
                                                        label="First Name *"

                                                        placeholder=''
                                                        placeholderTextColor='orange'
                                                        style={[styles.input, { width: '100%', paddingTop: 20, height: 40 }, styles.label]}
                                                        // labelStyle={{ color: 'green' }}
                                                        // theme={{ colors: { primary: 'red' }}}
                                                        theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                                                    />
                                                    <TextInput
                                                        mode="outlined"
                                                        label="Last Name *"

                                                        placeholder=''
                                                        placeholderTextColor='orange'
                                                        style={[styles.input, { width: '100%', paddingTop: 20, height: 40 }, styles.label]}
                                                        // labelStyle={{ color: 'green' }}
                                                        // theme={{ colors: { primary: 'red' }}}
                                                        theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                                                    />
                                                    <View style={{ marginHorizontal: 20, marginTop: 25,borderWidth:1,borderColor:'grey',height:50, }}>
                                                        <Picker
                                                        
                                                            selectedValue={selected}
                                                            style={{ height: 40, width: '100%',}}
                                                            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                                                        >
                                                            {data.map(item => (
                                                                <Picker.Item key={item.key} label={item.label} value={item.key} />
                                                            ))}
                                                        </Picker>
                                                    </View>
                                                    <TextInput
                                                        mode="outlined"
                                                        label="User ID *"

                                                        placeholder=''
                                                        placeholderTextColor='orange'
                                                        style={[styles.input, { width: '100%', paddingTop: 20, height: 40 }, styles.label]}
                                                        // labelStyle={{ color: 'green' }}
                                                        // theme={{ colors: { primary: 'red' }}}
                                                        theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                                                    />
                                                    <TextInput
                                                        mode="outlined"
                                                        label="Password *"

                                                        placeholder=''
                                                        placeholderTextColor='orange'
                                                        style={[styles.input, { width: '100%', paddingTop: 20, height: 40 }, styles.label]}
                                                        // labelStyle={{ color: 'green' }}
                                                        // theme={{ colors: { primary: 'red' }}}
                                                        theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                                                    />
                                                    <TextInput
                                                        mode="outlined"
                                                        label="Email ID *"

                                                        placeholder=''
                                                        placeholderTextColor='orange'
                                                        style={[styles.input, { width: '100%', paddingTop: 20, height: 40 }, styles.label]}
                                                        // labelStyle={{ color: 'green' }}
                                                        // theme={{ colors: { primary: 'red' }}}
                                                        theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                                                    />
                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginTop: 25 }}>
                                                        <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
                                                            <Text style={styles.closeButtonText}>Close</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={styles.addButton} >
                                                            <Text style={styles.addButtonText}>Add</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>


                                <TouchableOpacity
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>
                                        Add Location
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View >
                                <View style={styles.container}>
                                    <ScrollView horizontal={true}>
                                        <View>
                                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                                <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
                                            </Table>
                                            <ScrollView style={styles.dataWrapper}>
                                                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                                    {currentData.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={widthArr}
                                                            style={[styles.row, index % 2 && { backgroundColor: '#1ed0c7' }]}
                                                            textStyle={styles.text}
                                                        />
                                                    ))}
                                                </Table>
                                            </ScrollView>
                                        </View>
                                    </ScrollView>
                                    <View style={styles.paginationContainer}>
                                        {currentPage !== 1 && (
                                            // <Icon style={{ padding: 12 }} name="arrow-left" size={13} onPress={() => handlePageChange(currentPage - 1)} />
                                            <Text style={{ padding: 10 }} onPress={() => handlePageChange(currentPage - 1)}  >|Prev|</Text>
                                        )}
                                        {pageNumbers.map((number) => (
                                            <Text
                                                key={number}
                                                style={
                                                    number === currentPage
                                                        ? styles.paginationTextActive
                                                        : styles.paginationTextInactive
                                                }
                                                onPress={() => handlePageChange(number)}
                                            >
                                                |{number}|
                                            </Text>
                                        ))}
                                        {currentPage !== pageNumbers.length && (
                                            // <Icon style={{ padding: 12 }} name="arrow-right" size={13} onPress={() => handlePageChange(currentPage + 1)} />
                                            <Text style={{ padding: 10 }} onPress={() => handlePageChange(currentPage + 1)}  >|Next|</Text>
                                        )}
                                    </View>
                                </View>

                            </View>
                        </View>

                    </Collapsible>
                    <View style={styles.submitButton}>
                        <TouchableOpacity
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default OnBoard

const styles = StyleSheet.create({
    Header: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 15,
        color: '#343a40'

    },
    MainCollapseContainer: {
        marginTop: 10,
        marginLeft: 20,
        // backgroundColor:'blue',
        flexWrap: 'wrap',

    },
    MainCollapseText: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1,


    },
    collapseInnerMain: {
        //    marginVertical:20
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    collapseInnerText: {
        marginLeft: 40,

    },
    boxMain: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        height: 50,
        marginTop: 20,
        // alignContent:'stretch'
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    arrow: {
        marginLeft: 135,
        // color: 'red'
    },
    input: {
        fontSize: 15,
        height: 45,
        // color: 'white',
        paddingHorizontal: 20,
        // paddingTop:50,
        backgroundColor: 'white',

    },
    label: {
        fontSize: 17,
        fontWeight: '500',

    },
    buttonLogo: {
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: '#F8F8F8'

    },
    iconLogo: {
        position: 'absolute',
        right: 10,

    },
    logoContainer: {
        marginTop: 30,
        width: 150,
        marginLeft: 20,
        // marginBottom:15,
        // flexDirection: 'row'


    },
    button: {
        // alignItems: 'flex-end',
        // marginTop: 60,
        flexDirection: 'row',
        marginLeft: 50,
        marginVertical: 15
    },
    signIn: {
        width: 130,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        // flexDirection: 'row',
        backgroundColor: '#3D88FB',
        marginLeft: 10
    },
    textSign: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    },
    submitButton: {
        // marginLeft: 50,
        alignSelf: 'flex-end',
        marginVertical: 20,
        marginRight: 20

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalInnerContainer: {
        backgroundColor: 'white',
        paddingTop: 22,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 20,
        borderColor: '#3D88FB',
        height: 560,
        width: 330,
        borderWidth: 2,
        // flex:0.8,

    },
    modalHeaderText: {
        fontSize: 20,
        // marginBottom: 10,
        paddingLeft: 20
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 15,
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        width: 80, height: 45
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 17
    },
    addButton: {
        backgroundColor: '#3D88FB',
        padding: 12,
        borderRadius: 15,
        alignSelf: 'flex-end',
        width: 80,
        height: 45

    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 17
    },
    container: { padding: 16, paddingTop: 30, backgroundColor: '#edf2fb', borderTopRightRadius: 20, borderTopLeftRadius: 20, },
    header: { height: 50, backgroundColor: '#094d6a' },
    text: { textAlign: 'center', fontWeight: '500' ,color: 'white', fontSize: 17  },
    dataWrapper: { marginTop: -1},
    row: { height: 40, backgroundColor: '#107989' },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    paginationTextActive: {
        padding: 10,
        fontWeight: 'bold',
        color: 'black'
    },
    paginationTextInactive: {
        padding: 10,
        color: 'grey'
    },
    paginationIcon: {
        padding: 50
    }



})