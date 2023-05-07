import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "../config";



export const Wrapper = ({ children, style }) => {
    return (
        <SafeAreaView edges={['right', 'left', 'top']} style={[styles.container, style]} >
            {children}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: theme.colors.black,
    }
})