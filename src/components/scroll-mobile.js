import React, { useEffect, useState } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { SpecialScrollView } from 'react-native-scroll-to-element';

export const MyScrollView = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(Platform.OS === 'android' || Platform.OS === 'ios');
    }, []);

    return (

        isMobile ? (<SpecialScrollView>{children}</SpecialScrollView>) : (<View  >{children}</View>)
    );
};
