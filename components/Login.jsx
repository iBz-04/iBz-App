import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from "expo-font"
import {Colors} from './../constants/Colors'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();

  return (

    <View>
      <Image source={require('./../assets/images/Login.jpg')} 
      style={{
        width: '100%',
        height: 520,
            }}>
        </Image>


        <View style={styles.container}>
           <Text style={{
           fontSize: 30,
           fontFamily: 'outfit-bold', 
           textAlign: 'center',
           marginTop: 20
           }}> Travel Pal</Text>

           <Text style={{
            fontFamily: 'outfit',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: 20
           }}>
            Stay connected with real-time Ai - integrated travel alerts and other features, ensuring you can enjoy your adventures
           </Text>

           <TouchableOpacity  style={styles.button} onPress={()=>router.push('auth/sign-in')}>
            <Text style={{color: '#fff', 
              textAlign: 'center', 
              fontFamily: 'outfit', 
              fontSize: 17}}>
                Get Started</Text>
           </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 25
  }, 
  button: {
    borderRadius: 99,
    backgroundColor: '#000',
    padding: 15,
    marginTop: '25%'
  }
})