import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { baseStyle, theme, routes } from "../config";
//import Some from "../assets/Logo/Logo.png";
import twitter from "../assets/images/twitter/twitter.png";
import tiktok from "../assets/images/tiktok/tiktok.png";
import insta from "../assets/images/insta/insta.png";
import { RFValue } from 'react-native-responsive-fontsize';


export const Footer = () => {
    //const navigation = useNavigation();

    // const goToImpressum = () => {
    //     navigation.navigate(routes.RECHTLICH)
    // };

    return (
        <View style={styles.navBar}>
            {/* <Image source={{ uri: Some }} style={styles.logo} resizeMode='contain' /> */}
            <TouchableOpacity >
                <Text style={styles.heading} >Impressum</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.heading}>Datenschutz</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.heading}>AGB</Text>
            </TouchableOpacity>
            <Text style={styles.mainHeading}>Metashooters</Text>
            <View style={styles.flex}>
                <Image source={twitter} style={styles.logo} resizeMode='contain' />
                <Text style={styles.heading}>Twitter</Text>
            </View>
            <View style={styles.flex}>
                <Image source={insta} style={styles.logo} resizeMode='contain' />
                <Text style={styles.heading}>Instagram</Text>
            </View>
            <View style={styles.flex}>
                <Image source={tiktok} style={styles.logo} resizeMode='contain' />
                <Text style={styles.heading}>Tiktok</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        // flex: 1,
        backgroundColor: theme.colors.lightPurple,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        //flexWrap: "wrap",
        paddingVertical: baseStyle.paddingVertical(5),
       // paddingLeft: baseStyle.paddingLeft(20)
    },
    heading: {
        color: theme.colors.white,
        //marginRight: baseStyle.marginRight(30),
        fontSize: RFValue(13),
        lineHeight: baseStyle.lineHight(11),
        //fontFamily: theme.font.Bold,
        fontWeight: "bold"
    },
    mainHeading: {
        color: theme.colors.white,
        //marginRight: baseStyle.marginRight(30),
        fontSize: RFValue(20),
        lineHeight: baseStyle.lineHight(17),
        // fontFamily: theme.font.Bold
        fontWeight: "bold"
    },
    logo: {
        height: baseStyle.height(22),
        width: baseStyle.width(22),
        marginRight: baseStyle.marginRight(3)
        //   marginHorizontal: baseStyle.marginHorizontal(55)
    },
    flex: {
        flexDirection: 'row',
        alignItems: "center"
    }

});
