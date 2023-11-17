import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/BottomTabNavigator/BottonTabNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <TabRoutes />
    </>
  );
}