import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component-2';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';

const Organisation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);

    const data = [
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "no", "Location 1", "Actions"],
        ['ORG123', "Organisation 6", "yes", "Yes", "Location 5", "Actions"],
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "no", "Location 1", "Actions"],
        ['ORG123', "Organisation 5", "no", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],
        ['ORG123', "Organisation 1", "yes", "Yes", "Location 1", "Actions"],

    ];
    const dataPerPage = 5;
    const tableHead = ['ID', 'Name', 'Aadhaar', 'Secure', 'Locations', 'Actions'];
    const widthArr = [100, 200, 100, 100, 200, 100];

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    React.useEffect(() => {
        setTableData(data);
    }, []);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = tableData.slice(indexOfFirstData, indexOfLastData);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(tableData.length / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View>
                <View>
                    <Text style={styles.Header}>Organisation Onboard</Text>
                </View>
                <View>
                    <TextInput
                        mode="flat"
                        label="Filter"

                        placeholder='Ex : Wip '
                        placeholderTextColor='grey'
                        style={[{ width: '90%', height: 50, marginLeft: 20, marginTop: 20, backgroundColor: '#fff', fontSize: 15, marginBottom: 40 }]}
                        // labelStyle={{ color: 'green' }}
                        // theme={{ colors: { primary: 'red' }}}
                        theme={{ colors: { primary: 'blue', placeholder: 'grey', text: 'white' } }}

                    />
                </View>
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
    )
}

const styles = StyleSheet.create({
    Header: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 15,
        color: '#343a40'

    },
    container: { padding: 16, paddingTop: 30, backgroundColor: '#edf2fb', borderTopRightRadius: 20, borderTopLeftRadius: 20 },
    header: { height: 60, backgroundColor: '#094d6a', },
    text: { textAlign: 'center', fontWeight: '500', color: 'white', fontSize: 17 },
    dataWrapper: { marginTop: -1 },
    row: {
        height: 40,
        // backgroundColor: index % 2 === 0 ? '#E7E6E1' : '#107989'
        backgroundColor: '#107989'
    },
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
});

export default Organisation