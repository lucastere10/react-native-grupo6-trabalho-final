import { BottomTabView } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screen/Home";
import { Login } from "../../screen/Login";
import { Register } from "../../screen/Register";
import { Category } from "../../screen/Category";
import { AntDesign, Entypo } from '@expo/vector-icons';


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
                        backgroundColor: "#202126",
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
                                borderTopColor: "#FFD700"
                            }}>
                                <AntDesign name="tag" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
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
                                borderTopColor: "#FFD700"
                            }}>
                                <Entypo name="list" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
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
                                borderTopColor: "#FFD700"
                            }}>
                                <AntDesign name="user" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
                            </View>
                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}