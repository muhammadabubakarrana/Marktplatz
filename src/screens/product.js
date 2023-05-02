import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AboutCollectable, DetailsList, FloorPricesList, Footer, MarketPlaceList, MobileFooter, MobileNavigation, NavigationContainer, PercentList, ProductImage, ProgressList } from '../components';
import { baseStyle, theme } from '../config';
import lower from "../assets/images/lower/lower.png";
import upper from "../assets/images/upper/upper.png";
import grid from "../assets/images/grid/grid.png";
import dotts from "../assets/images/dotts/dotts.png";
import next from "../assets/images/next/next.png";

export const Product = () => {
    const data = [
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
        {
            num: "$0.99",
            price: "$4.99",
            date: "12/15/2022",
            edition: "77 of 110"
        },
    ];
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <>
            {/* Navigation Container */}
            {isSmallDevice ? (<MobileNavigation />) : (<NavigationContainer />)}

            {/* Product details */}
            <ProductImage />

            {/* About Collectable Section */}
            <AboutCollectable />

            {/* MarketPlace Details */}
            <View style={[styles.container, isSmallDevice && styles.mobileContainer]} >
                <Text Text style={[styles.heading, isSmallDevice && styles.mobileheading]} >In the marketplace</Text >
                {/* Conditional */}
                {isSmallDevice
                    ? (
                        // <View style={styles.mobileHeaderFlex} >
                        <>
                            <View style={styles.mobileFlexUpper} >
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.mobilebgImg}>
                                        <Image source={grid} style={styles.mobilegrid} />
                                    </View>
                                    <Image source={dotts} style={styles.mobiledotts} />
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text Text style={{ ...styles.mobileheadingThree, marginHorizontal: baseStyle.marginHorizontal(10) }} >SORT BY</Text >
                                    <TouchableOpacity style={styles.mobilesortBtn} >
                                        <Text Text style={styles.mobileheadingThree} >Price Low-High</Text >
                                        <View style={styles.rowFlex} >
                                            <Image source={upper} style={styles.mobileUpper} />
                                            <Image source={lower} style={styles.mobileLower} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.mobileFlex}>
                                <Text Text style={styles.mobileheadingOne} >For Sale (14)</Text >
                                <Text Text style={styles.mobileheadingTwo} >Sold(38)</Text >
                            </View>
                            {/* </View> */}
                        </>

                    )
                    : (<View style={styles.headerFlex} >
                        <View style={styles.flex}>
                            <Text Text style={styles.headingOne} >For Sale (14)</Text >
                            <Text Text style={styles.headingTwo} >Sold(38)</Text >
                        </View>
                        <View style={styles.flex} >
                            <View style={styles.bgImg}>
                                <Image source={grid} style={styles.grid} />
                            </View>
                            <Image source={dotts} style={styles.dotts} />
                            <Text Text style={{ ...styles.headingThree, marginHorizontal: baseStyle.marginHorizontal(10) }} >SORT BY</Text >
                            <TouchableOpacity style={styles.sortBtn} >
                                <Text Text style={styles.headingThree} >Price Low-High</Text >
                                <View style={styles.rowFlex} >
                                    <Image source={upper} style={styles.upper} />
                                    <Image source={lower} style={styles.lower} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>)
                }
                {/* row */}
                {/* <View style={styles.spaceEvenly}>
                    <Text style={{ ...styles.headingThree, opacity: 0.9, marginLeft: baseStyle.marginLeft(70) }}>NAME</Text>
                    <Text style={{ ...styles.headingThree, opacity: 0.9, marginLeft: baseStyle.marginLeft(140) }}>PRICE</Text>
                    <Text style={{ ...styles.headingThree, opacity: 0.9, marginLeft: baseStyle.marginLeft(70) }}>LIST DATE</Text>
                    <Text style={{ ...styles.headingThree, opacity: 0.9, marginLeft: baseStyle.marginLeft(70) }}>EDITION</Text>
                </View> */}
                {/* MarketPlace LIst */}
                <MarketPlaceList data={data} />
                {/* Next Pages Container */}
                <View style={styles.nextContainer} >
                    <View style={[styles.box, isSmallDevice && styles.mobileBox]}>
                        <Text style={[styles.num, isSmallDevice && styles.mobilenum]} >1</Text>
                    </View>
                    <Text style={[{ ...styles.num, marginHorizontal: baseStyle.marginHorizontal(10) }, isSmallDevice && styles.mobilenum]}> of 2</Text>
                    <TouchableOpacity>
                        <Image source={next} style={[styles.next, isSmallDevice && styles.mobilenext]} />
                    </TouchableOpacity>
                </View>

            </View>


            {/* Footer */}
            {isSmallDevice ? (<MobileFooter />) : (<Footer />)}
        </>
    );
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    mobileContainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(13),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    headerFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: baseStyle.marginVertical(20)
    },
    mobileHeaderFlex: {
        flexDirection: "column",
        marginVertical: baseStyle.marginVertical(20)
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: "center"
    },
    mobileFlexUpper: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: baseStyle.marginBottom(16),
        marginTop: baseStyle.marginTop(32),
        justifyContent: "space-between"
    },
    mobileFlex: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: baseStyle.marginVertical(10)
    },
    spaceEvenly: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: baseStyle.marginTop(16)
    },
    headingOne: {
        color: theme.colors.red,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(16),
        fontWeight: "600",
        borderBottomColor: theme.colors.red,
        borderBottomWidth: 2,
        paddingBottom: baseStyle.paddingBottom(4)
    },
    mobileheadingOne: {
        color: theme.colors.red,
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(24),
        fontWeight: "700",
        borderBottomColor: theme.colors.red,
        borderBottomWidth: 2,
        paddingBottom: baseStyle.paddingBottom(18)
    },
    headingTwo: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(16),
        fontWeight: "600",
        marginLeft: baseStyle.marginLeft(20)
    },
    mobileheadingTwo: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(24),
        fontWeight: "700",
        marginLeft: baseStyle.marginLeft(20),
        borderBottomColor: theme.colors.white,
        borderBottomWidth: 2,
        paddingBottom: baseStyle.paddingBottom(18)
    },
    headingThree: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(13),
        fontWeight: "500",
    },
    mobileheadingThree: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(13),
        lineHeight: baseStyle.lineHight(16),
        fontWeight: "700",
    },
    heading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(32),
        lineHeight: baseStyle.lineHight(32),
        fontWeight: "bold",
        textAlign: "center",
        // textDecorationLine: "underline",
        // textDecorationStyle: "solid",
        // textDecorationColor: 'green',
        // paddingBottom: 10
        // marginVertical: baseStyle.marginVertical(20)
    },
    mobileheading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(27),
        lineHeight: baseStyle.lineHight(22),
        fontWeight: "800",
        textAlign: "center",
    },
    grid: {
        height: baseStyle.height(10),
        width: baseStyle.width(15),
    },
    mobilegrid: {
        height: baseStyle.height(20),
        width: baseStyle.width(16),
    },
    dotts: {
        height: baseStyle.height(14),
        width: baseStyle.width(15),
        marginRight: baseStyle.marginRight(10)
    },
    mobiledotts: {
        height: baseStyle.height(26),
        width: baseStyle.width(16),
        // marginRight: baseStyle.marginRight(31)
    },
    bgImg: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: baseStyle.paddingHorizontal(5),
        paddingVertical: baseStyle.paddingVertical(5),
        marginRight: baseStyle.marginRight(10)
    },
    mobilebgImg: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: baseStyle.paddingHorizontal(5),
        paddingVertical: baseStyle.paddingVertical(10),
        marginRight: baseStyle.marginRight(12)
    },
    sortBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.colors.lightBlack,
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        paddingVertical: baseStyle.paddingVertical(5),
        borderRadius: baseStyle.borderRadius(5),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.white
    },
    mobilesortBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.colors.lightBlack,
        paddingHorizontal: baseStyle.paddingHorizontal(13),
        paddingVertical: baseStyle.paddingVertical(7),
        borderRadius: baseStyle.borderRadius(5),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.white
    },
    rowFlex: {
        flexDirection: "column",
        marginLeft: baseStyle.marginLeft(17)
    },
    upper: {
        height: baseStyle.height(3),
        width: baseStyle.width(5),
        marginBottom: baseStyle.marginBottom(2)
    },
    mobileUpper: {
        height: baseStyle.height(6.38),
        width: baseStyle.width(3.74),
        marginBottom: baseStyle.marginBottom(2.8)
    },
    lower: {
        height: baseStyle.height(3),
        width: baseStyle.width(5),
    },
    mobileLower: {
        height: baseStyle.height(6.38),
        width: baseStyle.width(3.74),
        marginBottom: baseStyle.marginBottom(2.8)
    },
    nextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: baseStyle.marginVertical(30)
    },
    box: {
        backgroundColor: theme.colors.thirdBlack,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: baseStyle.paddingVertical(5),
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        borderRadius: baseStyle.borderRadius(5)
    },
    mobileBox: {
        backgroundColor: theme.colors.thirdBlack,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: baseStyle.paddingVertical(10),
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        borderRadius: baseStyle.borderRadius(5)
    },
    num: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(9),
        lineHeight: baseStyle.lineHight(9),
        fontWeight: "500",
    },
    mobilenum: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(14.52),
        fontWeight: "700",
    },
    next: {
        height: baseStyle.height(12),
        width: baseStyle.width(16),
    },
    mobilenext:{
        height: baseStyle.height(15.39),
        width: baseStyle.width(16),
    }

});
