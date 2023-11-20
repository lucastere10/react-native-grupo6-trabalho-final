import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/BottomTabNavigator/BottonTabNavigator';
import { AuthStackScreen } from './src/routes/StackNavigator/StackNavigator';
import { useEffect, useState } from 'react';
import { checkAuth } from './src/context/authContext';


export default function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuth(setAuth);
  }, []);

  return (
    <>
      <StatusBar style="inverted" />
      {auth ? <TabRoutes setAuth={setAuth} /> : <AuthStackScreen setAuth={setAuth} />}
    </>
  );
}

