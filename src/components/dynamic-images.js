import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import art from "../assets/images/art/art.png";
import artleft from "../assets/images/artleft/artleft.png";
import artright from "../assets/images/artright/artright.png";
import { baseStyle } from '../config';

const photos = [
    { id: 1, uri: art },
    { id: 2, uri: artleft },
    { id: 3, uri: artright },
    // Add more photos here
];


export const DynamicImages = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0].uri);
    const isSmallDevice = Dimensions.get('window').width < 768;

    const handlePhotoPress = (uri) => {
        setSelectedPhoto(uri);
    };

    return (
        <>
            {isSmallDevice
                ? (<View style={styles.mobileMainContainer}>
                    <Image source={{ uri: selectedPhoto }} style={styles.mobileMainImage} />
                    <View style={{ flexDirection: 'row' }}>
                        {photos.map((photo) => (
                            <TouchableOpacity key={photo.id} onPress={() => handlePhotoPress(photo.uri)}>
                                <Image source={{ uri: photo.uri }} style={styles.mobileSmallImage} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>)
                : (
                    <View style={styles.mainContainer}>
                        <Image source={{ uri: selectedPhoto }} style={styles.mainImage} />
                        <View style={{ flexDirection: 'row' }}>
                            {photos.map((photo) => (
                                <TouchableOpacity key={photo.id} onPress={() => handlePhotoPress(photo.uri)}>
                                    <Image source={{ uri: photo.uri }} style={styles.smallImages} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}

        </>
    );
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center"
    },
    mobileMainContainer: {
        width: Dimensions.get("window").width,
        alignItems: "center"
    },
    mainImage: {
        height: height / 1.5, //baseStyle.height(443),
        width: width / 3.2, //baseStyle.width(443)
    },
    smallImages: {
        height: height / 6, //baseStyle.height(443),
        width: width / 11.6, //baseStyle.width(443),
        margin: baseStyle.margin(7)
    },
    mobileMainImage: {
        height: height / 2.7,
        width: width / 2,
    },
    mobileSmallImage: {
        height: height / 8.5,
        width: width / 7,
        margin: baseStyle.margin(7)
    }

    //{ width: 50, height: 50, margin: 7 }
});
