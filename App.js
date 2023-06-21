
import {StatusBar, SafeAreaView, Text, View } from 'react-native';
import { Cesta } from './src/pages/cesta/cesta';
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}

