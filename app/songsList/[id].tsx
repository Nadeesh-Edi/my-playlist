import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/ui/Header";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet } from "react-native";

function SongsList() {
    const { id } = useLocalSearchParams()

    return (<>
        <Header />
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView>
                <ThemedText type="defaultSemiBold">In playlist no {id} Hehe</ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    </>);
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});

export default SongsList;