import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import Icon, { iIcon } from "./Icon";
import Typography, { iTypography } from "./Typography";
import { colors } from "../constant/colors";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface iButton {
    withIcon?: boolean;
    iconProps?: iIcon;
    textProps?: iTypography;
    text?: string;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

const Button = (props?: iButton) => {
    const { styles } = useStyles(StyleSheet);
    return (
        <TouchableOpacity
            style={[styles.container, props?.style]}
            onPress={props?.onPress}
        >
            {props?.withIcon && (
                <Icon
                    {...props?.iconProps}
                    type={props?.iconProps?.type ?? "Ionicons"}
                    name={props?.iconProps?.name ?? "logo-github"}
                    size={props?.iconProps?.size ?? 45}
                    color={props?.iconProps?.color ?? colors.white}
                />
            )}
            <Typography
                {...props?.textProps}
                style={[styles.text, props?.textProps?.style]}
            >
                {props?.text}
            </Typography>
        </TouchableOpacity>
    );
};

export default Button;

const StyleSheet = createStyleSheet({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        width: {
            xs: 168,
            sm: 168,
            md: 168,
            lg: 190,
            xl: 190,
            superLarge: 190,
            tvLike: 190,
        },
        paddingHorizontal: 11,
        paddingVertical: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#eaeaeaaa",
    },
    text: {
        color: colors.white,
        fontSize: 24,
        marginLeft: 11,
        fontFamily: "Poppins_300Light",
    },
});
