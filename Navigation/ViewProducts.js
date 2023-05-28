import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { db } from '../config';
import { Button, TextInput } from 'react-native-paper';
import Toast from 'react-native-simple-toast';

const Organisation = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const snapshot = await db.collection('products').get();
      const productsData = snapshot.docs.map(doc => doc.data());
      setProducts(productsData);
    } catch (error) {
      console.log('Error fetching products:', error);
      Toast.show('Failed to Fetch product details', Toast.LONG, [], {
        backgroundColor: 'red', // Change the background color
        textColor: 'white', // Change the text color
      });
    }
  };

  const handleProductSelection = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleRefresh = () => {
    fetchProducts();
  };

  return (
    <ScrollView style={{ backgroundColor: '#e9edc9' }}>
      <View>
        <Button color='white' style={{backgroundColor:'purple',margin:40,borderRadius:30,}} onPress={handleRefresh}>Refresh</Button>
      </View>
      <View>
        {/* Render the list of products */}
        {products.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <TextInput
              mode="outlined"
              label="Product Name"
              placeholder="Product Name"
              value={product.name}
              onChangeText={text => handleProductSelection(index, 'name', text)}
              style={styles.textInput}
            />
            <TextInput
              mode="outlined"
              label="Product Description"
              placeholder="Product Description"
              value={product.description}
              onChangeText={text => handleProductSelection(index, 'description', text)}
              style={styles.textInput}
            />
            <TextInput
              mode="outlined"
              label="Product URL"
              placeholder="Product URL"
              value={product.url}
              onChangeText={text => handleProductSelection(index, 'url', text)}
              style={styles.textInput}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 5,
    borderColor: 'purple',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    backgroundColor: '#fff',
  },
  textInput: {
    width: '90%',
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    fontSize: 15,
    marginBottom: 40,
  },
});

export default Organisation;
