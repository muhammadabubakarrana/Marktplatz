import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, Platform } from 'react-native';
import { Chip, CollectionList, Explore, Footer, MobileFooter, MobileNavigation, MyScrollView, NavigationContainer, RedCarpetContainer, Wrapper } from '../components';
import explore from "../assets/images/explore/explore.png";
import { baseStyle, theme } from '../config';
import man from "../assets/images/man/man.png";
import { RFValue } from 'react-native-responsive-fontsize';

export const MarketPlace = () => {
    const data = [
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore //{ uri: explore }
        },
    ];
    const listData = [
        {
            img: man, //{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man, //{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man, //{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man, //{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
        {
            img: man,//{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
    ];
    const isSmallDevice = Dimensions.get('window').width < 768;
    const smallForNav = Dimensions.get("window").width < 910;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(Platform.OS === 'android' || Platform.OS === 'ios');
    }, []);


    return (
        <>
            <Wrapper>
                <MyScrollView style={{ backgroundColor: theme.colors.black }} showsVerticalScrollIndicator={false}>
                    {/*  Navigation Container */}
                    {isMobile || smallForNav ? (<MobileNavigation />) : (<NavigationContainer />)}



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
                                <CollectionList style={{ marginVertical: RFValue(20) }} data={listData} />
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
                    {isMobile || smallForNav ? (<MobileFooter />) : (<Footer />)}
                </MyScrollView>
            </Wrapper>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: RFValue(15),
        // paddingVertical: RFValue(30)
        paddingTop: RFValue(30)
    },
    mobilecontainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        // paddingVertical: RFValue(30)
        paddingTop: baseStyle.paddingTop(20)
    },
    heading: {
        color: theme.colors.white,
        fontSize: RFValue(15),
        lineHeight: RFValue(18),
        fontWeight: '700',
        marginBottom: RFValue(20)
    },
    browseContainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(20)
    },
    mobilebrowseContainer: {
        backgroundColor: theme.colors.black,
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        paddingVertical: baseStyle.paddingVertical(20)
    },
    para: {
        color: theme.colors.grey,
        // marginRight: RFValue(30),
        fontSize: RFValue(8),
        //lineHeight: RFValue(10),
        fontWeight: 'bold',
        // position: "absolute",
        marginLeft: RFValue(-25),
        bottom: -17,
        opacity: 1
    },
    mobilepara: {
        color: theme.colors.grey,
        // marginRight: RFValue(30),
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
        justifyContent: "flex-start"
    },
    browseHeading: {
        color: theme.colors.white,
        marginRight: RFValue(30),
        fontSize: RFValue(20),
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
        marginTop: RFValue(30),
        marginBottom: RFValue(20)
    },
    mobileChipContainer: {
        flexDirection: 'row',
        marginVertical: baseStyle.marginVertical(18),
        marginLeft: baseStyle.marginLeft(10),
    },
    chip: {
        marginRight: RFValue(5),
        marginTop: RFValue(3)
    },
    circleTxt: {
        color: theme.colors.white,
        fontSize: RFValue(13),
        lineHeight: RFValue(16),
        fontWeight: '400',
        marginHorizontal: RFValue(20)
    },
    circleFlex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.black,
        paddingTop: RFValue(35),
        paddingBottom: RFValue(60)
    },
    circle: {
        width: RFValue(30),
        height: RFValue(30),
        backgroundColor: theme.colors.secondBlack,
        borderRadius: RFValue(30 / 2),
        borderWidth: baseStyle.borderWidth(2),
        borderColor: theme.colors.fourthGrey
    }
});
