import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "../config";



export const Wrapper = ({ children, style }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(Platform.OS === 'android' || Platform.OS === 'ios');
    }, []);

    return (
        isMobile
            ? (<SafeAreaView edges={['right', 'left', 'top']} style={[styles.container, style]} >
                {children}
            </SafeAreaView>)
            : (<View>{children}</View>)

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.colors.black,
    }
})