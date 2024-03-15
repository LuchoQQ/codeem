import React from "react";
import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import image from "../../assets/images/aws.png";
import useFetch from "../../hooks/useFetch";
import FlashcardCard from "../FlashcardCard";
import ButtonReutilizable from "../ButtonReutilizable";

const CollectionDetailsScreen: React.FC = ({ navigation, route }) => {
    const collection = route.params;

    const { data } = useFetch(
        `/cards/collection/${collection._id}`,
        "cards",
        ""
    );

    return (
        <>
            <ScrollView>
                <Image
                    source={image}
                    style={{ width: 400, height: 200, objectFit: "contain" }}
                />
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    {collection.title}
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 20,
                        paddingHorizontal: 40,
                        paddingVertical: 20,
                    }}
                >
                    <Pressable onPress={() => navigation.navigate('Flashcard', { cards: data?.cards })}>
                        <ButtonReutilizable title="Usar flashcards" />
                    </Pressable>
                    <ButtonReutilizable title="Añadir flashcard" />
                    <ButtonReutilizable title="Realizar evaluación" />
                    <ButtonReutilizable title="Historial" />
                </View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingVertical: 15,
                    }}
                >
                    Flashcards
                </Text>
                <View style={{ gap: 10 }}>
                    {data?.cards.map((item, index) => (
                        <FlashcardCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

export default CollectionDetailsScreen;
