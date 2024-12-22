import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/ui/Header";
import SongCard from "@/components/ui/SongCard";
import { Song } from "@/interfaces";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet } from "react-native";

function SongsList() {
    const { id } = useLocalSearchParams()
    const songsList: Array<Song> = [
        {
            title: "die with a smile",
            id: "1"
        },
        {
            title: "APT",
            id: "2"
        },
        {
            title: "Ra ahasin",
            id: "3"
        },
        {
            title: "Snuff",
            id: "4"
        },
        {
            title: "Unforgiven",
            id: "5"
        },
        {
            title: "Nutshell",
            id: "6"
        },
        {
            title: "Igilenna oba ekka akase",
            id: "7"
        },
        {
            title: "Dura akahe",
            id: "8"
        },
        {
            title: "Kamelia mal",
            id: "9"
        },

    ]

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

                {songsList.map((item, index) => {
                    return <SongCard title={item.title} id={item.id} key={index} />
                })}
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