import React from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { baseStyle, routes, theme } from '../config';
import LogoTwo from "../assets/images/LogoTwo/LogoTwo.png";
import X from "../assets/images/X/X.png";
import { Input } from './input';
import search from "../assets/images/search/search.png";
import { useNavigation } from '@react-navigation/native';

export const HeaderExpandedMobile = ({ visible, onRequestClose, ...restProps }) => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate(routes.HOME)
    };

    const goToMarket = () => {
        navigation.navigate(routes.MARKETPLACE)
    };

    const goToCollections = () => {
        navigation.navigate(routes.PRODUCT)
    };

    const goToRECHTLICH = () => {
        navigation.navigate(routes.RECHTLICH)
    };


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
            {...restProps}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.flex} >
                        <TouchableOpacity onPressIn={goToHome} onPressOut={onRequestClose}>
                            <Image source={LogoTwo} style={styles.logo} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onRequestClose} >
                            <Image source={X} style={styles.X} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center", width: Dimensions.get("window").width }}>
                        {/* Search Bar */}
                        <View style={styles.flexSearch}>
                            <Image source={search} style={styles.search} resizeMode='contain' />
                            <Input placeholder="Search..." style={styles.input} />
                        </View>
                        {/* 1st Btn */}
                        <TouchableOpacity onPressOut={onRequestClose} onPressIn={goToMarket} style={styles.Btn}>
                            <Text style={styles.btnTxt} >Market</Text>
                        </TouchableOpacity>

                        {/* 2nd Btn */}
                        <TouchableOpacity onPressOut={onRequestClose} onPressIn={goToCollections} style={styles.Btn}>
                            <Text style={styles.btnTxt} >Collections</Text>
                        </TouchableOpacity>

                        {/* 3rd Btn */}
                        <TouchableOpacity onPressOut={onRequestClose} onPressIn={goToRECHTLICH} style={styles.Btn}>
                            <Text style={styles.btnTxt} >About Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    modal: {
        backgroundColor: theme.colors.black,
        //borderRadius: baseStyle.borderRadius(32),
        paddingVertical: baseStyle.paddingVertical(15),
        paddingHorizontal: baseStyle.paddingHorizontal(5),
        width: Dimensions.get("window").width, //"100%",
        shadowColor: theme.colors.darkSilver,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 1,
        //height: 'auto',
    },
    logo: {
        height: baseStyle.height(32),
        width: baseStyle.width(32)
    },
    X: {
        height: baseStyle.height(24),
        width: baseStyle.width(12),
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        width: Dimensions.get("window").width,
    },
    Btn: {
        borderRadius: baseStyle.borderRadius(25),
        // paddingVertical: baseStyle.paddingVertical(4),
        // paddingHorizontal: baseStyle.paddingHorizontal(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.pink,
        width: "40%",
        marginTop: baseStyle.marginTop(15)
        // minWidth: baseStyle.minWidth(120)
    },
    btnTxt: {
        color: theme.colors.white,
        textAlign: "center",
        fontSize: baseStyle.fontSize(17),
        lineHeight: baseStyle.lineHight(36),
        fontWeight: "600"
    },
    flexSearch: {
        width: "40%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: baseStyle.borderRadius(25),
        paddingVertical: baseStyle.paddingVertical(1),
        paddingHorizontal: baseStyle.paddingHorizontal(2),
        backgroundColor: theme.colors.lightBlack,
        marginTop: baseStyle.marginTop(15)
        //minWidth: baseStyle.minWidth(120)
    },
    search: {
        height: baseStyle.height(13.33),
        width: baseStyle.width(13.33),
        marginRight: baseStyle.marginRight(5)
    },
    input: {
        color: theme.colors.white,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(24),
        fontWeight: "500",
        opacity: 0.9,
        paddingVertical: baseStyle.paddingVertical(1),
        paddingHorizontal: baseStyle.paddingHorizontal(2),
        width: "80%",
        borderWidth: 0
    },
});
