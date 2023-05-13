import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { baseStyle, routes, theme } from "../config";
import Some from "../assets/Logo/Logo.png";
import search from "../assets/images/search/search.png";
import { Input } from '../components';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';


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
        justifyContent: "space-evenly"
        // flexWrap: "wrap",
    },
    heading: {
        color: theme.colors.white,
        // marginRight: baseStyle.marginRight(30),
        fontSize: RFValue(15),
        lineHeight: baseStyle.lineHight(14),
        fontWeight: 'bold'
        //fontFamily: theme.font.Bold
    },

    AuthBtn: {
        borderRadius: RFValue(20),
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
        fontSize: RFValue(10),
        lineHeight: baseStyle.lineHight(17),
        fontWeight: "600",
    },
    logo: {
        height: RFValue(43),
        // width: "7%", // RFValue(58),
        width: RFValue(43),
        // marginHorizontal: RFValue(23)
    },
    flex: {
        width: "20%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: RFValue(20),
        // paddingVertical: baseStyle.paddingVertical(1),
        paddingLeft: baseStyle.paddingLeft(5),
        backgroundColor: theme.colors.lightBlack,
        // marginRight: baseStyle.marginRight(30),
        minWidth: baseStyle.minWidth(120)
    },
    search: {
        height: RFValue(16),
        width: RFValue(16),
        // marginRight: baseStyle.marginRight(5)
    },
    input: {
        // marginRight: baseStyle.marginRight(30),
        color: theme.colors.white,
        fontSize: RFValue(10),
        lineHeight: baseStyle.lineHight(10),
        fontWeight: "500",
        opacity: 0.7,
        borderRadius: RFValue(25),
        // paddingVertical: baseStyle.paddingVertical(1),
        paddingHorizontal: baseStyle.paddingHorizontal(2),
        width: 200, //"100%"
    },
});
