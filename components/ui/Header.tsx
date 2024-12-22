import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Appbar } from "react-native-paper";

function Header() {
    const navigation = useNavigation();
    const theme = useColorScheme() ?? 'light';

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.overlay}>
                <Appbar.Header
                    mode="small"
                    style={[
                        styles.transparentHeader,
                        { backgroundColor: "transparent" } // Ensures dynamic transparency
                    ]}
                >
                    <Appbar.BackAction
                        onPress={goBack}
                        size={30}
                        color={theme === "dark" ? Colors.dark.text : Colors.light.text}
                    />
                </Appbar.Header>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    transparentHeader: {
        position: "absolute", // Overlay position
        top: 0,
        left: 0,
        right: 0,
        elevation: 0, // Remove shadow on Android
        shadowOpacity: 0, // Remove shadow on iOS
        zIndex: 1, // Ensure it overlays other components
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1, // Bring it to the front
        paddingTop: 50
    },
    container: {
        flex: 1,
        backgroundColor: "transparent", // Transparent background for overlay effect
    },
});

export default Header;
