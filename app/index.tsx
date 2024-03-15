import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/HomeScreen";
import CreateCollectionScreen from "../components/screens/CreateCollectionScreen";
import CollectionDetailsScreen from "../components/screens/CollectionDetailsScreen";
import FlashcardScreen from "../components/screens/FlashcardsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    cardStyleInterpolator: ({ current, layouts }) => {
                        return {
                            cardStyle: {
                                transform: [
                                    {
                                        translateX:
                                            current.progress.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [
                                                    layouts.screen.width,
                                                    0,
                                                ], // Desliza desde la derecha
                                            }),
                                    },
                                ],
                            },
                        };
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Create Collection"
                    component={CreateCollectionScreen}
                />
                <Stack.Screen
                    name="Collection Details"
                    component={CollectionDetailsScreen}
                />
                <Stack.Screen name="Flashcard" component={FlashcardScreen} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
