import React, { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Pressable,
} from "react-native";

import useFetch from "../../hooks/useFetch";
import axios from "axios";
import CollectionCard from "../CollectionCard";
import { useNavigation } from "expo-router";

const HomeScreen: React.FC = ({ navigation, route }) => {
    const { data } = useFetch("/collections", "collections", "");

    return (
        <>
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Luciano</Text>
                </View>
                <Text style={styles.collectionText}>Colecciones</Text>
                <Pressable
                    onPress={() => navigation.navigate("Create Collection")}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Crear colección</Text>
                    </View>
                </Pressable>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginBottom: 10 }} />
                    )}
                    renderItem={({ item }) => (
                        <CollectionCard
                            collection={item}
                            navigation={navigation}
                            route={route}
                        />
                    )}
                />
                <Text style={styles.collectionText}>Flashcards</Text>
                <View>
                    
                </View>
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#090909",
    },
    headerText: {
        color: "#dedede",
        fontSize: 24,
    },
    collectionText: {
        fontSize: 24,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    buttonContainer: {
        backgroundColor: "#090909",
        marginBottom: 20,
        width: 150,
        padding: 5,
        marginLeft: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
    },
});
