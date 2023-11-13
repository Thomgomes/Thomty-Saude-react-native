import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Calculator from '../pages/Calculator'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name='Calculator'
            component={Calculator}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}