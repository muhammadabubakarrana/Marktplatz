import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./stack-navigation";


export const Navigation = () => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};