import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../../store/useAuthStore';

export default function AdminScreen() {
  const logout = useAuthStore(state => state.logout);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Painel do Superadmin</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}