import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { baseStyle, routes, theme } from "../config";
import card from "../assets/images/card/card.png";
import { useNavigation } from '@react-navigation/native';

export const CardSection = ({ data, style }) => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    const navigation = useNavigation();
    const goToProduct = () => {
        navigation.navigate(routes.PRODUCT)
    };

    return (
        // <View style={styles.mainBox} >
        //     <Text style={[styles.TxtBox, isSmallDevice && styles.mobileTxtBox]}> Kollektionen</Text>
        <FlatList
            horizontal
            style={[style]}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <>

                    {isSmallDevice ? (
                        <View style={styles.mobilecard} >
                            <Text style={styles.mobileTxtCard}> {item.title}</Text>
                            <Image source={card} style={styles.cardImage} resizeMode='contain' />
                            <Text numberOfLines={2} style={styles.mobileparaCard}> {item.para}</Text>
                            <TouchableOpacity onPress={goToProduct} style={styles.mobileAuthBtn}>
                                <Text style={styles.mobileauthTxt} >Get yours!</Text>
                            </TouchableOpacity>
                        </View>
                    )
                        : (<View style={styles.card} >
                            <Text style={styles.TxtCard}> {item.title}</Text>
                            <Image source={card} style={styles.WebcardImage} resizeMode='contain' />
                            <Text numberOfLines={2} style={styles.paraCard}> {item.para}</Text>
                            <TouchableOpacity onPress={goToProduct} style={styles.AuthBtn}>
                                <Text style={styles.authTxt} >Get yours!</Text>
                            </TouchableOpacity>
                        </View>
                        )}

                </>
            )}
        />
        // </View>
    );
};

const styles = StyleSheet.create({
    TxtCard: {
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.Bold,
        color: theme.colors.white,
        textAlign: "center"
    },
    mobileTxtCard: {
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(22),
        fontWeight: "800",
        color: theme.colors.white,
        // textAlign: "center"
    },
    paraCard: {
        fontSize: baseStyle.fontSize(15),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.regular,
        color: theme.colors.white,
        textAlign: "center",
    },
    mobileparaCard: {
        fontSize: baseStyle.fontSize(11),
        lineHeight: baseStyle.lineHight(15),
        fontWeight: "800",
        color: theme.colors.white,
        textAlign: "center",
    },

    card: {
        //width: baseStyle.width(180),
        //width: "70%" ,
        // height: "auto",
        alignItems: "center",

        //marginHorizontal: baseStyle.marginHorizontal(17),
        marginVertical: baseStyle.marginVertical(30),
        marginRight: baseStyle.marginRight(50),
        //justifyContent: "space-evenly",
    },
    mobilecard: {
        // marginRight: baseStyle.marginRight(-40),
        marginHorizontal: baseStyle.marginHorizontal(10),
        // marginLeft: baseStyle.marginLeft(-30),
        // width: "100%",
        //marginRight: baseStyle.marginRight(50),
        // marginRight: baseStyle.marginRight(20),
        // marginLeft: baseStyle.marginLeft(10),
        marginVertical: baseStyle.marginVertical(30),
        alignItems: "center"
    },
    cardImage: {
        height: baseStyle.height(113),//113
        width: baseStyle.width(175),//201
        marginVertical: baseStyle.marginVertical(10)
    },
    WebcardImage: {
        height: baseStyle.height(113),//113
        width: baseStyle.width(175),//201
        //  marginVertical: baseStyle.marginVertical(10)
    },
    AuthBtn: {
        borderRadius: baseStyle.borderRadius(20),
        //paddingVertical: baseStyle.paddingVertical(4),
        // paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.lightPurple,
        width: "100%",
        minWidth: baseStyle.minWidth(120),
        marginTop: baseStyle.marginTop(10)
    },
    mobileAuthBtn: {
        borderRadius: baseStyle.borderRadius(25),
        // paddingVertical: baseStyle.paddingVertical(4),
        // paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.lightPurple,
        width: "30%",
        minWidth: baseStyle.minWidth(120),
        marginTop: baseStyle.marginTop(10)
    },
    authTxt: {
        color: theme.colors.white,
        textAlign: "center",
        fontWeight: "400",
        fontSize: baseStyle.fontSize(20),
        lineHeight: baseStyle.lineHight(30),
    },
    mobileauthTxt: {
        color: theme.colors.white,
        textAlign: "center",
        fontWeight: "400",
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36),
    },
})
