import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { baseStyle, theme } from '../config';
import { RFValue } from 'react-native-responsive-fontsize';

export const PercentList = ({ blue, purple, grey }) => {
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (
        <View style={styles.container} >
            <View style={{ ...styles.flex, marginBottom: baseStyle.marginBottom(5) }}>

                <View style={{ ...styles.circle, backgroundColor: blue ? theme.colors.sky : purple ? theme.colors.darkPurple : grey ? theme.colors.fifthGrey : theme.colors.green }}></View>

                <Text style={[styles.listedText, isSmallDevice && styles.mobilelistedText]}>LISTED</Text>
            </View>
            <View style={[{ ...styles.flex, marginBottom: baseStyle.marginBottom(5), marginLeft: baseStyle.marginLeft(17) }, isSmallDevice && styles.mobileVertical]} >
                <Text style={[{ ...styles.numtxt, marginRight: baseStyle.marginRight(5) }, isSmallDevice && styles.mobileNumTxtRight]}>14</Text>
                <View style={styles.line}></View>
                <Text style={[{ ...styles.numtxt, marginLeft: baseStyle.marginLeft(5) }, isSmallDevice && styles.mobileNumTxtLft]}>11.96%</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: "column",
        width: "100%",
        // marginLeft: baseStyle.marginLeft(10),
        // alignItems: 'center'
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
    },
    mobileVertical: {
        marginTop: baseStyle.marginTop(14),
        marginBottom: baseStyle.marginBottom(20)
    },
    circle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        // backgroundColor: theme.colors.green,
        borderWidth: 2
    },
    line: {
        borderBottomColor: theme.colors.white,
        borderBottomWidth: RFValue(3),
        width: "100%",
        borderRadius: RFValue(5)
    },
    listedText: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(7),
        lineHeight: baseStyle.lineHight(9),
        opacity: 0.8,
        fontWeight: "500",
        marginLeft: baseStyle.marginLeft(5),
        marginBottom: baseStyle.marginBottom(1)
    },
    mobilelistedText: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        opacity: 0.8,
        fontWeight: "700",
        marginLeft: baseStyle.marginLeft(5),
        marginBottom: baseStyle.marginBottom(1)
    },
    numtxt: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(8),
        fontWeight: "500",
    },
    mobileNumTxtRight: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontWeight: "700",
        marginRight: baseStyle.marginRight(5)
    },
    mobileNumTxtLft: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontWeight: "700",
        marginLeft: baseStyle.marginLeft(5)
    }
});
