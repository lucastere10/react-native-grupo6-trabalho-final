import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../screen/Login';
import { Register } from '../../screen/Register';
import { Home } from '../../screen/Home';

const Stack = createStackNavigator();

export function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}