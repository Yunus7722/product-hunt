import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { db } from '../config';
import { TextInput,Text } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import Ripple from 'react-native-material-ripple';


const Onboard = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productURL, setProductURL] = useState('');


  const handleSubmit = async () => {
    try {
      const product = {
        name: productName,
        description: productDescription,
        url: productURL,
      };
  
      await db.collection('products').add(product);
      console.log('Product details stored successfully');
      setProductName('');
      setProductDescription('');
      setProductURL('');
      
      Toast.show('Product Added succesfully', Toast.LONG, [], {
        backgroundColor: 'green', // Change the background color
        textColor: 'white', // Change the text color
      });
    } catch (error) {
      console.log('Error storing product details:', error);
      Toast.show('Failed to store product details', Toast.LONG, [], {
        backgroundColor: 'red', // Change the background color
        textColor: 'white', // Change the text color
      });
    }
  };
  

  

  return (
    <View style={{justifyContent:'center',marginTop:'0%',backgroundColor:'#e9edc9',flex:1}}>
      {/* Your form or input fields for product submission */}

      <View style={{alignSelf:'center',}}>
        <Text style={{fontSize:30,color:'purple',fontWeight:'bold'}}>
          Add Products 
        </Text>
      </View>
      <TextInput
       mode="outlined"
       label="Product Name"
       placeholder="Product Name"
       value={productName}
       onChangeText={text => setProductName(text)}
       style={[{ width: '90%', height: 50, marginLeft: 20, marginTop: 20, backgroundColor: '#fff', fontSize: 15, marginBottom: 40 }]}/>
     

     <TextInput
       mode="outlined"
       label="Product Desc"
       placeholder="Product Description"
       value={productDescription}
       onChangeText={text => setProductDescription(text)}
       style={[{ width: '90%', height: 50, marginLeft: 20, marginTop: 0, backgroundColor: '#fff', fontSize: 15, marginBottom: 40 }]}/>
         <TextInput
       mode="outlined"
       label="product URl"
       placeholder="Product URL"
        value={productURL}
        onChangeText={text => setProductURL(text)}
       style={[{ width: '90%', height: 50, marginLeft: 20, marginTop: 0, backgroundColor: '#fff', fontSize: 15, marginBottom: 40 }]}/>
     

      {/* Submit button */}
      <View style={{ alignSelf: 'center', width: '90%', height: '30%' }}>
                    <Ripple
                      onPress={handleSubmit}
                        rippleColor='#ffc4d6'
                        rippleContainerBorderRadius={30}
                        rippleOpacity={1}
                        rippleDuration={1000}
                        style={{
                            // width: 340,
                            height: '40%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#EE8021',
                            borderRadius: 20,
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 30,
                            alignSelf: 'center',
                            fontWeight: '800',
                        }}>Add Product</Text>
                    </Ripple>

                </View>
      
    </View>
  );
};

export default Onboard;
