
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Navigation } from './src/navigation/navigation';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <Navigation/>
  );
};



export default App;
