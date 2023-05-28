import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Compo = () => {
    return (
        <View>
            <Image
                style={{ width: 40, height: 20 }}
                source={require('../images/twitter.png')} />
        </View>
    )
}

export default Compo

const styles = StyleSheet.create({})