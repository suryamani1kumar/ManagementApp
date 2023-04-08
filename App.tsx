import React from 'react';
import { Text, View } from 'react-native';
import Dropdown from './src/component/Dropdown';
import Hello from './src/Hello';
import staticdata from './src/staticData/Static';
import LoginAuth from './src/screen/LoginAuth';

function App(): JSX.Element {
  return (
    <View>
      {/* <Hello /> */}
      {/* <Dropdown label="Select Item" data={staticdata.Player} /> */}
      <LoginAuth />
    </View>
  );
}

export default App;
