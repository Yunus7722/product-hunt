import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component-2';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const dataPerPage = 5;
  const tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'];
  const widthArr = [40, 60, 80, 100, 120, 140, 160, 180, 200];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  React.useEffect(() => {
    let data = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      data.push(rowData);
    }
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
                  style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.paginationContainer}>
        {currentPage !== 1 && (
          <Icon style={{ padding: 12 }} name="arrow-left" size={13} onPress={() => handlePageChange(currentPage - 1)} />
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
            {number}
          </Text>
        ))}
        {currentPage !== pageNumbers.length && (
          <Icon style={{ padding: 12 }} name="arrow-right" size={13} onPress={() => handlePageChange(currentPage + 1)} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 0.45, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '500' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
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

export default MyTable