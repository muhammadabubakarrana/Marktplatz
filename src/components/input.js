import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { baseStyle, theme } from '../config';

export const Input = ({ style, placeholder, ...restProps }) => {
    return (
        <TextInput
            {...restProps}
            placeholder={placeholder}
            style={[styles.input, style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        // borderRadius: baseStyle.borderRadius(20),
        // paddingVertical: baseStyle.paddingVertical(4),
        // paddingHorizontal: baseStyle.paddingHorizontal(20),
        // // borderWidth: baseStyle.borderWidth (1),
        // // borderColor: theme.colors.white,
        // backgroundColor: theme.colors.lightBlue
    }
});
