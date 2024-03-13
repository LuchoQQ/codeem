import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import image from "../../codeem/assets/images/aws.png";

const CollectionCard: React.FC = ({ collection, route, navigation }) => {
    return (
        <>
            <Pressable
                onPress={() =>
                    navigation.navigate("Collection Details", {
                        ...collection,
                    })
                }
            >
                <View style={styles.collectionContainer}>
                    <Image source={image} style={styles.collectionImage} />
                    <View>
                        <Text style={styles.collectionHeaderText}>
                            {collection.title}
                        </Text>
                        <Text style={styles.collectionSubtitle}>10 cards</Text>
                        <View>
                            <View style={styles.feedback}>
                                <Text style={styles.likes}>
                                    {(Math.random() * 10).toFixed(0)}
                                </Text>
                                <FontAwesome6
                                    name="thumbs-up"
                                    style={styles.collectionLike}
                                />
                            </View>
                        </View>
                    </View>
                    <FontAwesome6
                        name="chevron-right"
                        style={styles.collectionIcon}
                    />
                </View>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    collectionContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 1,
    },
    collectionImage: {
        width: 70,
        height: 70,
        marginRight: 20,
    },
    collectionHeaderText: {
        fontSize: 16,
        fontWeight: "700",
    },
    collectionSubtitle: {
        marginTop: 5,
    },
    collectionIcon: {
        fontSize: 20,
        marginLeft: "auto",
        alignSelf: "center",
        color: "#d9d9d9",
    },
    collectionLike: {
        fontSize: 18,
    },
    feedback: {
        flexDirection: "row",
        paddingTop: 5,
        gap: 5,
    },
    likes: {
        fontSize: 18,
    },
});

export default CollectionCard;
