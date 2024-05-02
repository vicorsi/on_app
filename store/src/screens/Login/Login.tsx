import { useEffect, useState} from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, StatusBar, TextInput } from 'react-native'
import { Button, Input } from '../../components/export';
import {COLORS, SIZE} from '../../../constants';
import api, { headers } from '../../../api/Api';

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const SignIn = async () => {
    try {
      console.log("oi, entrei");
      const response = await api.post("token/", {
        email: email,
        password: password,
      }, {
        headers: headers
      });
  
      console.log(response.data.acess);
    } catch(error) {
      console.log(error);
    }
  };
  


//   const signIn = async () => {
//     // 
//     try {
//     const response = await api.post('token/', {
//         email: "julia@gmail.com",
//         password: "12345678",
//     });
// // 
//     const resposta = response.data;
//     //  
//         if (response.status == 200){
//            console.log('funcionou')
//         }
//         // if (response.status == 400){
//         //     Alert.alert(response.data.message)
//         // }
//     } catch (error) {
//         console.log(error)
//     }
// };


  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1}} >
      <StatusBar backgroundColor={COLORS.principalOrange} animated={true}/>
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={{display: 'flex', flexDirection: 'column', gap: 20, width: '100%', alignItems: 'center', height: '50%'}} >
              {/* <Input 
                label='E-mail' 
                value={email}
                onChangeText={(e)=>{setEmail(e)}}
                /> */}
              {/* <Input 
                label='Senha' 
                typeInput={true}
                value={password}
                // onChange={(e)=>{setPassword(e)}}
                onChangeText={(e) => setPassword(e)}
                /> */}
                <TextInput style={{backgroundColor: '#cdcdcd'}} value={email} onChangeText={(e) => setEmail(e)} />
                <TextInput style={{backgroundColor: '#cdcdcd'}} value={password} onChangeText={(e) => setPassword(e)} />

                <Text>{email}</Text>
                <Text>{password}</Text>
              <View style={{display: 'flex', alignItems: 'flex-end', width: '90%'}}>
                <Text style={{color: '#000'}}>Esqueceu a senha?</Text>
              </View>
            </View>
            <Button text='Login' onPress={SignIn}/>
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
