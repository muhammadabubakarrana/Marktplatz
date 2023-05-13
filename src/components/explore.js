import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { baseStyle } from '../config';
import { RFValue } from 'react-native-responsive-fontsize';






export const Explore = ({ style, data, showBar }) => {
    const isSmallDevice = Dimensions.get('window').width < 768;
    return (
        <FlatList
            horizontal
            style={[style]}
            data={data}
            showsHorizontalScrollIndicator={showBar ? true : false}
            renderItem={({ item }) => (
                <TouchableOpacity style={showBar && styles.container}>
                    <Image style={[styles.img, isSmallDevice && styles.mobileimg]} source={item.img} />
                </TouchableOpacity>
            )}
        />
    );
};



const styles = StyleSheet.create({
    container: {
        height: RFValue(165)
    },
    img: {
        height: RFValue(120),
        width: RFValue(125),
        marginRight: RFValue(5),
        borderRadius: RFValue(8)
    },
    mobileimg: {
        height: baseStyle.height(145),
        width: baseStyle.width(145),
        marginRight: baseStyle.marginRight(10),
        borderRadius: baseStyle.borderRadius(8)
    }
});