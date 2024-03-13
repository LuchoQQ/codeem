import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const queryClient = new QueryClient();

const Layout = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Slot />
            </QueryClientProvider>
        </>
    );
};

export default Layout;
