import { useRouter } from "expo-router";
import { Linking, StyleSheet, ToastAndroid, useColorScheme } from "react-native";
import { Avatar, Card, Icon, Surface } from "react-native-paper";
import CardMenu from "./CardMenu";
import { Colors } from "@/constants/Colors";
import { DELETE_SONG_CONFIRMATION, UNEXPECTED_ERROR } from "@/constants/Strings";
import { getSpotifyUrl } from "@/constants/Constants";
import useToast from "@/hooks/useToast";

function SongCard({ title, id }: { title: string, id: string }) {
    const theme = useColorScheme() ?? 'light';
    const { showToast } = useToast()

    const editPressed = () => {
        console.log("editPressed");
    }

    const deletePressed = () => {
        console.log("deletePressed");
    }

    const openPlayList = async () => {
        const spotifyUrl = getSpotifyUrl(title);
        try {
            await Linking.openURL(spotifyUrl);
        } catch (e) {
            showToast(UNEXPECTED_ERROR);
        }
    }

    return (<>
        <Surface elevation={2} style={styles(theme).surfaceBg}>
            <Card style={styles(theme).cardBg} onPress={openPlayList}>
                <Card.Title
                    title={title}
                    left={(props) => <Surface elevation={2} style={styles(theme).surfaceBg}>
                        <Icon source="play" size={35} color={Colors.common.playIcon} />
                    </Surface>}
                    right={(props) => <CardMenu props={props} onEditPressed={editPressed} onDeletePressed={deletePressed} deleteDialogContent={DELETE_SONG_CONFIRMATION} />} />
            </Card>
        </Surface>
    </>);
}

const styles = (theme: 'light' | 'dark') => StyleSheet.create({
    cardBg: {
        marginVertical: 10,
        backgroundColor: theme === "dark"
            ? 'rgba(0, 0, 0, 0.8)'  // Dark theme background with opacity
            : 'rgba(255, 255, 255, 0.8)'
    },
    surfaceBg: {
        backgroundColor: "transparent"
    }
})

export default SongCard;