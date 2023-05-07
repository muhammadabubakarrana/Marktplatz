import React from 'react';
import { Navigation } from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
    // https://www.youtube.com/watch?v=3hLQURJM7ws&ab_channel=LogRocket
  );
}

export default App;