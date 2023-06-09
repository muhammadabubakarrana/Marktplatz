import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { baseStyle, theme } from '../config';
import floor from "../assets/images/floor/floor.png";
import after from "../assets/images/after/after.png";

export const FloorPricesList = ({ style, data }) => {
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (
        <FlatList
            style={[style]}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity style={[styles.container, isSmallDevice && styles.mobilecontainer]}>
                    <Image style={[styles.floorImg, isSmallDevice && styles.mobilefloorImg]} source={floor} resizeMode='contain' />
                    <View style={styles.details} >
                        <View style={styles.flex}>
                            <View style={[styles.brown, isSmallDevice && styles.mobilebrown]} >
                                <Text style={styles.heading}>{item.txt}</Text>
                            </View>
                            <Text style={styles.headingOne}>{item.avg}</Text>
                        </View>
                        <View style={styles.flex}>
                            <Text style={{ ...styles.num, color: theme.colors.white }}>{item.num}</Text>
                            <Text style={{ ...styles.num, color: theme.colors.secondPurple }}>{item.numOne}</Text>
                        </View>
                    </View>
                    <Image style={[styles.afterImg, isSmallDevice && styles.mobileafterImg]} resizeMode='contain' source={after} />
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: theme.colors.lightBlack,
        paddingVertical: baseStyle.paddingVertical(6),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        //marginBottom: baseStyle.marginBottom(10),
        marginTop: baseStyle.marginTop(8),
        borderRadius: baseStyle.borderRadius(5),
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    mobilecontainer: {
        backgroundColor: theme.colors.lightBlack,
        paddingVertical: baseStyle.paddingVertical(16),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        //marginBottom: baseStyle.marginBottom(10),
        marginTop: baseStyle.marginTop(11),
        borderRadius: baseStyle.borderRadius(5),
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        // marginHorizontal: baseStyle.marginHorizontal(14)
    },
    floorImg: {
        height: baseStyle.height(30),
        width: baseStyle.width(40),
        flex: 0.4
    },
    mobilefloorImg: {
        height: baseStyle.height(41),
        width: baseStyle.width(43),
        flex: 0.4
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    details: {
        flex: 3,
        marginLeft: baseStyle.marginLeft(10),
        marginRight: baseStyle.marginRight(10)
    },
    afterImg: {
        height: baseStyle.height(7.18),
        width: baseStyle.width(5),
    },
    mobileafterImg:{
        height: baseStyle.height(9.18),
        width: baseStyle.width(7),
    },
    num: {
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(14.52),
        fontWeight: "700",
    },
    heading: {
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(9.68),
        fontWeight: "700",
        color: theme.colors.white
    },
    headingOne: {
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontWeight: "700",
        color: theme.colors.white,
        opacity: 0.6
    },
    brown: {
        backgroundColor: theme.colors.lightBrown,
        paddingTop: baseStyle.paddingTop(3),
        paddingBottom: baseStyle.paddingBottom(4),
        paddingHorizontal: baseStyle.paddingHorizontal(14),
        borderRadius: baseStyle.borderRadius(5),
        marginBottom: baseStyle.marginBottom(3)
    },
    mobilebrown: {
        backgroundColor: theme.colors.lightBrown,
        paddingTop: baseStyle.paddingTop(3),
        paddingBottom: baseStyle.paddingBottom(4),
        paddingHorizontal: baseStyle.paddingHorizontal(8),
        borderRadius: baseStyle.borderRadius(5),
        marginBottom: baseStyle.marginBottom(7)
    },
});
