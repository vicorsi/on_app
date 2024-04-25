import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Login, SignUp, Homepage } from './export'

export const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Homepage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;