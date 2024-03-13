import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
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

    console.log(typeof data);

    return (
        <>
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
                <ButtonReutilizable title="Usar flashcards" />
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
            <FlatList
                data={data.cards}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => (
                    <View style={{ marginBottom: 10 }} />
                )}
                renderItem={({ item }) => <FlashcardCard />}
            />
        </>
    );
};

export default CollectionDetailsScreen;
