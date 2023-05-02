import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { baseStyle, theme } from '../config';
import halfCirlce from "../assets/images/halfCirlce/halfCirlce.png";

export const DetailsList = ({ style, data }) => {
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (
        <FlatList
            style={[style]}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={[styles.container, isSmallDevice && styles.mobileContainer]}>
                    {/* 1st box */}
                    <View style={[styles.boxOne, isSmallDevice && styles.mobileboxOne]}>
                        <View style={styles.flex}>
                            <Text style={[styles.heading, isSmallDevice && styles.mobileheading]}>{item.floorPrice}</Text>
                            <Image style={[styles.hCircle, isSmallDevice && styles.mobilehCircle]} source={halfCirlce} resizeMode='contain' />
                        </View>
                        <Text style={[styles.headingOne, isSmallDevice && styles.mobileheadingOne]}>{item.price}</Text>
                    </View>


                    {/* 2nd Box */}
                    {isSmallDevice
                        ? (<View style={styles.mobileboxTwo}>
                            <View style={styles.flexOne}>
                                <Text style={styles.mobileheading}>{item.heading}</Text>
                                <View style={styles.flex}>
                                    <Text style={styles.mobileheading} >{item.city}</Text>
                                    {/* <View style={styles.circle}></View> */}
                                    <Image style={styles.mobilehCircle} source={halfCirlce} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={styles.flexTwo}>
                                <Text style={styles.mobileheadingOne}>{item.priceOne}</Text>
                                <Text style={styles.mobileHeadingTwo}>{item.percent}</Text>
                            </View>
                        </View>)
                        : (<View style={styles.boxTwo}>
                            <View style={styles.flexOne}>
                                <Text style={styles.heading}>{item.heading}</Text>
                                <View style={styles.flex}>
                                    <Text style={styles.heading} >{item.city}</Text>
                                    {/* <View style={styles.circle}></View> */}
                                    <Image style={styles.hCircle} source={halfCirlce} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={styles.flexTwo}>
                                <Text style={styles.headingOne}>{item.priceOne}</Text>
                                <Text style={styles.headingTwo}>{item.percent}</Text>
                            </View>
                        </View>)}
                </View >
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: baseStyle.marginTop(10),
        flexWrap: "wrap"
    },
    mobileContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: baseStyle.marginTop(10),
    },
    flexTwo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flexOne: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: "center"
    },
    boxOne: {
        flex: 1,
        paddingVertical: baseStyle.paddingVertical(5),
        alignItems: "center",
        backgroundColor: theme.colors.lightBlack,
        borderRadius: baseStyle.borderRadius(5)
    },
    mobileboxOne: {
        width: "80%",
        paddingTop: baseStyle.paddingTop(13),
        paddingBottom: baseStyle.paddingBottom(35),
        alignItems: "center",
        backgroundColor: theme.colors.lightBlack,
        borderRadius: baseStyle.borderRadius(5),
        marginBottom: baseStyle.marginBottom(14),
    },
    boxTwo: {
        flex: 2,
        paddingVertical: baseStyle.paddingVertical(5),
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        backgroundColor: theme.colors.lightBlack,
        borderRadius: baseStyle.borderRadius(5),
        marginLeft: baseStyle.marginLeft(10)
    },
    mobileboxTwo: {
        paddingVertical: baseStyle.paddingVertical(24),
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        width: "80%",
        backgroundColor: theme.colors.lightBlack,
        borderRadius: baseStyle.borderRadius(5),
        marginBottom: baseStyle.marginBottom(3)
    },
    flex: {
        flexDirection: "row",
        alignItems: "center"
    },
    circle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: theme.colors.blue,
        marginLeft: baseStyle.marginLeft(5)
    },
    heading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontWeight: "500",
        opacity: 0.7
    },
    mobileheading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontWeight: "700",
        opacity: 0.7
    },
    headingOne: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontWeight: "600",
    },
    mobileheadingOne: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontWeight: "800",
        marginTop: baseStyle.marginTop(5)
    },
    headingTwo: {
        color: theme.colors.green,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontWeight: "500",
    },
    mobileHeadingTwo: {
        color: theme.colors.green,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontWeight: "700",
        marginTop: baseStyle.marginTop(5)
    },
    hCircle: {
        height: baseStyle.height(11),
        width: baseStyle.width(11),
        marginLeft: baseStyle.marginLeft(6)
    },
    mobilehCircle: {
        height: baseStyle.height(16),
        width: baseStyle.width(16),
        marginLeft: baseStyle.marginLeft(3)
    }
});

