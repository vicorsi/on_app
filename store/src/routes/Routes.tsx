import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Welcome, SignUp, Homepage } from '../screens/export';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabRoutes from './tab.routes';

export const Stack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown:false}} />
        {/* <TabRoutes/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}