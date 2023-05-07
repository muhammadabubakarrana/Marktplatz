import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { baseStyle, theme } from "../config";
import twitter from "../assets/images/twitter/twitter.png";
import tiktok from "../assets/images/tiktok/tiktok.png";
import insta from "../assets/images/insta/insta.png";

export const MobileFooter = () => {
    return (
        <View style={styles.navBar}>
            <View>
                <TouchableOpacity  >
                    <Text style={styles.heading}>
                        Impressum
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.heading}>
                        Datenschutz
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.heading}>
                        AGB
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.mainHeading}>Metashooters</Text>
            <View>
                <TouchableOpacity style={styles.flex}>
                    <Image source={twitter} style={styles.logo} resizeMode='contain' />
                    <Text style={styles.headingFlex}>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flex}>
                    <Image source={insta} style={styles.logo} resizeMode='contain' />
                    <Text style={styles.headingFlex}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flex}>
                    <Image source={tiktok} style={styles.logo} resizeMode='contain' />
                    <Text style={styles.headingFlex}>Tiktok</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        //flex: 1,
        backgroundColor: theme.colors.lightPurple,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingVertical: baseStyle.paddingVertical(5),
        paddingHorizontal: baseStyle.paddingHorizontal(15)
    },
    heading: {
        color: theme.colors.white,
        //marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(11),
        lineHeight: baseStyle.lineHight(22),
        //fontFamily: theme.font.Bold,
        fontWeight: "800",
        // marginVertical: baseStyle.marginVertical(6)
    },
    headingFlex: {
        color: theme.colors.white,
        //marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(11),
        lineHeight: baseStyle.lineHight(22),
        //fontFamily: theme.font.Bold,
        fontWeight: "800",
    },
    mainHeading: {
        color: theme.colors.white,
        // marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(22),
        // fontFamily: theme.font.Bold
        fontWeight: "800"
    },
    logo: {
        height: baseStyle.height(18),
        width: baseStyle.width(18),
        marginRight: baseStyle.marginRight(3)
        //   marginHorizontal: baseStyle.marginHorizontal(55)
    },
    flex: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: baseStyle.marginVertical(2)
    }
});
