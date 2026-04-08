import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../../store/useAuthStore';

export default function LoginScreen() {
  const login = useAuthStore(state => state.login);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Login</Text>
      <Button title="Entrar como Usuário" onPress={() => login('Thawan', 'USER')} />
      <Button title="Entrar como Admin" onPress={() => login('Imperador', 'ADMIN')} />
    </View>
  );
}
