import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import FlashcardInteractive from "../FlashcardInteractive";

const flashcards = [
    {
        id: 1,
        question: "¿Cuál es la capital de Francia?",
        answer: "París",
    },
    {
        id: 2,
        question: "¿Cuál es el elemento químico para el agua?",
        answer: "H2O",
    },
];

const FlashcardScreen = ({ route }) => {
    const flashcards = route.params.cards;
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const goToPrevCard = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + flashcards.length) % flashcards.length
        );
    };

    const { title, content } = flashcards[currentIndex];

    return (
        <View>
            <FlashcardInteractive title={title} content={content} />
            <Button title="Anterior" onPress={goToPrevCard} />
            <Button title="Siguiente" onPress={goToNextCard} />
        </View>
    );
};

export default FlashcardScreen;
