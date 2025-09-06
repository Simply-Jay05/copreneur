import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function cv () {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                {/* header  */}
                <View style={styles.header}>
                    <Text style={styles.title}>Joseph Ogbu</Text>

                    <View style={styles.subHeader}>
                        <Text style={styles.subTitle}>React Native Developer</Text>
                        <View style={styles.progress}>
                            <View style={styles.unitprogress}>
                                <View style={styles.progressHeading}>
                                    <Entypo name="time-slot" size={24} color="black" />
                                    <Text style={styles.progressTitle}>Years</Text>
                                </View>
                                <Text style={styles.progressvalue}>3</Text>
                            </View>
                            
                            <View style={styles.unitprogress}>
                                <View style={styles.progressHeading}>
                                    <Feather name="command" size={24} color="black" />
                                    <Text style={styles.progressTitle}>Years</Text>
                                </View>
                                <Text style={styles.progressvalue}>3</Text>
                            </View>
                            
                        </View>
                    </View>
                </View>
                {/* skills  */}
                {/* projects  */}
                {/* contribution  */}
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