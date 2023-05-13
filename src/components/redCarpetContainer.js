import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import man from "../assets/images/man/man.png";
import { CollectionList } from '../components';
import { baseStyle, theme } from '../config';
import { RFValue } from 'react-native-responsive-fontsize';


export const RedCarpetContainer = () => {
    const listData = [
        {
            img: man, //{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man,
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man,
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man,
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man,
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },


    ];
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <View style={[styles.container, isSmallDevice && styles.mobilecontainer]} >
            <View style={styles.flex}>
                <Text style={styles.heading} >Schauspieler</Text>
                <Text style={[styles.para, isSmallDevice && styles.mobilepara]} >5987 results</Text>
            </View>
            <Text style={styles.nextPara} >Red carpet ready</Text>
            <CollectionList showBar data={listData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: RFValue(30),
        paddingVertical: RFValue(30),

    },
    mobilecontainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(22),
        paddingVertical: baseStyle.paddingVertical(30),
    },
    flex: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    heading: {
        color: theme.colors.white,
        marginRight: RFValue(30),
        fontSize: RFValue(24),
        lineHeight: RFValue(30),
        fontWeight: '700'
    },
    para: {
        color: theme.colors.grey,
        marginRight: RFValue(30),
        fontSize: RFValue(8),
        lineHeight: RFValue(10),
        fontWeight: '700',
        position: "absolute",
        marginLeft: RFValue(200),
        bottom: 0,
        opacity: 1
    },
    mobilepara: {
        color: theme.colors.grey,
        // marginRight: RFValue(30),
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(10),
        fontWeight: '700',
        position: "absolute",
        marginLeft: baseStyle.marginLeft(150),
        bottom: 0,
        opacity: 1
    },
    nextPara: {
        color: theme.colors.white,
        fontSize: RFValue(12),
        lineHeight: RFValue(14),
        fontWeight: '600',
        marginTop: RFValue(25),
        marginBottom: RFValue(10)
    }
});
