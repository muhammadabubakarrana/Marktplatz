import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import block from "../assets/images/block/block.png";
import { baseStyle, theme } from "../config";
import phoneSize from "../assets/images/phoneSize/phoneSize.png"
import { RFValue } from 'react-native-responsive-fontsize';

export const ContainerTwo = () => {
    const isSmallDevice = Dimensions.get('window').width < 800;

    return (
        <>
            {/* 1st Block */}

            <View style={styles.main} >
                <Text style={[styles.mainHeading, isSmallDevice && styles.mobilemainHeading]} >Wie funktionierts?</Text>
                <View style={[styles.block, isSmallDevice && styles.mobileblock]} >
                    <View style={styles.txtBlock} >
                        <View style={[styles.rowNumber, isSmallDevice && styles.mobileRowNumber]}>
                            <Text style={[styles.number, isSmallDevice && styles.mobileNumber]} >1</Text>
                        </View>
                        <Text style={[styles.blockHeading, isSmallDevice && styles.mobileblockHeading]}>Finde deinen Lieblingsstar!</Text>
                        <Text style={[styles.blockPara, isSmallDevice && styles.mobileblockPara]}>Geburtstage, Meilensteine oder auch ein wohlverdienter Roast, der perfekte Promi dafür ist nur eine Suche entfernt. Finde deine(n) und frage sie/ihn an.</Text>
                    </View>
                    {isSmallDevice
                        ? (<Image source={phoneSize} style={styles.mobilelogoBlock} resizeMode='contain' />)
                        : (<Image source={block} style={styles.logoBlock} resizeMode='contain' />)}
                </View>

                {/* 2nd Block */}


                <View style={[styles.block, isSmallDevice && styles.mobileblock]} >
                    {
                        isSmallDevice
                            ? (<Image source={phoneSize} style={styles.mobilelogoBlock} resizeMode='contain' />)
                            : (<Image source={block} style={{ ...styles.logoBlock }} resizeMode='contain' />)}
                    <View style={styles.txtBlock} >
                        <View style={[styles.rowNumber, isSmallDevice && styles.mobileRowNumber]}>
                            <Text style={[styles.number, isSmallDevice && styles.mobileNumber]} >2</Text>
                        </View>
                        <Text style={[styles.blockHeading, isSmallDevice && styles.mobileblockHeading]}>Finde deinen Lieblingsstar!</Text>
                        <Text style={[styles.blockPara, isSmallDevice && styles.mobileblockPara]}>Geburtstage, Meilensteine oder auch ein wohlverdienter Roast, der perfekte Promi dafür ist nur eine Suche entfernt. Finde deine(n) und frage sie/ihn an.</Text>
                    </View>


                </View >

                {/* 3rd Block */}

                <View style={[styles.block, isSmallDevice && styles.mobileblock]} >
                    <View style={styles.txtBlock} >
                        <View style={[styles.rowNumber, isSmallDevice && styles.mobileRowNumber]}>
                            <Text style={[styles.number, isSmallDevice && styles.mobileNumber]} >3</Text>
                        </View>
                        <Text style={[styles.blockHeading, isSmallDevice && styles.mobileblockHeading]}>Finde deinen Lieblingsstar!</Text>
                        <Text style={[styles.blockPara, isSmallDevice && styles.mobileblockPara]}>Geburtstage, Meilensteine oder auch ein wohlverdienter Roast, der perfekte Promi dafür ist nur eine Suche entfernt. Finde deine(n) und frage sie/ihn an.</Text>
                    </View>
                    {isSmallDevice
                        ? (<Image source={phoneSize} style={styles.mobilelogoBlock} resizeMode='contain' />)
                        : (<Image source={block} style={{ ...styles.logoBlock }} resizeMode='contain' />)}
                </View>

            </View >

        </>

    );
};



const styles = StyleSheet.create({
    main: {
        backgroundColor: theme.colors.black,
        width: "100%",
        paddingBottom: RFValue(35),
        alignItems: "center",
        justifyContent: "space-around"
        // justifyContent: "center",
        // flexWrap: "wrap",
        // paddingHorizontal: baseStyle.paddingHorizontal(15)
    },
    mainHeading: {
        fontSize: RFValue(22),
        color: theme.colors.white,
        lineHeight: RFValue(22),
        //marginBottom: RFValue(35),
        fontWeight: "800",
        marginBottom: RFValue(50)
    },
    mobilemainHeading: {
        fontSize: baseStyle.fontSize(17),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(42),
        fontWeight: "800"
    },
    rowNumber: {
        width: RFValue(30),
        height: RFValue(30),
        backgroundColor: theme.colors.pink,
        borderRadius: RFValue(30 / 2),
        borderWidth: baseStyle.borderWidth(2),
        // borderColor: theme.colors.blue,
        // marginRight: baseStyle.marginRight(9),
        // marginLeft: baseStyle.marginLeft(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
    mobileRowNumber: {
        width: RFValue(22),
        height: RFValue(22),
        backgroundColor: theme.colors.pink,
        borderRadius: RFValue(22 / 2),
        borderWidth: baseStyle.borderWidth(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: RFValue(11),
        lineHeight: RFValue(27),
        fontWeight: "700",
        color: theme.colors.white,
    },
    mobileNumber: {
        fontSize: RFValue(11),
        lineHeight: RFValue(10),
        fontWeight: "700",
        color: theme.colors.white,
    },
    mobileblockHeading: {
        fontSize: RFValue(17),
        lineHeight: RFValue(20),
        fontWeight: "800",
        color: theme.colors.white,
        //marginVertical: RFValue(10),
        textAlign: "left"
    },
    blockHeading: {
        fontSize: RFValue(14),
        lineHeight: RFValue(22),
        //fontFamily: theme.font.regular,
        color: theme.colors.white,
        marginVertical: RFValue(10),
        textAlign: "left",
        fontWeight: "800"
    },
    blockPara: {
        fontSize: RFValue(15),
        lineHeight: RFValue(20),
        // fontFamily: theme.font.regular,
        color: theme.colors.white,
        textAlign: "left",
        numberOfLines: 6,
        fontWeight: "700",
        opacity: 0.7
    },
    mobileblockPara: {
        fontSize: baseStyle.fontSize(11),
        lineHeight: baseStyle.lineHight(17),
        fontWeight: "700",
        color: theme.colors.white,
        textAlign: "left",
        opacity: 0.9
    },
    block: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "75%",
        marginBottom: RFValue(15)
        //paddingHorizontal: RFValue(50)
    },
    mobileblock: {
        flexDirection: "row",
        alignItems: "center",
        width: "75%",
        justifyContent: "space-around",
        marginBottom: baseStyle.marginBottom(15)
        // paddingHorizontal: baseStyle.paddingHorizontal(8)
    },
    txtBlock: {
        //  width: RFValue(499),
        width: "45%",
        marginHorizontal: RFValue(10)
    },
    logoBlock: {
        height: RFValue(155),
        width: RFValue(250),
        // marginLeft: baseStyle.marginLeft(-110)
    },
    mobilelogoBlock: {
        height: baseStyle.height(250),
        width: baseStyle.width(140),
    },
});

