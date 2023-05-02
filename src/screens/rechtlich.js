import React from 'react';
import { Dimensions } from "react-native";
import { Footer, MobileFooter, MobileNavigation, NavigationContainer, RechtlichContainertwo } from '../components';


export const Rechtlich = () => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <>

            {/*  Navigation Container */}
            {isSmallDevice ? (<MobileNavigation />) : (<NavigationContainer />)}

            {/* // Metashooters Container */}
            <RechtlichContainertwo />

            {/* Footer */}
            {isSmallDevice ? (<MobileFooter />) : (<Footer />)}

        </>
    );
};
