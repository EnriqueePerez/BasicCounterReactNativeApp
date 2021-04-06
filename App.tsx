import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen />
     <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
