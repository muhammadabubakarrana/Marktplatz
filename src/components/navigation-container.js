import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { baseStyle, routes, theme } from "../config";
import Some from "../assets/Logo/Logo.png";
import search from "../assets/images/search/search.png";
import { Input } from '../components';
import { useNavigation } from '@react-navigation/native';


export const NavigationContainer = () => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate(routes.HOME)
    };

    const goToMarket = () => {
        navigation.navigate(routes.MARKETPLACE)
    };

    const goToCollections = () => {
        navigation.navigate(routes.PRODUCT)
    };

    const goToRECHTLICH = () => {
        navigation.navigate(routes.RECHTLICH)
    };

    return (
        <View style={styles.navBar}>

            <TouchableOpacity onPress={goToHome}  >
                <Image source={Some} style={styles.logo} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity onPress={goToMarket}>
                <Text style={styles.heading} >Market</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCollections}>
                <Text style={styles.heading}>Collections</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToRECHTLICH}>
                <Text style={styles.heading}>About Us</Text>
            </TouchableOpacity>
            <View style={styles.flex}>
                <Image source={search} style={styles.search} resizeMode='contain' />
                <Input placeholder="Search..." style={styles.input} />
            </View>
            <TouchableOpacity style={styles.AuthBtn}>
                <Text style={styles.authTxt} >Login / Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    navBar: {
        //flex: 1,
        backgroundColor: theme.colors.lightPurple,
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap",
    },
    heading: {
        color: theme.colors.white,
        marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(15),
        lineHeight: baseStyle.lineHight(14),
        fontWeight: 'bold'
        //fontFamily: theme.font.Bold
    },

    AuthBtn: {
        borderRadius: baseStyle.borderRadius(20),
        // paddingVertical: baseStyle.paddingVertical(4),
        // paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        width: "20%",
        minWidth: baseStyle.minWidth(120)
    },
    authTxt: {
        color: theme.colors.white,
        textAlign: "center",
        //fontFamily: theme.font.extraBold,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(17),
        fontWeight: "600",
    },
    logo: {
        height: baseStyle.height(43),
        // width: "7%", // baseStyle.width(58),
        width: baseStyle.width(43),
        marginHorizontal: baseStyle.marginHorizontal(44)
    },
    flex: {
        width: "20%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: baseStyle.borderRadius(20),
        // paddingVertical: baseStyle.paddingVertical(1),
        paddingLeft: baseStyle.paddingLeft(5),
        backgroundColor: theme.colors.lightBlack,
        marginRight: baseStyle.marginRight(30),
        minWidth: baseStyle.minWidth(120)
    },
    search: {
        height: baseStyle.height(16),
        width: baseStyle.width(16),
        marginRight: baseStyle.marginRight(5)
    },
    input: {
        marginRight: baseStyle.marginRight(30),
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(10),
        fontWeight: "500",
        opacity: 0.7,
        borderRadius: baseStyle.borderRadius(25),
        // paddingVertical: baseStyle.paddingVertical(1),
        paddingHorizontal: baseStyle.paddingHorizontal(2),
        width: 200, //"100%"
    },
});
