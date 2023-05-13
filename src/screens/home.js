import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, useWindowDimensions, Platform } from 'react-native';
import { MetaShooterContainer, MyScrollView, ContainerTwo, NavigationContainer, CardSection, Explore, CollectionList, Footer, MobileNavigation, MobileFooter, Wrapper } from '../components';
import { baseStyle, theme } from '../config';
import explore from "../assets/images/explore/explore.png";
import man from "../assets/images/man/man.png";
import { RFValue } from 'react-native-responsive-fontsize';



export const Home = () => {
    const { height, width, scale, fontScale } = useWindowDimensions();
    const data = [
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore  //{ uri: explore }
        },
        {
            img: explore //{ uri: explore }
        },
        {
            img: explore  //{ uri: explore }
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
            img: man, //{ uri: man },
            heading: "Andrew lopez",
            para: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum",
            number: "4.98 (1.367)",
            points: "321 CHF",
        },
    ];

    const cardsData = [
        {
            title: "90s",
            para: "Your favorite 90s \n Star collectibles!"
        },
        {
            title: "90s",
            para: "Your favorite 90s \n Star collectibles!"
        },
        {
            title: "90s",
            para: "Your favorite 90s \n Star collectibles!"
        },
    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(Platform.OS === 'android' || Platform.OS === 'ios');
    }, []);

    const isSmallDevice = Dimensions.get('window').width < 768;
    const smallForNav = Dimensions.get("window").width < 910;
    return (
        <>
            <Wrapper>
                <MyScrollView showsVerticalScrollIndicator={false}>
                    {/* https://bootcamp.uxdesign.cc/creating-a-clean-responsive-design-system-for-react-native-web-and-mobile-2d609a0cc23e */}
                    {isMobile || smallForNav ? (<MobileNavigation />) : (<NavigationContainer />)}



                    {/* // Metashooters Container */}
                    <MetaShooterContainer />

                    {/* 3rdContainer */}
                    <ContainerTwo />

                    {/* 4th Container */}
                    <View style={styles.mainBox} >
                        <Text style={[styles.TxtBox, isSmallDevice && styles.mobileTxtBox]}> Kollektionen</Text>
                        <CardSection data={cardsData} />
                    </View>

                    {/* 5th Container */}
                    <View style={[styles.container, isSmallDevice && styles.mobilecontainer]} >
                        {isSmallDevice
                            ? (<Text style={styles.mobileheading} >Marktplatz</Text>)
                            : (<Text style={styles.heading} >Marktplatz</Text>)
                        }
                        {isSmallDevice
                            ? (<Text style={styles.mobilepara} >Explore</Text>)
                            : (<Text style={styles.para} >Explore</Text>)
                        }
                        <Explore data={data} />
                        {isSmallDevice
                            ? (<Text style={styles.mobilenextPara} >Collect your STAR today!</Text>)
                            : (<Text style={styles.nextPara} >Collect your STAR today!</Text>)
                        }

                        <CollectionList data={listData} />
                    </View>

                    {/* Footer */}
                    {isMobile || smallForNav ? (<MobileFooter />) : (<Footer />)}
                </MyScrollView>
            </Wrapper>
        </>
    );
};

const styles = StyleSheet.create({
    TxtBox: {
        fontSize: RFValue(33),
        color: theme.colors.white,
        lineHeight: RFValue(22),
        textAlign: "center",
        fontWeight: "700"
    },
    mobileTxtBox: {
        fontSize: baseStyle.fontSize(27),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(22),
        textAlign: "center",
        fontWeight: "800",
        marginTop: baseStyle.marginTop(5)
    },
    mainBox: {
        backgroundColor: theme.colors.pink,
        //width: "100%",
        paddingVertical: RFValue(10),
        //width: Dimensions.get("window").width,
        // paddingHorizontal: RFValue(25),
        //alignItems: "center"
    },
    mobilecontainer: {
        backgroundColor: theme.colors.black,
        paddingVertical: baseStyle.paddingVertical(21),
        paddingHorizontal: baseStyle.paddingHorizontal(5),
    },
    container: {
        backgroundColor: theme.colors.black,
        paddingVertical: RFValue(35),
        paddingHorizontal: RFValue(10),
    },

    heading: {
        fontSize: RFValue(42),
        color: theme.colors.white,
        lineHeight: RFValue(22),
        textAlign: "center",
        fontFamily: theme.font.Bold,
        marginBottom: RFValue(52)
    },
    mobileheading: {
        fontSize: baseStyle.fontSize(27),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(22),
        textAlign: "center",
        fontWeight: "800",
        marginBottom: baseStyle.marginBottom(52)
    },
    para: {
        fontSize: RFValue(15),
        color: theme.colors.white,
        lineHeight: RFValue(18),
        textAlign: "left",
        fontWeight: "700",
        marginBottom: RFValue(10)
    },
    mobilepara: {
        fontSize: baseStyle.fontSize(11),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(13),
        textAlign: "left",
        fontWeight: "700",
        marginBottom: baseStyle.marginBottom(10)
    },
    nextPara: {
        fontSize: RFValue(15),
        color: theme.colors.white,
        lineHeight: RFValue(18),
        textAlign: "left",
        fontWeight: "700",
        marginTop: RFValue(85),
        marginBottom: RFValue(16)
    },
    mobilenextPara: {
        fontSize: baseStyle.fontSize(11),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(13),
        textAlign: "left",
        fontWeight: "700",
        marginTop: baseStyle.marginTop(19),
        marginBottom: baseStyle.marginBottom(8)
    },

});

