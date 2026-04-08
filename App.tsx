import 'react-native-gesture-handler'; // Deve ser a primeira linha
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* O StatusBar ajusta a cor dos ícones de bateria/hora no topo */}
      <StatusBar style="auto" />
      
      {/* Aqui chamamos a nossa lógica de navegação */}
      <Routes />
    </SafeAreaProvider>
  );
}