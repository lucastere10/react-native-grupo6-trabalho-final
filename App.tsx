import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/BottomTabNavigator/BottonTabNavigator';
import { AuthStackScreen } from './src/routes/StackNavigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const auth = false
  return (
    <>
      <StatusBar style="inverted" />
      {auth ? <TabRoutes /> : <AuthStackScreen />}
    </>
  );
}