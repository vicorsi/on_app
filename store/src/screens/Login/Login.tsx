import React from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Button, Input } from '../../export';
import {COLORS, SIZE} from '../../../constants';

export const Login = ({navigation}: any) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1}} >
      <StatusBar backgroundColor={COLORS.principalOrange} animated={true}/>
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={{display: 'flex', flexDirection: 'column', gap: 20, width: '100%', alignItems: 'center', height: '50%'}} >
              <Input label='E-mail'/>
              <Input label='Senha' typeInput={true}/>
              <View style={{display: 'flex', alignItems: 'flex-end', width: '90%'}}>
                <Text style={{color: '#000'}}>Esqueceu a senha?</Text>
              </View>
            </View>
            <Button text='Login' onPress={() => {navigation.navigate('SignUp')}}/>
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
