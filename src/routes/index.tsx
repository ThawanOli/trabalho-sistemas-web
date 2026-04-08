import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthStore } from '../store/useAuthStore';
import HomeScreen from '../screens/Home';
import AdminDashboard from '../screens/Admin/';
import LoginScreen from '../screens/Login/';

const Stack = createStackNavigator();

export function Routes() {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          // Rota para quem não está logado
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : user.role === 'ADMIN' ? (
          // Rota exclusiva do Superadmin
          <Stack.Screen name="AdminHome" component={AdminDashboard} />
        ) : (
          // Rota do Usuário Final
          <Stack.Screen name="UserHome" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}