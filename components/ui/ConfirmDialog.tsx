import { Colors } from "@/constants/Colors";
import { ConfrimDialogProps } from "@/interfaces";
import React, { FC } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

const ConfirmDialog : FC<ConfrimDialogProps> = (props) : JSX.Element => {
    const theme = useColorScheme() ?? 'light';

    return (
        <Portal>
            <Dialog visible={props.visible} onDismiss={props.cancelled}>
                <Dialog.Content>
                    <Text variant="bodyMedium">{ props.content }</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button textColor={theme === "dark" ? Colors.dark.text : Colors.light.text} rippleColor={Colors.common.dangerRipple} onPress={e => {
                        e.preventDefault()
                        props.confirmed()
                    }} loading={props.loading}>Confirm</Button>
                    <Button textColor={theme === "dark" ? Colors.dark.text : Colors.light.text} rippleColor={Colors.common.primaryRipple} onPress={e => {
                        e.preventDefault()
                        props.cancelled()
                    }}>Cancel</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
} 

export default ConfirmDialog;