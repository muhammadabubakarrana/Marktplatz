import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import disco from "../assets/images/disco/disco.png";
import { baseStyle, theme } from "../config";
import { SpecialScrollView, SpecialView } from 'react-native-scroll-to-element';


export const RechtlichContainertwo = () => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    const myRef = useRef();
    return (
        // <SpecialScrollView>

        <SpecialScrollView style={[styles.metashooterContainer]}>

            <Text style={[styles.mainHeading, isSmallDevice && styles.mobilemainHeading, { alignSelf: "center" }]} >Metashooters</Text>
            <Text style={[styles.subHeading, isSmallDevice && styles.mobilesubHeading, { alignSelf: "center" }]} >Sammle deine Stars!</Text>
            <View style={[styles.imageContainer, isSmallDevice && styles.mobileimageContainer]}>
                <Image
                    source={disco}
                    style={[styles.disco, isSmallDevice && styles.mobiledisco]} />
                <View style={[styles.whiteContainer, isSmallDevice && styles.mobilewhiteContainer]} >

                    <>
                        <TouchableOpacity onPress={() => myRef.current.focus()} style={[styles.collectingBtn, isSmallDevice && styles.mobilecollectingBtn]} >
                            <Text style={styles.authTxt} >Datenschutz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.collectingBtn, isSmallDevice && styles.mobilecollectingBtn]} >
                            <Text style={styles.authTxt} >AGB</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.collectingBtn, isSmallDevice && styles.mobilecollectingBtn]} >
                            <Text style={styles.authTxt} >Impressum</Text>
                        </TouchableOpacity>
                    </>
                </View>
            </View>

            {/* 1st Text Container */}
            <View style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
                <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >Impressum</Text>
                <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
            </View>
            {/* 2 Text Container */}
            <View style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
                <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >AGB</Text>
                <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
            </View>
            {/* 3 Text Container */}
            <SpecialView ref={myRef} style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
                <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >Datenschutz</Text>
                <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
            </SpecialView>
        </SpecialScrollView>



    );
};

const styles = StyleSheet.create({
    metashooterContainer: {
        backgroundColor: theme.colors.black,
        paddingBottom: baseStyle.paddingBottom(70),
        // alignItems: "center",
        paddingTop: baseStyle.paddingTop(25),
        flex: 1,
        //height: 5000 //Dimensions.get("window").height        
        // justifyContent: "center"
    },
    mainHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(42),
        lineHeight: baseStyle.lineHight(22),
        fontFamily: theme.font.Bold
    },
    mobilemainHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(27),
        lineHeight: baseStyle.lineHight(22),
        fontWeight: "800"
    },
    imageContainer: {
        width: "100%",
        alignItems: "center"
    },
    mobileimageContainer: {
        width: "100%",
        alignItems: "center"
    },
    authTxt: {
        color: theme.colors.white,
        textAlign: "center",
        //fontFamily: theme.font.extraBold,
        // fontWeight: "bold",
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36)
    },
    subHeading: {
        color: theme.colors.lightGrey,
        fontSize: baseStyle.fontSize(22),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.Bold,
        marginTop: baseStyle.marginTop(10),
        // flexDirection: 'row',
        //  marginLeft: baseStyle.marginLeft(-55),  
    },
    mobilesubHeading: {
        color: theme.colors.lightGrey,
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36),
        fontWeight: "700",
        //marginTop: baseStyle.marginTop(20),
    },
    disco: {
        width: "70%",//baseStyle.width(675),
        height: baseStyle.height(450),
        paddingTop: baseStyle.paddingTop(330),
        borderRadius: baseStyle.borderRadius(25),
        alignItems: "center"
        // borderBottomLeftRadius: baseStyle.borderBottomLeftRadius(25),
        // borderBottomRightRadius: baseStyle.borderBottomRightRadius(25)
    },
    mobiledisco: {
        width: "90%",//baseStyle.width(675),
        // height: baseStyle.height(450),
        paddingTop: baseStyle.paddingTop(330),
        borderRadius: baseStyle.borderRadius(25),
        alignItems: "center"
    },
    whiteContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: baseStyle.borderRadius(24),
        // height: baseStyle.height(120),
        alignItems: "center",
        // justifyContent: "center",
        // alignSelf: "center",
        width: "70%",
        paddingBottom: baseStyle.paddingBottom(14),
        paddingTop: baseStyle.paddingTop(4),
        alignSelf: "center",
        position: "absolute",
        bottom: 0
    },
    mobilewhiteContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: baseStyle.borderRadius(24),
        // height: baseStyle.height(120),
        alignItems: "center",
        // justifyContent: "center",
        // alignSelf: "center",
        width: "90%",
        paddingBottom: baseStyle.paddingBottom(14),
        paddingTop: baseStyle.paddingTop(4),
        alignSelf: "center",
        position: "absolute",
        bottom: 0
    },
    txtContainer: {
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    mobiletxtContainer: {
        paddingHorizontal: baseStyle.paddingHorizontal(17),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    txtHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(29),
        lineHeight: baseStyle.lineHight(18),
        // fontFamily: theme.font.Bold,
        textAlign: "center",
        fontWeight: "bold",
    },
    mobiletxtHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(27),
        lineHeight: baseStyle.lineHight(42),
        //fontFamily: theme.font.Bold,
        textAlign: "center",
        fontWeight: "800",
    },
    txtPara: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(14),
        // fontFamily: theme.font.Bold,
        textAlign: "left",
        //fontWeight: "bold",
        marginTop: baseStyle.marginTop(30),
        opacity: 0.8
    },
    mobiletxtPara: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(11),
        lineHeight: baseStyle.lineHight(17),
        // fontFamily: theme.font.Bold,
        textAlign: "left",
        fontWeight: "500",
        marginTop: baseStyle.marginTop(30),
        opacity: 0.8
    },
    collectingBtn: {
        borderRadius: baseStyle.borderRadius(25),
        //paddingVertical: baseStyle.paddingVertical(3),
        paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        color: theme.colors.white,
        textAlign: "center",
        width: "40%",
        fontFamily: theme.font.extraBold,
        minWidth: baseStyle.minWidth(120),
        marginTop: baseStyle.marginTop(10)
    },
    mobilecollectingBtn: {
        borderRadius: baseStyle.borderRadius(25),
        // paddingVertical: baseStyle.paddingVertical(3),
        // paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        color: theme.colors.white,
        textAlign: "center",
        width: "90%",
        fontFamily: theme.font.extraBold,
        minWidth: baseStyle.minWidth(120),
        marginTop: baseStyle.marginTop(10)
    },
})

