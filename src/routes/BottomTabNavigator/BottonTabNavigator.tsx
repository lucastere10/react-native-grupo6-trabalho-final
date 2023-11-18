import { BottomTabView } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screen/Home";
import { Login } from "../../screen/Login";
import { Category } from "../../screen/Category";
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Register } from "../../screen/Register";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined;
    Login: undefined;
    Category: undefined;
}

export const TabRoutes = () => {
    return (
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
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#B2CDB3"
                            }}>
                                <FontAwesome name="home" size={32} color={focused ? "#B2CDB3" : "#E7DCDA"} />
                            </View>
                        )
                    }}
                />
                <Tab.Screen
                    name="Category"
                    component={Category}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#B2CDB3"
                            }}>
                                <Entypo name="list" size={32} color={focused ? "#B2CDB3" : "#E7DCDA"} />
                            </View>),
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#B2CDB3"
                            }}>
                                <Ionicons name="person" size={32} color={focused ? "#B2CDB3" : "#E7DCDA"} />
                            </View>
                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}