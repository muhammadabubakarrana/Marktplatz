import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { MetaShooterContainer, ContainerTwo, NavigationContainer, CardSection, Explore, CollectionList, Footer, MobileNavigation, MobileFooter } from '../components';
import { baseStyle, theme } from '../config';
import explore from "../assets/images/explore/explore.png";
import man from "../assets/images/man/man.png";


export const Home = () => {


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
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <>
            {/* https://bootcamp.uxdesign.cc/creating-a-clean-responsive-design-system-for-react-native-web-and-mobile-2d609a0cc23e */}
            {isSmallDevice ? (<MobileNavigation />) : (<NavigationContainer />)}



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
            {isSmallDevice ? (<MobileFooter />) : (<Footer />)}
        </>
    );
};

const styles = StyleSheet.create({
    TxtBox: {
        fontSize: baseStyle.fontSize(33),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(22),
        textAlign: "center",
        fontWeight: "700"
    },
    mobileTxtBox: {
        fontSize: baseStyle.fontSize(27),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(22),
        textAlign: "center",
        fontWeight: "800"
    },
    mainBox: {
        backgroundColor: theme.colors.pink,
        //width: "100%",
        paddingVertical: baseStyle.paddingVertical(20),
        paddingHorizontal: baseStyle.paddingHorizontal(25),
        alignItems: "center"
    },
    mobilecontainer: {
        backgroundColor: theme.colors.black,
        paddingVertical: baseStyle.paddingVertical(21),
        paddingHorizontal: baseStyle.paddingHorizontal(9),
    },
    container: {
        backgroundColor: theme.colors.black,
        paddingVertical: baseStyle.paddingVertical(35),
        paddingHorizontal: baseStyle.paddingHorizontal(30),
    },

    heading: {
        fontSize: baseStyle.fontSize(42),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(22),
        textAlign: "center",
        fontFamily: theme.font.Bold,
        marginBottom: baseStyle.marginBottom(52)
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
        fontSize: baseStyle.fontSize(15),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(18),
        textAlign: "left",
        fontWeight: "700",
        marginBottom: baseStyle.marginBottom(10)
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
        fontSize: baseStyle.fontSize(15),
        color: theme.colors.white,
        lineHeight: baseStyle.lineHight(18),
        textAlign: "left",
        fontWeight: "700",
        marginTop: baseStyle.marginTop(85),
        marginBottom: baseStyle.marginBottom(16)
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

