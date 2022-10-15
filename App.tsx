import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitleAlign: 'center', headerShadowVisible: false }}
          name="Menu"
          component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
