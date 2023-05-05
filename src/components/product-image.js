import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { baseStyle, theme } from '../config';
import art from "../assets/images/art/art.png";
import artleft from "../assets/images/artleft/artleft.png";
import artright from "../assets/images/artright/artright.png";
import vector from "../assets/images/vector/vector.png";
import { DynamicImages } from './dynamic-images';

export const ProductImage = () => {
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (
        <>

            <View style={styles.container}>
                <Text style={[styles.mainHeading, isSmallDevice && styles.mobilemainHeading]} >Collectionname #ID</Text>
                <Text style={[styles.subHeading, isSmallDevice && styles.mobilesubHeading]} >Star Name</Text>
                <View style={styles.flexContainer}>
                    <View style={[styles.artContainer, isSmallDevice && styles.mobileartContainer]}>
                        {/* <Image source={art} style={[styles.art, isSmallDevice && styles.mobileart]} />
                        <Image source={artleft} style={[styles.artleft, isSmallDevice && styles.mobileartleft]} />
                        <Image source={artright} style={[styles.artright, isSmallDevice && styles.mobileartright]} /> */}
                        <DynamicImages />
                    </View>
                    <View style={styles.details}>
                        <View style={[styles.green, isSmallDevice && styles.mobilegreen]}>
                            <Text style={[styles.hone, isSmallDevice && styles.mobilehone]}>UNCOMMON</Text>
                        </View>
                        <Text style={[styles.htwo, isSmallDevice && styles.mobilehtwo]}>Trea Turner</Text>
                        <Text style={[styles.hthree, isSmallDevice && styles.mobilehthree]}>2022 All-Star ICONs</Text>
                        <View style={styles.row} >
                            <Image source={vector} style={[styles.vector, isSmallDevice && styles.mobilevector]} />
                            <Text style={[styles.hfour, isSmallDevice && styles.mobilehfour]}>Los Angeles Dodgers {"\n"}#6 | Second Base</Text>
                        </View>
                        <Text style={[styles.hfive, isSmallDevice && styles.mobilehfive]}>Player Bio</Text>
                        <View style={styles.flexContent}>
                            <View style={styles.rowFlex}>
                                <View >
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehsix]}>BATS / THROWS:</Text>
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehsix]}>HEIGHT / WEIGHT:</Text>
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehsix]}>AGE:</Text>
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehsix]}>DATE BORN:</Text>
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehsix]}>HOMETOWN:</Text>
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehsix]}>SIGNED:</Text>
                                </View>
                                <View style={[{ marginLeft: baseStyle.marginLeft(20) }, { ...isSmallDevice && styles.mobileMarginBottom }]}>
                                    <Text style={[{ ...styles.hseven, opacity: 0.9 }, isSmallDevice && styles.mobilehseven]}>RIGHT / RIGHT</Text>
                                    <Text style={[{ ...styles.hseven, opacity: 0.9 }, isSmallDevice && styles.mobilehseven]}>6' 1″ / 185</Text>
                                    <Text style={[{ ...styles.hseven, opacity: 0.9 }, isSmallDevice && styles.mobilehseven]}>29</Text>
                                    <Text style={[{ ...styles.hseven, opacity: 0.9 }, isSmallDevice && styles.mobilehseven]}>06/30/1993</Text>
                                    <Text style={[{ ...styles.hseven, opacity: 0.9 }, isSmallDevice && styles.mobilehseven]}>BOYNTON BEACH, FL</Text>
                                    <Text numberOfLines={3} style={[{ ...styles.hseven, opacity: 0.9 }, { ...isSmallDevice && styles.mobilehDifferseven }]}>SAN DIEGO PADRES, 2014, ROUND: 1, PICK: 13</Text>
                                </View>
                            </View>


                            <View style={[{ ...styles.rowFlex, marginVertical: baseStyle.marginVertical(10) }, { ...isSmallDevice && styles.mobileMarginTop }]}>
                                <View >
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehBigsix]}>LOWEST ASK</Text>
                                    <Text style={[styles.hseven, isSmallDevice && styles.mobilehBigseven]}>$4.50</Text>
                                </View>
                                <View style={{ marginLeft: baseStyle.marginLeft(45) }} >
                                    <Text style={[styles.hsix, isSmallDevice && styles.mobilehBigsix]}>EDITION #</Text>
                                    <Text style={[styles.hseven, isSmallDevice && styles.mobilehBigseven]}>114 of 117</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={[styles.btn1, isSmallDevice && styles.mobileBtn1]}>
                                <Text style={[{ ...styles.hone, textAlign: "center" }, isSmallDevice && styles.mobilehBigOne]}>Get It Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn2, isSmallDevice && styles.mobileBtn2]}>
                                <Text style={[{ ...styles.hone, textAlign: "center" }, isSmallDevice && styles.mobilehBigOne]}>Get It Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
            {/* <Footer /> */}
        </>
    );
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        paddingVertical: baseStyle.paddingVertical(20),
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        backgroundColor: theme.colors.black,
        // paddingHorizontal: baseStyle.paddingHorizontal(50)
        // alignItems: "center",
        height: "auto"
    },
    art: {
        height: baseStyle.height(223), //height / 1.6,//baseStyle.height(300),
        width: baseStyle.width(223), //"55%" ,//width / 3.5,//baseStyle.width(300),
        position: "absolute",
        left: 120,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
    },
    mobileart: {
        height: baseStyle.height(220), //height / 1.6,//baseStyle.height(300),
        width: baseStyle.width(170), //"55%" ,//width / 3.5,//baseStyle.width(300),
        position: "absolute",
        left: 70,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    artleft: {
        height: baseStyle.height(133), //height / 2.9,//baseStyle.height(150),
        width: baseStyle.width(133), //"33%",//width / 5.5, //baseStyle.width(150),
        position: "absolute",
        left: 20,
        top: 290,
        right: 0,
        bottom: 0,
    },
    mobileartleft: {
        height: baseStyle.height(125), //height / 2.9,//baseStyle.height(150),
        width: baseStyle.width(95), //"33%",//width / 5.5, //baseStyle.width(150),
        position: "absolute",
        left: 20,
        top: 110,
        right: 0,
        bottom: 0,
    },
    artright: {
        height: baseStyle.height(133), //height / 2.9,//baseStyle.height(150),
        width: baseStyle.width(133),//"33%",//width / 5.5,// baseStyle.width(150),
        position: "absolute",
        left: 390,
        top: 290,
        right: 0,
        bottom: 0,
    },
    mobileartright: {
        height: baseStyle.height(125), //height / 2.9,//baseStyle.height(150),
        width: baseStyle.width(95),//"33%",//width / 5.5,// baseStyle.width(150),
        position: "absolute",
        left: 200,
        top: 110,
        right: 0,
        bottom: 0,
    },
    mainHeading: {
        fontWeight: "bold",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(32),
        lineHeight: baseStyle.lineHight(18),
        textAlign: "center",
    },
    mobilemainHeading: {
        fontWeight: "800",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(27),
        lineHeight: baseStyle.lineHight(22),
        textAlign: "center",
    },
    subHeading: {
        fontWeight: "bold",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(22),
        lineHeight: baseStyle.lineHight(18),
        textAlign: "center",
        opacity: 0.7,
        marginVertical: baseStyle.marginVertical(20)
    },
    mobilesubHeading: {
        fontWeight: "700",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36),
        textAlign: "center",
        opacity: 0.7,
        // marginVertical: baseStyle.marginVertical(20)
    },
    hone: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(9),
        lineHeight: baseStyle.lineHight(9),
    },
    mobilehone: {
        fontWeight: "700",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(20),
    },
    mobilehBigOne: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(24),
    },
    green: {
        backgroundColor: theme.colors.greenOne,
        padding: baseStyle.padding(2),
        borderRadius: baseStyle.borderRadius(2),
        width: baseStyle.width(79)
    },
    mobilegreen: {
        backgroundColor: theme.colors.greenOne,
        // padding: baseStyle.padding(2),
        borderRadius: baseStyle.borderRadius(4),
        marginBottom: baseStyle.marginBottom(12),
        width: baseStyle.width(85),

    },
    htwo: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(29),
    },
    mobilehtwo: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(36),
        lineHeight: baseStyle.lineHight(44),
        marginBottom: baseStyle.marginBottom(10)
    },
    hthree: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(14),
        opacity: 0.7
    },
    mobilehthree: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(18),
        lineHeight: baseStyle.lineHight(28),
        opacity: 0.7
    },
    hfour: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(14),
        marginLeft: baseStyle.marginLeft(15)
    },
    mobilehfour: {
        fontWeight: "400",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(24),
        lineHeight: baseStyle.lineHight(35),
        marginLeft: baseStyle.marginLeft(15)
    },
    hfive: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(14),
    },
    mobilehfive: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(18),
        lineHeight: baseStyle.lineHight(28),
        marginBottom: baseStyle.marginBottom(12)
    },
    hsix: {
        fontWeight: "300",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(9),
        lineHeight: baseStyle.lineHight(14),
        opacity: 0.8
    },
    mobilehsix: {
        fontWeight: "400",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(20),
        opacity: 0.8,
        marginBottom: baseStyle.marginBottom(8)
    },
    mobilehBigsix: {
        fontWeight: "400",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(24),
        opacity: 0.8
    },
    hseven: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(9),
        lineHeight: baseStyle.lineHight(14),
    },
    mobilehseven: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(20),
        marginBottom: baseStyle.marginBottom(8)
    },
    mobilehDifferseven: {
        fontWeight: "500",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(20),
        marginBottom: baseStyle.marginBottom(8),
        width: baseStyle.width(132)
    },
    mobilehBigseven: {
        fontWeight: "700",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(28),
    },
    flexContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    artContainer: {
        width: "55%",//width / 1.9,
        height: height / 1.2
    },
    mobileartContainer: {
        width: "55%",//width / 1.9,
        height: 250
    },
    details: {
        paddingHorizontal: baseStyle.paddingHorizontal(10),
       // width: "45%"
    },
    vector: {
        height: baseStyle.height(30),
        width: baseStyle.width(30),
    },
    mobilevector: {
        height: baseStyle.height(66),
        width: baseStyle.width(35),
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: baseStyle.marginVertical(20)
    },
    rowFlex: {
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: 'space-between',
    },
    flexContent: {
        marginVertical: baseStyle.marginVertical(5),

    },
    btn1: {
        backgroundColor: theme.colors.pink,
        width: "90%",
        paddingVertical: baseStyle.paddingVertical(5),
        borderRadius: baseStyle.borderRadius(6)
        //paddingHorizontal: baseStyle.paddingHorizontal(10)
    },
    mobileBtn1: {
        backgroundColor: theme.colors.pink,
        width: "100%",
        paddingVertical: baseStyle.paddingVertical(10),
        borderRadius: baseStyle.borderRadius(8),
        marginHorizontal: 20,
        marginTop: baseStyle.marginTop(14)
    },
    btn2: {
        borderColor: theme.colors.white,
        width: "90%",
        paddingVertical: baseStyle.paddingVertical(5),
        borderRadius: baseStyle.borderRadius(6),
        borderWidth: baseStyle.borderWidth(1),
        marginTop: baseStyle.marginTop(10)
    },
    mobileBtn2: {
        borderColor: theme.colors.white,
        width: "100%",
        paddingVertical: baseStyle.paddingVertical(10),
        borderRadius: baseStyle.borderRadius(8),
        borderWidth: baseStyle.borderWidth(1),
        marginTop: baseStyle.marginTop(18),
        marginHorizontal: 20
    },
    mobileMarginBottom: {
        marginBottom: baseStyle.marginBottom(-40)
    },
    mobileMarginTop: {
        marginTop: baseStyle.marginTop(55)
    }

});
