import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';
import { Navigator } from './src/navigator/Tabs1';
import { Text } from 'react-native';
import { TabsNavigator } from './src/navigator/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default App