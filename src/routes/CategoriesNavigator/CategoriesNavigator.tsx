import { createStackNavigator } from '@react-navigation/stack';
import { Category } from '../../screen/Category';
import { NavigationContainer } from "@react-navigation/native";
import { Products } from '../../screen/Products';


const CategoryStack = createStackNavigator();

export function CategoriesStackScreen() {
    return (
        <CategoryStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <CategoryStack.Screen name="Category" component={Category} />
            <CategoryStack.Screen name="Products" component={Products} />
        </CategoryStack.Navigator>
    );
}


