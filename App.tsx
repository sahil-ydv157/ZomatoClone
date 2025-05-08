/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import NavigationStack from './navigation';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}} >
      <NavigationStack/>
    </SafeAreaView>
  );
}

export default App;
