import { View } from "react-native";
import React from "react";
import Typography from "./Typography";
import Icon, { iIconType } from "./Icon";
import { colors } from "../constant/colors";

export interface iSkillBox {
    icon: {
        type?: iIconType;
        name: string;
        color?: string;
    };
    text: string;
}

const SkillBox = ({ icon, text }: iSkillBox) => {
    return (
        <View
            style={{
                padding: 20,
                backgroundColor: "#fff",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#eaeaeaaa",
                justifyContent: "center",
                alignItems: "center",
                width: 175,
                margin: 15,
            }}
        >
            <Icon
                name={icon?.name}
                type={icon?.type ?? "MaterialCommunityIcon"}
                color={icon?.color ?? colors.black}
                size={100}
            />
            <Typography
                type="Poppins_400Regular"
                style={{ fontSize: 14, letterSpacing: 1 }}
            >
                {text}
            </Typography>
        </View>
    );
};

export default SkillBox;
