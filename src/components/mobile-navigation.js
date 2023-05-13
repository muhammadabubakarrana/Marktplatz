import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { baseStyle, routes, theme } from "../config";
import LogoTwo from "../assets/images/LogoTwo/LogoTwo.png";
import burgur from "../assets/images/burgur/burgur.png";
import { HeaderExpandedMobile } from './header-expanded-mobile';
import { useNavigation } from '@react-navigation/native';

export const MobileNavigation = () => {

    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const goToHome = () => {
        navigation.navigate(routes.HOME)
    };



    return (
        <>
            <View style={styles.navBar}>
                {/* onPress={goToHome} */}
                <TouchableOpacity onPress={goToHome} >
                    <Image source={LogoTwo} style={styles.logo} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity onPress={openModal} >
                    <Image source={burgur} style={styles.burgur} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.AuthBtn}>
                    <Text style={styles.authTxt} >Login</Text>
                </TouchableOpacity>
            </View>
            <HeaderExpandedMobile visible={showModal} onRequestClose={closeModal} />
        </>
    );
};


const styles = StyleSheet.create({
    navBar: {
        //flex: 1,
        backgroundColor: theme.colors.lightPurple,
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingVertical: baseStyle.paddingVertical(10),
        // height: 80
    },
    // heading: {
    //     color: theme.colors.white,
    //     marginRight: baseStyle.marginRight(30),
    //     fontSize: baseStyle.fontSize(15),
    //     lineHeight: baseStyle.lineHight(14),
    //     fontWeight: 'bold'
    //     //fontFamily: theme.font.Bold
    // },
    // input: {
    //     marginRight: baseStyle.marginRight(30),
    //     color: theme.colors.white,
    //     opacity: 0.7
    // },
    AuthBtn: {
        borderRadius: baseStyle.borderRadius(25),
        //paddingVertical: baseStyle.paddingVertical(3),
        paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(2),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        // width: "20%",
        // minWidth: baseStyle.minWidth(120)
    },
    authTxt: {
        color: theme.colors.white,
        textAlign: "center",
        fontWeight: "600",
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36)
    },
    logo: {
        height: baseStyle.height(46), //height / 9,  //baseStyle.height(43),
        width: baseStyle.width(46), //width / 9 //baseStyle.width(40),
        //  marginHorizontal: baseStyle.marginHorizontal(44)
    },
    // flex: {
    //     width: "20%",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     borderRadius: baseStyle.borderRadius(20),
    //     paddingVertical: baseStyle.paddingVertical(1),
    //     paddingHorizontal: baseStyle.paddingHorizontal(12),
    //     backgroundColor: theme.colors.lightBlack,
    //     marginRight: baseStyle.marginRight(30),
    //     minWidth: baseStyle.minWidth(120)
    // },
    burgur: {
        height: baseStyle.height(24),
        width: baseStyle.width(104),
        // marginRight: baseStyle.marginRight(20)
    },
});
