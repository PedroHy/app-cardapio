
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './activities/Main';
import Resume from './activities/Resume';
import React from "react";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ title: 'Cardápio' }} />
            <Stack.Screen name="Resume" component={Resume} options={{ title: 'Pedido' }} />
        </Stack.Navigator>
    );
}