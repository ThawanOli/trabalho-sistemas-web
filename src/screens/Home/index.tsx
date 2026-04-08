import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../../store/useAuthStore';

export default function HomeScreen() {
  const logout = useAuthStore(state => state.logout);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo, Usuário!</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}