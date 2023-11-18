import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/BottomTabNavigator/BottonTabNavigator';
import { MyStack } from './src/routes/BottomTabNavigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <TabRoutes />
    </>
  );
}