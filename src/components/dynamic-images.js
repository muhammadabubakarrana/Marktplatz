import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import art from "../assets/images/art/art.png";
import artleft from "../assets/images/artleft/artleft.png";
import artright from "../assets/images/artright/artright.png";
import { baseStyle } from '../config';

const photos = [
    // { id: 1, uri: art },
    // { id: 2, uri: artleft },
    // { id: 3, uri: artright },
    { id: 1, filename: art },
    { id: 2, filename: artleft },
    { id: 3, filename: artright },
    // Add more photos here
];


export const DynamicImages = () => {
    //const [selectedPhoto, setSelectedPhoto] = useState(photos[0].uri);
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0].filename);
    const isSmallDevice = Dimensions.get('window').width < 768;

    const handlePhotoPress = (filename) => {
        setSelectedPhoto(filename);
    };

    return (
        <>
            {isSmallDevice
                ? (<View style={styles.mobileMainContainer}>
                    <Image resizeMode='contain' source={selectedPhoto} style={styles.mobileMainImage} />
                    <View style={{ flexDirection: 'row' }}>
                        {photos.map((photo) => (
                            <TouchableOpacity key={photo.id} onPress={() => handlePhotoPress(photo.filename)}>
                                <Image resizeMode='contain' source={photo.filename} style={styles.mobileSmallImage} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>)
                : (
                    <View style={styles.mainContainer}>
                        <Image resizeMode='contain' source={selectedPhoto} style={styles.mainImage} />
                        <View style={{ flexDirection: 'row' }}>
                            {photos.map((photo) => (
                                <TouchableOpacity key={photo.id} onPress={() => handlePhotoPress(photo.filename)}>
                                    <Image resizeMode='contain' source={photo.filename} style={styles.smallImages} />
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
        height: baseStyle.height(200),
        width: baseStyle.width(290)
    },
    smallImages: {
        height: baseStyle.height(60),
        width: baseStyle.width(60),
        margin: baseStyle.margin(7)
    },
    mobileMainImage: {
        height: baseStyle.height(250),
        width: baseStyle.width(250),
    },
    mobileSmallImage: {
        height: baseStyle.height(65),
        width: baseStyle.width(60),
        margin: baseStyle.margin(5)
    }

    //{ width: 50, height: 50, margin: 7 }
});
