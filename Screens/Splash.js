import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';


const Splash = ({ navigation }) => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login')
  //   }, 6500)
  // }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image style={styles.logo}
          animation='zoomIn'
          // duration={10000}
          duration={5000}
          resizeMode='stretch'
          source={require('../images/twitter.png')}
        />
      </View>
      <Animatable.View
        animation='fadeInUpBig'
        // duration={10000}
        duration={5000}
        style={styles.footer}>
        <Text style={styles.title}>Stay connected with us....!</Text>
        <Text style={styles.text}>Sign in with your twitter account</Text>
      
        <View style={{borderWidth:1,height:'25%',marginTop:50,borderRadius:30,borderColor:'#132F3F',}}>
          <Animatable.View
          // animation='slideInLeft'
          animation={{
            from: { translateX: -180 },
            to: { translateX:6},
          }}
          duration={5000}
          delay={2000}
          style={[styles.button]}>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Login') }}
              style={styles.signIn}
            >

              <Text style={styles.textSign}>
                Sign In
              </Text>
              <MaterialIcons
                name='navigate-next'
                color='#fff'
                size={27}
              />

            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Animatable.View>
    </View>
  )
}

export default Splash
const { height } = Dimensions.get('screen');
const height_logo = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132F3F'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
  },
  title: {
    color: '#132F3F',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 0
  },
  signIn: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#132F3F',
    // marginLeft:20
  },
  textSign: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:10
  }
});