import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import block from "../assets/images/block/block.png";
import { baseStyle, theme } from "../config";
import phoneSize from "../assets/images/phoneSize/phoneSize.png"

export const ContainerTwo = () => {
    const isSmallDevice = Dimensions.get('window').width < 768;

    return (
        <>
            {/* 1st Block */}
            <View style={{backgroundColor: theme.colors.black}}>
                <View style={styles.main} >
                    <Text style={[styles.mainHeading, isSmallDevice && styles.mobilemainHeading]} >Wie funktionierts?</Text>
                    <View style={[styles.block, isSmallDevice && styles.mobileblock]} >
                        <View style={styles.txtBlock} >
                            <View style={[styles.rowNumber, isSmallDevice && styles.mobileRowNumber]}>
                                <Text style={styles.number} >1</Text>
                            </View>
                            <Text style={[styles.blockHeading, isSmallDevice && styles.mobileblockHeading]}>Finde deinen Lieblingsstar!</Text>
                            <Text style={[styles.blockPara, isSmallDevice && styles.mobileblockPara]}>Geburtstage, Meilensteine oder auch ein wohlverdienter Roast, der perfekte Promi dafür ist nur eine Suche entfernt. Finde deine(n) und frage sie/ihn an.</Text>
                        </View>
                        {isSmallDevice
                            ? (<Image source={phoneSize} style={styles.mobilelogoBlock} resizeMode='contain' />)
                            : (<Image source={block} style={styles.logoBlock} resizeMode='contain' />)}
                    </View>
                </View >
                {/* 2nd Block */}
                < View style={styles.main} >

                    <View style={[styles.block, isSmallDevice && styles.mobileblock]} >
                        {
                            isSmallDevice
                                ? (<Image source={phoneSize} style={styles.mobilelogoBlock} resizeMode='contain' />)
                                : (<Image source={block} style={{ ...styles.logoBlock }} resizeMode='contain' />)}
                        <View style={styles.txtBlock} >
                            <View style={[styles.rowNumber, isSmallDevice && styles.mobileRowNumber]}>
                                <Text style={styles.number} >2</Text>
                            </View>
                            <Text style={[styles.blockHeading, isSmallDevice && styles.mobileblockHeading]}>Finde deinen Lieblingsstar!</Text>
                            <Text style={[styles.blockPara, isSmallDevice && styles.mobileblockPara]}>Geburtstage, Meilensteine oder auch ein wohlverdienter Roast, der perfekte Promi dafür ist nur eine Suche entfernt. Finde deine(n) und frage sie/ihn an.</Text>
                        </View>


                    </View >
                </View >
                {/* 3rd Block */}
                <View style={styles.main} >
                    <View style={[styles.block, isSmallDevice && styles.mobileblock]} >
                        <View style={styles.txtBlock} >
                            <View style={[styles.rowNumber, isSmallDevice && styles.mobileRowNumber]}>
                                <Text style={styles.number} >3</Text>
                            </View>
                            <Text style={[styles.blockHeading, isSmallDevice && styles.mobileblockHeading]}>Finde deinen Lieblingsstar!</Text>
                            <Text style={[styles.blockPara, isSmallDevice && styles.mobileblockPara]}>Geburtstage, Meilensteine oder auch ein wohlverdienter Roast, der perfekte Promi dafür ist nur eine Suche entfernt. Finde deine(n) und frage sie/ihn an.</Text>
                        </View>
                        {isSmallDevice
                            ? (<Image source={phoneSize} style={styles.mobilelogoBlock} resizeMode='contain' />)
                            : (<Image source={block} style={{ ...styles.logoBlock }} resizeMode='contain' />)}
                    </View>

                </View >
            </View>
        </>

    );
};



const styles = StyleSheet.create({
    main: {
        backgroundColor: theme.colors.black,
        width: "100%",
        paddingBottom: baseStyle.paddingBottom(35),
        alignItems: "center",
        // justifyContent: "center",
        // flexWrap: "wrap",
        // paddingHorizontal: baseStyle.paddingHorizontal(15)
    },
    mainHeading: {
        fontSize: baseStyle.fontSize(22),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(22),
        //marginBottom: baseStyle.marginBottom(35),
        fontWeight: "800",
        marginBottom: baseStyle.marginBottom(50)
    },
    mobilemainHeading: {
        fontSize: baseStyle.fontSize(17),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(42),
        fontWeight: "800"
    },
    rowNumber: {
        width: baseStyle.width(30),
        height: baseStyle.height(23),
        backgroundColor: theme.colors.pink,
        borderRadius: baseStyle.borderRadius(30 / 2),
        borderWidth: baseStyle.borderWidth(2),
        // borderColor: theme.colors.blue,
        // marginRight: baseStyle.marginRight(9),
        // marginLeft: baseStyle.marginLeft(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
    mobileRowNumber: {
        width: baseStyle.width(48),
        height: baseStyle.height(48),
        backgroundColor: theme.colors.pink,
        borderRadius: baseStyle.borderRadius(48 / 2),
        borderWidth: baseStyle.borderWidth(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
        fontWeight: "700",
        color: theme.colors.white,
    },
    mobileblockHeading: {
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(20),
        fontWeight: "800",
        color: theme.colors.white,
        //marginVertical: baseStyle.marginVertical(10),
        textAlign: "left"
    },
    blockHeading: {
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.regular,
        color: theme.colors.white,
        marginVertical: baseStyle.marginVertical(10),
        textAlign: "left",
        fontWeight: "800"
    },
    blockPara: {
        fontSize: baseStyle.fontSize(15),
        lineHeight: baseStyle.lineHight(20),
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
        justifyContent: "space-between",
        paddingHorizontal: baseStyle.paddingHorizontal(150)
    },
    mobileblock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: baseStyle.paddingHorizontal(8)
    },
    txtBlock: {
        //  width: baseStyle.width(499),
        width: "55%",
        marginHorizontal: baseStyle.marginHorizontal(10)
    },
    logoBlock: {
        height: baseStyle.height(170),
        width: baseStyle.width(300),
        // marginLeft: baseStyle.marginLeft(-110)
    },
    mobilelogoBlock: {
        height: baseStyle.height(250),
        width: baseStyle.width(140),
    },
});

