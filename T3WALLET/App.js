import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  LogBox,
} from 'react-native';
import { Navigation } from './src/navigation/navigation';
import { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './src/redux/store';


import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(()=>{
    LogBox.ignoreLogs(['Warning: ...']);
  },[])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
        <Navigation/>
    </Provider>
  );
};



export default App;
