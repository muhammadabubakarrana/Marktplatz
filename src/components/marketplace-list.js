import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { baseStyle, theme } from '../config';
import floor from "../assets/images/floor/floor.png";
import after from "../assets/images/after/after.png";

export const MarketPlaceList = ({ style, data }) => {
    const isSmallDevice = Dimensions.get("window").width < 768;
    return (
        <FlatList
            style={[style]}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={[styles.container, isSmallDevice && styles.mobileContainer]}>
                    <View style={styles.imgContent}>
                        <Image style={[styles.floorImg, isSmallDevice && styles.mobilefloorImg]} source={floor} />
                        <View style={{ marginLeft: baseStyle.marginLeft(5) }}>
                            <View style={styles.green}>
                                <Text style={styles.hone}>UNCOMMON</Text>
                            </View>
                            <Text style={[styles.hTwo, isSmallDevice && styles.mobilehTwo]}>{item.num}</Text>
                        </View>
                    </View>
                    <Text style={[{ ...styles.hTwo, marginBottom: baseStyle.marginBottom(3) }, isSmallDevice && styles.mobileSetMRGB]}>{item.price}</Text>
                    {!isSmallDevice && <Text style={{ ...styles.hTwo, marginBottom: baseStyle.marginBottom(3) }}>{item.date}</Text>}
                    <Text style={[{ ...styles.hTwo, marginBottom: baseStyle.marginBottom(3) }, isSmallDevice && styles.mobileSetMRGB]}>{item.edition}</Text>

                    {
                        !isSmallDevice &&
                        <View style={styles.btns} >
                            <TouchableOpacity style={styles.btnOne} >
                                <Text style={{ ...styles.hone, color: theme.colors.black }}>Get it Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnTwo} >
                                <Text style={styles.hone}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {isSmallDevice && <Image style={[isSmallDevice && styles.mobileafterImg]} resizeMode='contain' source={after} />}
                </View >
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: baseStyle.marginTop(10),
        //marginHorizontal: baseStyle.marginHorizontal(30),
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    mobileContainer: {
        marginTop: baseStyle.marginTop(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    imgContent: {
        //  flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    floorImg: {
        height: baseStyle.height(30),
        width: baseStyle.width(40),
    },
    mobilefloorImg: {
        height: baseStyle.height(73),
        width: baseStyle.width(74),
    },
    hone: {
        fontWeight: "700",
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(9),
    },
    btns: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    btnOne: {
        // width: "20%",
        backgroundColor: theme.colors.lightRed,
        borderRadius: baseStyle.borderRadius(6),
        paddingVertical: baseStyle.paddingVertical(5),
        paddingHorizontal: baseStyle.paddingHorizontal(12),
        marginRight: baseStyle.marginRight(7)
    },
    btnTwo: {
        // width: "20%",
        borderRadius: baseStyle.borderRadius(6),
        paddingVertical: baseStyle.paddingVertical(5),
        borderColor: theme.colors.white,
        borderWidth: baseStyle.borderWidth(1),
        paddingHorizontal: baseStyle.paddingHorizontal(12)
    },
    green: {
        backgroundColor: theme.colors.greenOne,
        paddingTop: baseStyle.paddingTop(3),
        paddingBottom: baseStyle.paddingBottom(3),
        paddingLeft: baseStyle.paddingLeft(5),
        paddingRight: baseStyle.paddingRight(3.61),
        borderRadius: baseStyle.borderRadius(5),
        // width: baseStyle.width(79)
    },
    hTwo: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(14.68),
        fontWeight: "800",
    },
    mobilehTwo: {
        marginTop: baseStyle.marginTop(5)
    },
    // mobileSetMRGB: {
    //    // marginBottom: baseStyle.marginBottom(-21)
    // },
    mobileafterImg: {
        height: baseStyle.height(9.18),
        width: baseStyle.width(7),
    },
});
