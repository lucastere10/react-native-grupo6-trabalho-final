import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screen/Home";
import { Login } from "../../screen/Login";
import { Products } from "../../screen/Products";
import { Category } from "../../screen/Category";
import { Cart } from "../../screen/Cart";
import { Profile } from "../../screen/Profile";
import { CategoriesStackScreen } from "../CategoriesNavigator/CategoriesNavigator";
import { Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { CartProvider } from "../../context/ProductContext";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    CategoriesStackScreen: undefined;
    Cart: undefined
}

export const TabRoutes = ({ setAuth }) => {
    return (
        <CartProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: "#4F392B",
                            height: 75,
                        },
                    }}>
                    <Tab.Screen
                        name="Home"
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{
                                    height: 75,
                                    width: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderTopWidth: focused ? 4 : 0,
                                    borderTopColor: "#4EB954"
                                }}>
                                    <FontAwesome name="home" size={32} color={focused ? "#4EB954" : "#E7DCDA"} />
                                </View>
                            )
                        }}
                    >
                        {() => <Home setAuth={setAuth} />}
                    </Tab.Screen>
                    <Tab.Screen
                        name="CategoriesStackScreen"
                        component={CategoriesStackScreen}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{
                                    height: 75,
                                    width: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderTopWidth: focused ? 4 : 0,
                                    borderTopColor: "#4EB954"
                                }}>
                                    <Entypo name="list" size={32} color={focused ? "#4EB954" : "#E7DCDA"} />
                                </View>),
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{
                                    height: 75,
                                    width: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderTopWidth: focused ? 4 : 0,
                                    borderTopColor: "#4EB954"
                                }}>
                                    <Ionicons name="person" size={32} color={focused ? "#4EB954" : "#E7DCDA"} />
                                </View>
                            )
                        }}
                    >
                        {() => <Profile setAuth={setAuth} />}
                    </Tab.Screen>
                    <Tab.Screen
                        name="Cart"
                        component={Cart}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{
                                    height: 75,
                                    width: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderTopWidth: focused ? 4 : 0,
                                    borderTopColor: "#4EB954"
                                }}>
                                    <MaterialIcons name="add-shopping-cart" size={32} color={focused ? "#4EB954" : "#E7DCDA"} />
                                </View>),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
} 