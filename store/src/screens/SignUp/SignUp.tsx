import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Input, Button} from '../../export'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, SIZE } from '../../../constants'
import { CustomInput } from '../../components/CustomInput'

// campos: email, nome, cpf, cep, numero, endereço, bairro, cidade, uf, bairro, senha

export default function SignUp({navigation}: any) {
  return (
    <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}  >
      <StatusBar backgroundColor={COLORS.principalOrange} animated={true} />
        <View style={styles.screen}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <Input label='E-mail' />
              <Input label='Nome' />
              <Input label='CPF' />
              <CustomInput width='90%' typeInput={true} label='oi'/>
              
              <Input label='Senha' typeInput={true} />
            </View>
            <View >
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
      height: '82%',
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