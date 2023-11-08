import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/activities/Main';
import Resume from './src/activities/Resume';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ title: 'Cardápio' }}/>
        <Stack.Screen name="Resume" component={Resume} options={{ title: 'Pedido' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
