import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Menu } from "react-native-paper";
import ConfirmDialog from "./ConfirmDialog";
import { CardMenuProps } from "@/interfaces";

function CardMenu({ props, onEditPressed, onDeletePressed, deleteDialogContent }: CardMenuProps) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleMenuPress = () => {
        setMenuVisible(true);
    };
    const closeMenu = () => {
        setMenuVisible(false);
    }

    const openConfirmDialog = () => {
        closeMenu();
        setDialogVisible(true);
    }
    const closeConfirmDialog = () => {
        setDialogVisible(false);
    }

    return (<>
        <View>
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={
                    <IconButton {...props} icon="dots-vertical" onPress={handleMenuPress} />
                }
                anchorPosition="bottom"
                style={styles.menuBg}
            >
                <Menu.Item onPress={onEditPressed} leadingIcon="comment-edit" title="Edit" rippleColor="#323f85" />
                <Menu.Item onPress={openConfirmDialog} leadingIcon="delete" title="Delete" titleStyle={styles.contents} rippleColor="#853232" />
            </Menu>

            <ConfirmDialog visible={dialogVisible} content={deleteDialogContent} confirmed={onDeletePressed} cancelled={closeConfirmDialog} />
        </View>
    </>);
}

const styles = StyleSheet.create({
    menuBg: {
        borderRadius: 12
    },
    contents: {
        color: "red"
    }
})

export default CardMenu;