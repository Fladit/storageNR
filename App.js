import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoxPage from "./src/Components/Home/BoxPage";
import ContainerPage from "./src/Components/ContainerPage/ContainerPage";

const Stack = createStackNavigator()

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name={'BoxPage'}
                  component={BoxPage}
                  options={{ headerShown: false }}
              />
              <Stack.Screen name={'ContainerPage'}
                            component={ContainerPage}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

