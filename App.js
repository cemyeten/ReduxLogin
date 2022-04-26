import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen, LoginScreen, SettingScreen } from './src/screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {

  const [IsLoggedIn, SetIsLoggedIn] = useState(false);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabsNavigator = () => {
  const navigation = useNavigation();

    useEffect(() => {
      if (!IsLoggedIn) {
        navigation.navigate("LoginScreen");
      }
    },IsLoggedIn);


    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: '#131023',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Main" component={MainScreen}
          options={{
            tabBarLabel: 'Main',
            title: 'Main',
            tabBarIcon: ({ color }) => (
              <Ionicons name={"cellular-outline"} color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen name="Setting" component={SettingScreen}
          options={{
            tabBarLabel: 'Setting',
            title: 'Setting',
            tabBarIcon: ({ color }) => (
              <Ionicons name={"settings-outline"} color={color} size={32} />
            ),
          }}
        />
      </Tab.Navigator>
    );

  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabsNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
