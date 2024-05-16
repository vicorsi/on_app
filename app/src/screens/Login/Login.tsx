import React, {useState} from 'react'
import { View, StyleSheet, Dimensions, Text, Pressable, KeyboardAvoidingView, Platform, StatusBar, TextInput } from 'react-native'
import { Button, Input } from '../../../export';
import {COLORS, SIZE} from '../../../constants';
import api, { headers } from '../../api/Api';

export const Login = ({navigation}: any) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SignIn = async () => {
    
    try {
      const response = await api.post("auth/token/login/", {
        email: email,
        password: password,
      }, {
        headers: headers
      });
      if(response.status == 200){
        navigation.navigate('Welcome')
      }
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1}} >
    <StatusBar backgroundColor={COLORS.principalOrange} animated={true}/>
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={{display: 'flex', flexDirection: 'column', gap: 20, width: '100%', alignItems: 'center', height: '50%'}} >
          <TextInput style={{ width:350, padding:12, borderWidth:1}} placeholder='Email:' onChangeText={(text) => setEmail(text)} />
            <TextInput style={{ width:350, padding:12, borderWidth:1}} placeholder='Senha:'  onChangeText={(text) => setPassword(text)} />
            <View style={{display: 'flex', alignItems: 'flex-end', width: '90%'}}>
              <Text style={{color: '#000'}}>Esqueceu a senha?</Text>
            </View>
          </View>
          <Button text='Login' onPress={() => {SignIn()}}/>
        </View>
      </View>
    </View>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: SIZE.width,
    height: SIZE.height,
    backgroundColor: COLORS.principalOrange,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container:{
    width: '100%',
    height: '70%',
    backgroundColor: COLORS.lightGrey,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  formContainer:{
    width: '90%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f40',
    flexDirection: 'column',
    gap: 20
  }
})
