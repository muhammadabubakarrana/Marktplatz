import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { DetailsList, FloorPricesList, Footer, NavigationContainer, PercentList, ProductImage, ProgressList } from '../components';
import { baseStyle, theme } from '../config';

export const AboutCollectable = () => {
    const data = [
        {
            num: "$0.99",
            txt: "gold",
            avg: "30-DAY AVG",
            numOne: "$0.75"
        },
        {
            num: "$0.99",
            txt: "gold",
            avg: "30-DAY AVG",
            numOne: "$0.75"
        },
        {
            num: "$0.99",
            txt: "gold",
            avg: "30-DAY AVG",
            numOne: "$0.75"
        },
        {
            num: "$0.99",
            txt: "gold",
            avg: "30-DAY AVG",
            numOne: "$0.75"
        },
    ];
    const listData = [
        {
            floorPrice: "Floor price",
            price: "$4.50",
            heading: "Owners",
            city: "ILATNO",
            priceOne: "01",
            percent: "09.23%",
        },
        {
            floorPrice: "Floor price",
            price: "$4.50",
            heading: "TRADE VOLUME",
            city: "ILATNO",
            priceOne: "$275.00",
            percent: "09.23%",
        },
        {
            floorPrice: "MINT DATE",
            price: "9/15/22",
            heading: "HIGHEST SALES",
            city: "ILATNO",
            priceOne: "$22.00",
            percent: "09.23%",
        },
    ];
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (
        <>
            {/* about this Collectable */}
            < View style={[styles.container, isSmallDevice && styles.mobileContainer]} >
                {/* Heading */}
                {isSmallDevice
                    ? (<Text Text style={styles.mobileHeading} > About this collectible</Text >)
                    : (<Text Text style={styles.heading} > About this{"\n"}collectible</Text >)
                }
                {/* About Content */}
                < View style={styles.aboutContainer} >
                    {/* Left Box */}
                    < View style={[styles.leftBox, isSmallDevice && styles.mobileLeftBox]} >
                        {/* Minimization Box  Working on following*/}
                        <View View style={[styles.flex, isSmallDevice && styles.mobileflex]} >
                            <Text style={styles.header}>Collectible Stats</Text>
                            <TouchableOpacity style={styles.minus} ></TouchableOpacity>
                        </View >
                        {/* Circle & Flex Box Content */}
                        <View View style={styles.cirlceFlex} >
                            <View style={[styles.circleContainer, isSmallDevice && styles.mobileCircleContainer]}>
                                <View style={[styles.circle, isSmallDevice && styles.mobileCircle]}>
                                    <Text style={[styles.circleHeading, isSmallDevice && styles.mobilecircleHeading]}>117</Text>
                                    <Text style={{ ...styles.header, opacity: 0.8 }}>Total</Text>
                                </View>
                                {/* Percentage List */}
                                {isSmallDevice
                                    ? (<View style={styles.mobilepercentList}>
                                        <PercentList />
                                        <PercentList blue />
                                        <PercentList purple />
                                        <PercentList grey />
                                    </View>)
                                    : (<View style={styles.percentList}>
                                        <PercentList />
                                        <PercentList blue />
                                        <PercentList purple />
                                        <PercentList grey />
                                    </View>)}
                            </View>
                            {/* Details List */}

                            <DetailsList data={listData} />

                        </View >

                    </View >
                    {/* Right Box */}
                    <View View style={[styles.rightBox, isSmallDevice && styles.mobilerightBox]} >
                        <View style={styles.flex}>
                            <Text style={styles.header}>Floor Prices</Text>
                            <TouchableOpacity style={styles.minus} ></TouchableOpacity>
                        </View>
                        {/* Floor Prices List */}
                        <FloorPricesList style={{marginTop: baseStyle.marginTop(20)}} data={data} />
                    </View >
                </View >
            </View >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    mobileContainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(20),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    heading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(32),
        lineHeight: baseStyle.lineHight(32),
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: baseStyle.marginVertical(20)
    },
    mobileHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(27),
        lineHeight: baseStyle.lineHight(0),
        fontWeight: "800",
        textAlign: "center",
        marginVertical: baseStyle.marginVertical(50)
    },
    aboutContainer: {
        width: "100%",
        flexDirection: "row",
        //alignItems: "center",
        justifyContent: "space-between",
        height: "auto",
        flexWrap: "wrap"
    },
    leftBox: {
        minWidth: "47%",
    },
    mobileLeftBox: {
        width: "100%",
        // alignItems: "center",
    },
    rightBox: {
        width: "47%"
    },
    mobilerightBox: {
        width: "100%",
    },
    header: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(14),
        fontWeight: "700",
    },
    minus: {
        borderBottomColor: theme.colors.white,
        borderBottomWidth: 3,
        width: "3%",
        borderRadius: baseStyle.borderRadius(100)
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mobileflex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: baseStyle.marginBottom(13)
    },
    cirlceFlex: {
        marginVertical: baseStyle.marginVertical(10),
        height: "auto",
        flexWrap: "wrap"
    },
    circle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderColor: theme.colors.blue,
        borderRightColor: theme.colors.greenOne,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 20,
    },
    mobileCircle: {
        width: 170,
        height: 170,
        borderRadius: 85,
        borderColor: theme.colors.blue,
        borderRightColor: theme.colors.greenOne,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 17,
        alignSelf: "center"
    },
    circleHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(20),
        fontWeight: "bold",
    },
    mobilecircleHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(30),
        lineHeight: baseStyle.lineHight(36),
        fontWeight: "800",
        marginBottom: baseStyle.marginBottom(12)
    },
    circleContainer: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap'
    },
    mobileCircleContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        // height: 500
    },
    percentList: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: baseStyle.marginLeft(40)
    },
    mobilepercentList: {
        flexDirection: "column",
        //alignItems: "center",
        width: "30%",
        marginTop: baseStyle.marginTop(41)
    }

});
