import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text ,TouchableOpacity} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component-2';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import { Feather, Ionicons } from '@expo/vector-icons';

const Employees = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);

    const data = [
        ['Kizaru', "9956586565", "Pending",  "Actions"],
        ['Nemesis', "9956586565", "Pending",  "Actions"],
        ['Akainu', "9956586565", "Pending",  "Actions"],
        ['kakuzu', "9956586565", "Pending",  "Actions"],
        ['Kizaru', "9956586565", "Pending",  "Actions"],
        ['Nemesis', "9956586565", "Pending",  "Actions"],
        ['Akainu', "9956586565", "Pending",  "Actions"],
        ['kakuzu', "9956586565", "Pending",  "Actions"],
        ['Kizaru', "9956586565", "Pending",  "Actions"],
        ['Nemesis', "9956586565", "Pending",  "Actions"],
        ['Akainu', "9956586565", "Pending",  "Actions"],
        ['kakuzu', "9956586565", "Pending",  "Actions"],
       
       
    ];
    const dataPerPage = 5;
    const tableHead = [ 'Name', 'Mobile No', 'Status', 'Action'];
    const widthArr = [ 100, 150, 100,100];

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
                    <Text style={styles.Header}>Employee List</Text>
                </View>
                <View style={{alignItems:'flex-end'}} >
                    <TouchableOpacity style={{marginRight:40,backgroundColor:'#094d6a',width:60,height:35,marginVertical:20,borderRadius:10}}>
                      {/* <Ionicons
                      style={{alignSelf:'center',marginTop:0}}
                      name='md-download'
                      size={25}
                      color='white'
                      /> */}
                      <Feather  style={{alignSelf:'center',marginTop:3}} name='download' color='white' size={25}  />
                    </TouchableOpacity>
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
        fontSize: 23,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 20,
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

export default Employees