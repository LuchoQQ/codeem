import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
const image = require('../../assets/images/aws.png')
const HomeScreen: React.FC = () => {
    return (
        <>
            <View>
                <Text style={styles.collectionText}>Colecciones</Text>
                <View style={styles.collectionCard}>
                    <Image
                        source={image}
                        style={styles.collectionImage}
                    />
                    <View>
                        <Text style={styles.collectionHeaderText}>
                            AWS Certified Exam Notes
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
                <View style={styles.collectionCard}>
                    <Image
                        source={require("../assets/images/aws.png")}
                        style={styles.collectionImage}
                    />
                    <View>
                        <Text style={styles.collectionHeaderText}>
                            AWS Certified Exam Notes
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
                <View style={styles.collectionCard}>
                    <Image
                        source={require("../assets/images/aws.png")}
                        style={styles.collectionImage}
                    />
                    <View>
                        <Text style={styles.collectionHeaderText}>
                            AWS Certified Exam Notes
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
                <View style={styles.collectionCard}>
                    <Image
                        source={require("../assets/images/aws.png")}
                        style={styles.collectionImage}
                    />
                    <View>
                        <Text style={styles.collectionHeaderText}>
                            AWS Certified Exam Notes
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
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    collectionCard: {
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 1,
    },
    collectionText: {
        fontSize: 24,
        paddingHorizontal: 20,
        paddingVertical: 20,
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
