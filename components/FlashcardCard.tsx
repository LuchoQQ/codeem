import React from "react";
import { Image, Text, View } from "react-native";
import image from "../assets/images/aws.png";

const FlashcardCard: React.FC = () => {
    return (
        <View
            style={{
                backgroundColor: "#8bc3b8",
                paddingHorizontal: 20,
                flexDirection: "row",
                paddingVertical: 10,
            }}
        >
            <Image
                source={image}
                style={{ width: 70, height: 70, marginRight: 20 }}
            />

            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    ¿Que es la limonada?
                </Text>
                <Text style={{ marginTop: "auto" }}>Concepto</Text>
            </View>
        </View>
    );
};

export default FlashcardCard;
