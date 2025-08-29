import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Me () {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Welcome screen</Text>
                <Text>Welcome to default screen</Text>
                <Link href={"/signup"} 
                style={{
                    fontWeight: "bold",
                    color: "brown",
                }}>Create a new account</Link>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    p: {
        fontSize: 16,
        fontWeight: "bold",
    }
})