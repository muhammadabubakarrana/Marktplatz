import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Chip, CollectionList, Explore, Footer, MobileFooter, MobileNavigation, NavigationContainer, RedCarpetContainer } from '../components';
import explore from "../assets/images/explore/explore.png";
import { baseStyle, theme } from '../config';
import man from "../assets/images/man/man.png";

export const MarketPlace = () => {
    const data = [
        {
            img: { uri: explore }
        },
        {
            img: { uri: explore }
        },
        {
            img: { uri: explore }
        },
        {
            img: { uri: explore }
        },
        {
            img: { uri: explore }
        },
    ];
    const listData = [
        {
            img: { uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: { uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: { uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: { uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: { uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
    ];
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <>
            {/*  Navigation Container */}
            {isSmallDevice ? (<MobileNavigation />) : (<NavigationContainer />)}

            {/* RedCarpetContainer */}
            <RedCarpetContainer />

            {/* Explore Container */}
            <View style={[styles.container, isSmallDevice && styles.mobilecontainer]} >
                <Text style={styles.heading}>Explore</Text>
                {isSmallDevice
                    ? (<Explore showBar data={data} />)
                    : (<Explore data={data} />)}

            </View>

            {/* Browse Container */}
            <View style={[styles.browseContainer, isSmallDevice && styles.mobilebrowseContainer]}>
                {isSmallDevice
                    ? (
                        <>
                            <Text style={styles.MobilebrowseHeading} >Browse Schauspieler </Text>
                            <View style={styles.mobileChipContainer}>
                                <Chip showSort label="Sortieren nach" chipStyle={styles.chip} />
                                <Chip showSort label="Preis" chipStyle={styles.chip} />
                            </View>
                        </>
                    )
                    : (
                        <>
                            <View style={styles.flex}>
                                <Text style={styles.browseHeading} >Browse Schauspieler </Text>
                                <Text style={styles.para} >5987 results</Text>
                            </View>
                            <View style={styles.chipContainer}>
                                <Chip label="Sortieren nach" chipStyle={styles.chip} />
                                <Chip label="Sortieren nach" chipStyle={styles.chip} checked />
                                <Chip label="Preis" chipStyle={styles.chip} />
                                <Chip label="Sortieren nach" chipStyle={styles.chip} />
                                <Chip label="Sortieren nach" chipStyle={styles.chip} />
                            </View>
                        </>
                    )}


                {isSmallDevice ? (<CollectionList showBar data={listData} />)
                    : (<>
                        <CollectionList data={listData} />
                        <CollectionList style={{ marginVertical: baseStyle.marginVertical(20) }} data={listData} />
                        <CollectionList data={listData} />
                    </>)
                }

            </View >

            {!isSmallDevice && <View style={styles.circleFlex}>
                <View style={styles.circle}></View>
                <Text style={styles.circleTxt} >Page 1 of 150</Text>
                <View style={styles.circle}></View>
            </View>}

            {/* Footer */}
            {isSmallDevice ? (<MobileFooter />) : (<Footer />)}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        // paddingVertical: baseStyle.paddingVertical(30)
        paddingTop: baseStyle.paddingTop(30)
    },
    mobilecontainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(22),
        // paddingVertical: baseStyle.paddingVertical(30)
        paddingTop: baseStyle.paddingTop(30)
    },
    heading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(15),
        lineHeight: baseStyle.lineHight(18),
        fontWeight: '700',
        marginBottom: baseStyle.marginBottom(20)
    },
    browseContainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    mobilebrowseContainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(22),
        paddingVertical: baseStyle.paddingVertical(30)
    },
    para: {
        color: theme.colors.grey,
        marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(10),
        fontWeight: 'bold',
        position: "absolute",
        marginLeft: baseStyle.marginLeft(270),
        bottom: 7,
        opacity: 1
    },
    mobilepara: {
        color: theme.colors.grey,
        // marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(8),
        lineHeight: baseStyle.lineHight(10),
        fontWeight: 'bold',
        position: "absolute",
        marginLeft: baseStyle.marginLeft(210),
        bottom: -2,
        opacity: 1
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
    },
    browseHeading: {
        color: theme.colors.white,
        marginRight: baseStyle.marginRight(30),
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(25),
        fontWeight: '700'
    },
    MobilebrowseHeading: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(24),
        lineHeight: baseStyle.lineHight(29),
        fontWeight: '700',
        textAlign: "center"
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: baseStyle.marginTop(35),
        marginBottom: baseStyle.marginBottom(20)
    },
    mobileChipContainer: {
        flexDirection: 'row',
        marginVertical: baseStyle.marginVertical(18),
        marginLeft: baseStyle.marginLeft(10),
    },
    chip: {
        marginRight: baseStyle.marginRight(8)
    },
    circleTxt: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(13),
        lineHeight: baseStyle.lineHight(16),
        fontWeight: '400',
        marginHorizontal: baseStyle.marginHorizontal(20)
    },
    circleFlex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.black,
        paddingTop: baseStyle.paddingTop(35),
        paddingBottom: baseStyle.paddingBottom(90)
    },
    circle: {
        width: baseStyle.width(30),
        height: baseStyle.height(22),
        backgroundColor: theme.colors.secondBlack,
        borderRadius: baseStyle.borderRadius(30 / 2),
        borderWidth: baseStyle.borderWidth(2),
        borderColor: theme.colors.fourthGrey
    }
});
