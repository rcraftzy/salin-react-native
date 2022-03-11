import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './components/SplashScreen';
const App = () => {
  return (
    <SafeAreaProvider>
      <SplashScreen>
      </SplashScreen>
    </SafeAreaProvider>
  );
};

export default App;

