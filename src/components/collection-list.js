import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { baseStyle, theme } from '../config';
import star from "../assets/images/star/star.png";

export const CollectionList = ({ style, data, showBar }) => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <FlatList
            horizontal
            style={[style]}
            data={data}
            showsHorizontalScrollIndicator={showBar ? true : false}
            renderItem={({ item }) => (
                <>
                    <TouchableOpacity style={[styles.block, isSmallDevice && styles.mobileblock]} >
                        <Image style={[styles.img, isSmallDevice && styles.mobileimg]} source={item.img} />
                        <Text style={[styles.heading, isSmallDevice && styles.mobileheading]} >{item.heading}</Text>
                        <Text style={[styles.para, isSmallDevice && styles.mobilepara]} >{item.para}</Text>
                        <View style={styles.flex} >
                            <Image style={styles.star} resizeMode='contain' source={star} />
                            <Text style={styles.number} >{item.number}</Text>
                        </View>
                        <Text style={styles.points} >{item.points}</Text>
                    </TouchableOpacity>
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    block: {
        //flexDirection: "column",
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        width: baseStyle.width(165),
    },
    mobileblock: {
        //flexDirection: "column",
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        width: baseStyle.width(142),
        height: baseStyle.height(360)
    },
    img: {
        height: baseStyle.height(228),
        width: baseStyle.width(155),
        //marginRight: baseStyle.marginRight(10),
        borderRadius: baseStyle.borderRadius(8)
    },
    mobileimg: {
        height: baseStyle.height(235),
        width: baseStyle.width(134),
        // marginRight: baseStyle.marginRight(10),
        borderRadius: baseStyle.borderRadius(8)
    },
    heading: {
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontWeight: "700",
        color: theme.colors.white,
        marginTop: baseStyle.marginTop(5)
    },
    mobileheading: {
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontWeight: "700",
        color: theme.colors.white,
        marginTop: baseStyle.marginTop(5)
    },
    star: {
        width: baseStyle.width(9),
        height: baseStyle.height(9),
        marginRight: baseStyle.marginRight(3),
        paddingVertical: baseStyle.paddingVertical(6)
    },
    para: {
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(10),
        fontFamily: theme.font.regular,
        fontWeight: "500",
        color: theme.colors.white,
        width: baseStyle.width(120),
        marginVertical: baseStyle.marginVertical(10),
        opacity: 0.7
    },
    mobilepara: {
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(10),
        fontWeight: "500",
        color: theme.colors.white,
        width: baseStyle.width(120),
        marginVertical: baseStyle.marginVertical(6),
        opacity: 0.7
    },
    number: {
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontFamily: theme.font.regular,
        fontWeight: "500",
        color: theme.colors.white,
        opacity: 0.9
    },
    flex: {
        flexDirection: "row",
        marginBottom: baseStyle.marginBottom(10),
        //alignItems: "center"
    },
    points: {
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontFamily: theme.font.regular,
        color: theme.colors.white,
        fontWeight: '500'
    },

});
