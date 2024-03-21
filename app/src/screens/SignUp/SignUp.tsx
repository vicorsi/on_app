import React from 'react'
import { KeyboardAvoidingView, View, Dimensions, StyleSheet, Switch, ScrollView } from 'react-native'
import {Input, Button} from '../../../export'
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {COLORS, SIZE} from '../../../constants';

// problema com keyboardingavoidingview quando tiver muito inputs
// exemplo https://stackoverflow.com/questions/58119124/best-order-for-keyboardavoidingview-safeareaview-and-scrollview
// outro exemplo: https://dev.to/altencirsilvajr/usando-keyboardawarescrollview-em-react-native-2435
export const SignUp = () => {
  return (
    // <SafeAreaView >
      <KeyboardAwareScrollView automaticallyAdjustContentInsets={false} contentContainerStyle={{backgroundColor: COLORS.lightGrey}} >
          <View style={styles.screen}>
            <View style={styles.container}>
              <View style={styles.formContainer}>
                <Input label='E-mail' />
                <Input label='Nome' />
                <Input label='CPF' />
                <Input label='CNH' />
                <Input label='Senha' typeInput={true} />
              </View>
              <View >
                <Button text='Cadastrar' />
              </View>
            </View>
          </View>
      </KeyboardAwareScrollView>
    // </SafeAreaView>
    
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
      flex: 1
  },
  container:{
      width: '100%',
      height: '82%',
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

