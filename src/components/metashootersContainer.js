import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import disco from "../assets/images/disco/disco.png";
import { baseStyle, routes, theme } from "../config";
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const MetaShooterContainer = () => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    const navigation = useNavigation();
    const goToMarketPlace = () => {
        navigation.navigate(routes.MARKETPLACE)
    };

    return (
        <View style={styles.metashooterContainer}>
            <Text style={[styles.mainHeading, isSmallDevice && styles.mobilemainHeading]} >Metashooters</Text>
            <Text style={[styles.subHeading, isSmallDevice && styles.mobilesubHeading]} >Sammle deine Stars!</Text>
            {/* <ImageBackground
                source={disco}
                style={styles.disco} >
                <View style={styles.whiteContainer} >
                    <>
                        <Text style={styles.para}  >Greife auf Tausende Prominente zu und sammle einzigartige Karten deiner Stars!</Text>
                        <TouchableOpacity style={styles.collectingBtn} >
                            <Text style={styles.authTxt} >Start collecting!</Text>
                        </TouchableOpacity>
                    </>

                </View>
            </ImageBackground> */}
            <View style={[styles.imageContainer, isSmallDevice && styles.mobileImage]} >
                <Image source={disco} style={styles.img} resizeMode='contain' />
                <View style={[styles.whiteContainer, isSmallDevice && styles.mobileWhiteContainer]} >
                    <>
                        <Text style={[styles.para, isSmallDevice && styles.mobilepara]}  >Greife auf Tausende Prominente zu und sammle einzigartige Karten deiner Stars!</Text>
                        <TouchableOpacity onPress={goToMarketPlace} style={styles.collectingBtn} >
                            <Text style={styles.authTxt} >Start collecting!</Text>
                        </TouchableOpacity>
                    </>

                </View>
            </View>

        </View>
    );
};



const styles = StyleSheet.create({
    metashooterContainer: {
        width: "100%",
        backgroundColor: theme.colors.black,
        paddingBottom: RFValue(70),
        alignItems: "center",
        paddingTop: RFValue(35),
        justifyContent: "center"
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
    authTxt: {
        color: theme.colors.white,
        textAlign: "center",
        //fontFamily: theme.font.extraBold,
        fontWeight: "600",
        fontSize: RFValue(17),
        lineHeight: RFValue(36)
    },
    subHeading: {
        color: theme.colors.lightGrey,
        fontSize: RFValue(22),
        lineHeight: RFValue(15),
        fontFamily: theme.font.Bold,
        marginTop: RFValue(20),
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
    para: {
        color: theme.colors.black,
        fontSize: RFValue(22),
        lineHeight: RFValue(29),
        fontWeight: "600",
        textAlign: "center"
    },
    mobilepara: {
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36),
        fontWeight: "600",
        textAlign: "center"
    },
    collectingBtn: {
        borderRadius: RFValue(20),
        //paddingVertical: baseStyle.paddingVertical(3),
        paddingHorizontal: RFValue(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        color: theme.colors.white,
        textAlign: "center",
        width: "60%",
        fontFamily: theme.font.extraBold,
        minWidth: RFValue(120),
        marginTop: RFValue(10)
    },
    mobilecollectingBtn: {
        borderRadius: baseStyle.borderRadius(20),
        //paddingVertical: baseStyle.paddingVertical(3),
        paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        color: theme.colors.white,
        textAlign: "center",
        //width: "40%",
        fontFamily: theme.font.extraBold,
        minWidth: baseStyle.minWidth(120),
        marginTop: baseStyle.marginTop(10)
    },
    imageContainer: {
        alignItems: "center",
        width: "70%",
        // marginVertical: RFValue(5),
        height: RFValue(300)
    },
    mobileImage: {
        alignItems: "center",
        width: "90%",
        marginVertical: baseStyle.marginVertical(5),
        height: baseStyle.height(387)
    },
    img: {
        width: "100%",
        height: RFValue(300) //"auto"
    },
    whiteContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: RFValue(24),
        //     // height: RFValue(120),
        alignItems: "center",
        // minHeight: "20%",
        // minWidth: "35%",
        //     // justifyContent: "center",
        //     // alignSelf: "center",
        //     // width: "85%",
        paddingBottom: RFValue(7),
        paddingTop: RFValue(12),
        position: "absolute",
        bottom: 0,
        paddingHorizontal: RFValue(11)
    },
    mobileWhiteContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: baseStyle.borderRadius(25),
        //     // height: RFValue(120),
        alignItems: "center",
        minHeight: "20%",
        //maxHeight: "80%",
        // minWidth: "35%",
        //     // justifyContent: "center",
        //     // alignSelf: "center",
        //     // width: "85%",
        paddingBottom: baseStyle.paddingBottom(14),
        paddingTop: baseStyle.paddingTop(4),
        position: "absolute",
        bottom: 0,
        paddingHorizontal: baseStyle.paddingHorizontal(10)
    }
})

