import { View, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Text } from 'react-native'
import { Input, Button} from '../../components/export'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, SIZE } from '../../../constants'
import { CustomInput, InputBase } from '../../components/CustomInput'
import { useState } from 'react'

// campos: email, nome, cpf, cep, numero, endereço, bairro, cidade, uf, bairro, senha

export default function SignUp({navigation}: any) {

  const [oi, setOi] = useState('')

  return (
    <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}  >
      <StatusBar backgroundColor={COLORS.principalOrange} animated={true} />
        <View style={styles.screen}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
                <Input label='E-mail'  />
                <Input label='Nome' />
                <Input label='CPF' />
                <View style={{width: '100%',display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                  <View style={{width: '47%'}}>
                    <Input label='CEP'/>
                  </View>
                  <View style={{width: '47%'}}>
                    <Input label='Número' />
                  </View>
                </View>
            </View>
            <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Button text='Cadastrar' onPress={() => navigation.navigate('Homepage')} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
      height: '90%',
      backgroundColor: COLORS.white,
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