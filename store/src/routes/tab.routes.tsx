import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Homepage } from '../screens/export';
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
  return(
    <Tab.Navigator>
      <Tab.Screen
        name='Homepage'
        component={Homepage}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name='Homepage'
        component={Homepage}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}