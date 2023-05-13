import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, Platform } from "react-native";
import { Footer, MobileFooter, MobileNavigation, MyScrollView, NavigationContainer, Wrapper } from '../components';
import disco from "../assets/images/disco/disco.png";
import { baseStyle, theme } from "../config";
import { SpecialScrollView, SpecialView } from 'react-native-scroll-to-element';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';


export const Rechtlich = () => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    const smallForNav = Dimensions.get("window").width < 910;
    const myRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(Platform.OS === 'android' || Platform.OS === 'ios');
    }, []);

    return (
        <>
            <Wrapper>
                <MyScrollView showsVerticalScrollIndicator={false} >
                    {/* <Wrapper > */}
                    {/*  Navigation Container */}
                    {isMobile || smallForNav ? (<MobileNavigation />) : (<NavigationContainer />)}

                    {/* // Metashooters Container */}


                    <View style={[styles.metashooterContainer]}>

                        <Text style={[styles.mainHeading, isSmallDevice && styles.mobilemainHeading, { alignSelf: "center" }]} >Metashooters</Text>
                        <Text style={[styles.subHeading, isSmallDevice && styles.mobilesubHeading, { alignSelf: "center" }]} >Sammle deine Stars!</Text>
                        <View style={[styles.imageContainer, isSmallDevice && styles.mobileimageContainer]}>
                            <Image
                                source={disco}
                                style={[styles.disco, isSmallDevice && styles.mobiledisco]} />
                            <View style={[styles.whiteContainer, isSmallDevice && styles.mobilewhiteContainer]} >

                                <>
                                    {/* onPress={() => myRef.current.focus()} */}
                                    <TouchableOpacity onPress={() => myRef.current.focus()} style={[styles.collectingBtn, isSmallDevice && styles.mobilecollectingBtn]} >
                                        <Text style={styles.authTxt} >Datenschutz</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => thirdRef.current.focus()} style={[styles.collectingBtn, isSmallDevice && styles.mobilecollectingBtn]} >
                                        <Text style={styles.authTxt} >AGB</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => secondRef.current.focus()} style={[styles.collectingBtn, isSmallDevice && styles.mobilecollectingBtn]} >
                                        <Text style={styles.authTxt} >Impressum</Text>
                                    </TouchableOpacity>
                                </>
                            </View>
                        </View>

                        {/* 1st Text Container */}
                        <SpecialView ref={secondRef} style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
                            <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >Impressum</Text>
                            <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
                        </SpecialView>
                        {/* 2 Text Container */}
                        <SpecialView ref={thirdRef} style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
                            <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >AGB</Text>
                            <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
                        </SpecialView>
                        {/* 3 Text Container */}
                        {/* ref={myRef} */}
                        <SpecialView ref={myRef} style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
                            <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >Datenschutz</Text>
                            <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
                        </SpecialView>
                    </View >

                    {/* </Wrapper> */}


                    {/* Footer */}
                    {isMobile || smallForNav ? (<MobileFooter />) : (<Footer />)}
                </MyScrollView>
            </Wrapper>
            {/* <MobileFooter /> */}

        </>
    );
};

const styles = StyleSheet.create({
    metashooterContainer: {
        backgroundColor: theme.colors.black,
        paddingBottom: RFValue(70),
        // alignItems: "center",
        paddingTop: RFValue(25),
        //height: 25000,
        //flex: 1
        //height: 5000 //Dimensions.get("window").height
        // justifyContent: "center"
    },
    mainHeading: {
        color: theme.colors.white,
        fontSize: RFValue(42),
        lineHeight: RFValue(22),
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
        fontSize: RFValue(17),
        lineHeight: RFValue(36)
    },
    subHeading: {
        color: theme.colors.lightGrey,
        fontSize: RFValue(22),
        lineHeight: RFValue(15),
        fontFamily: theme.font.Bold,
        marginTop: RFValue(10),
        // flexDirection: 'row',
        //  marginLeft: baseStyle.marginLeft(-55),
    },
    mobilesubHeading: {
        color: theme.colors.lightGrey,
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36),
        fontWeight: "700",
        //marginTop: RFValue(20),
    },
    disco: {
        width: "70%",//baseStyle.width(675),
        height: RFValue(450),
        paddingTop: RFValue(330),
        borderRadius: RFValue(25),
        alignItems: "center"
        // borderBottomLeftRadius: baseStyle.borderBottomLeftRadius(25),
        // borderBottomRightRadius: baseStyle.borderBottomRightRadius(25)
    },
    mobiledisco: {
        width: "90%",//baseStyle.width(675),
        // height: RFValue(450),
        paddingTop: baseStyle.paddingTop(330),
        borderRadius: baseStyle.borderRadius(25),
        alignItems: "center"
    },
    whiteContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: RFValue(24),
        // height: RFValue(120),
        alignItems: "center",
        // justifyContent: "center",
        // alignSelf: "center",
        width: "70%",
        paddingBottom: RFValue(14),
        paddingTop: RFValue(4),
        alignSelf: "center",
        position: "absolute",
        bottom: 0
    },
    mobilewhiteContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: baseStyle.borderRadius(24),
        // height: RFValue(120),
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
        paddingHorizontal: RFValue(30),
        paddingVertical: RFValue(30)
    },
    mobiletxtContainer: {
        paddingHorizontal: baseStyle.paddingHorizontal(17),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    txtHeading: {
        color: theme.colors.white,
        fontSize: RFValue(29),
        lineHeight: RFValue(18),
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
        fontSize: RFValue(17),
        lineHeight: RFValue(14),
        // fontFamily: theme.font.Bold,
        textAlign: "left",
        //fontWeight: "bold",
        marginTop: RFValue(30),
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
        borderRadius: RFValue(25),
        //paddingVertical: RFValue(3),
        paddingHorizontal: RFValue(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        color: theme.colors.white,
        textAlign: "center",
        width: "40%",
        fontFamily: theme.font.extraBold,
        minWidth: RFValue(120),
        marginTop: RFValue(10)
    },
    mobilecollectingBtn: {
        borderRadius: baseStyle.borderRadius(25),
        // paddingVertical: RFValue(3),
        // paddingHorizontal: RFValue(20),
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
});








