import React from "react";
import { Pressable, Text, View } from "react-native";

const CreateCollectionScreen: React.FC = ({navigation}) => {
    return (
        <>
            <Pressable
                onPress={() => navigation.navigate('Home')}
            >
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 24 }}>Volver atras</Text>
                </View>
            </Pressable>
            <Text>Create collection</Text>
        </>
    );
};

export default CreateCollectionScreen;
