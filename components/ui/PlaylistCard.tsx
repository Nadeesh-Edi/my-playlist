import { Colors } from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";
import { Avatar, Card, IconButton, Menu, Surface } from "react-native-paper";
import CardMenu from "./CardMenu";
import { DELETE_PLAYLIST_CONFIRMATION } from "@/constants/Strings";
import { Link, useNavigation, useRouter } from "expo-router";

function PlaylistCard({ title, id }: { title: string, id: string }) {
    const theme = useColorScheme() ?? 'light';
    const navigation = useNavigation();
    const router = useRouter();

    const editPressed = () => {
        console.log("editPressed");
    }

    const deletePressed = () => {
        console.log("deletePressed");
    }

    const openPlayList = () => {
        router.push({ pathname: "/songsList/[id]", params: { id: id } }, { relativeToDirectory: false })
    }

    return (<>
        <Surface elevation={2} style={styles(theme).surfaceBg}>
            <Card style={styles(theme).cardBg} onPress={openPlayList}>
                <Card.Title
                    title={title}
                    left={(props) => <Avatar.Icon {...props} icon="music" style={{ backgroundColor: Colors.common.playlistAvatarBg }} />}
                    right={(props) => <CardMenu props={props} onEditPressed={editPressed} onDeletePressed={deletePressed} deleteDialogContent={DELETE_PLAYLIST_CONFIRMATION} />} />
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

export default PlaylistCard;