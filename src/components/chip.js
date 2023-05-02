import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { baseStyle, theme } from '../config';
import lower from "../assets/images/lower/lower.png";


export const Chip = ({
    label,
    style,
    checked,
    chipStyle,
    showSort,
    labelStyle,
    ...restProps
}) => {

    return (
        <TouchableOpacity
            {...restProps}
            style={[
                {
                    ...styles.chip,
                    backgroundColor: checked ? theme.colors.secondGrey : theme.colors.black,
                    flexDirection: showSort && "row",
                    alignItems: showSort && "center",
                },
                chipStyle,
                showSort && styles.mobileChip
            ]}>
            {showSort ? (
                <>
                    <Text style={[styles.text, labelStyle]}>{label}</Text>
                    <Image style={styles.lower} source={lower} resizeMode='contain' />
                </>)
                : (<Text style={[styles.text, labelStyle]}>{label}</Text>)}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chip: {
        paddingVertical: baseStyle.paddingVertical(5),
        paddingLeft: baseStyle.paddingLeft(20),
        paddingRight: baseStyle.paddingRight(35),
        borderRadius: baseStyle.borderRadius(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.white,
    },
    mobileChip: {
        paddingVertical: baseStyle.paddingVertical(9),
        paddingLeft: baseStyle.paddingLeft(19),
        paddingRight: baseStyle.paddingRight(15),
        borderRadius: baseStyle.borderRadius(20),
        borderWidth: baseStyle.borderWidth(1),
        borderColor: theme.colors.white,
    },
    text: {
        color: theme.colors.thirdGrey,
        opacity: 0.8,
        fontWeight: "700",
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15)
    },
    lower: {
        width: baseStyle.width(8),
        height: baseStyle.height(10),
        marginLeft: baseStyle.marginLeft(10)
    }
});