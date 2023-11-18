import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../screen/Login';
import { NavigationContainer } from "@react-navigation/native";
import { Register } from '../../screen/Register';
import { Home } from '../../screen/Home';

const AuthStack = createStackNavigator();

export function AuthStackScreen() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Register} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

