import React from "react";
import { Home, MarketPlace, Product, Rechtlich } from "../screens"
import { routes } from "../config";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstPara, NavigationContainer } from "../components";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.HOME} component={Home} />
            <Stack.Screen name={routes.MARKETPLACE} component={MarketPlace} />
            <Stack.Screen name={routes.PRODUCT} component={Product} />
            <Stack.Screen name={routes.RECHTLICH} component={Rechtlich} />
            {/* <Stack.Screen name={routes.FIRST_PARA} component={FirstPara} /> */}
        </Stack.Navigator>
    );
};