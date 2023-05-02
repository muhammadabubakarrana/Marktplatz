// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { baseStyle, theme } from "../config";

// export const FirstPara = () => {
//     const isSmallDevice = Dimensions.get('window').width < 768;
//     return (
//         <View style={[styles.txtContainer, isSmallDevice && styles.mobiletxtContainer]} >
//             <Text style={[styles.txtHeading, isSmallDevice && styles.mobiletxtHeading]} >Impressum</Text>
//             <Text style={[styles.txtPara, isSmallDevice && styles.mobiletxtPara]} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     txtContainer: {
//         paddingHorizontal: baseStyle.paddingHorizontal(30),
//         paddingVertical: baseStyle.paddingVertical(30)
//     },
//     mobiletxtContainer: {
//         paddingHorizontal: baseStyle.paddingHorizontal(17),
//         paddingVertical: baseStyle.paddingVertical(30)
//     },
//     txtHeading: {
//         color: theme.colors.white,
//         fontSize: baseStyle.fontSize(29),
//         lineHeight: baseStyle.lineHight(18),
//         // fontFamily: theme.font.Bold,
//         textAlign: "center",
//         fontWeight: "bold",
//     },
//     mobiletxtHeading: {
//         color: theme.colors.white,
//         fontSize: baseStyle.fontSize(27),
//         lineHeight: baseStyle.lineHight(42),
//         //fontFamily: theme.font.Bold,
//         textAlign: "center",
//         fontWeight: "800",
//     },
//     txtPara: {
//         color: theme.colors.white,
//         fontSize: baseStyle.fontSize(17),
//         lineHeight: baseStyle.lineHight(14),
//         // fontFamily: theme.font.Bold,
//         textAlign: "left",
//         //fontWeight: "bold",
//         marginTop: baseStyle.marginTop(30),
//         opacity: 0.8
//     },
//     mobiletxtPara: {
//         color: theme.colors.white,
//         fontSize: baseStyle.fontSize(11),
//         lineHeight: baseStyle.lineHight(17),
//         // fontFamily: theme.font.Bold,
//         textAlign: "left",
//         fontWeight: "500",
//         marginTop: baseStyle.marginTop(30),
//         opacity: 0.8
//     },
// });
