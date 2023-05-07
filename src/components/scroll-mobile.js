import React from 'react';
import { View, Dimensions } from 'react-native';
import { SpecialScrollView } from 'react-native-scroll-to-element';

export const MyScrollView = ({ children }) => {
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (

        isSmallDevice ? (<SpecialScrollView>{children}</SpecialScrollView>) : (<View  >{children}</View>)
    );
};
