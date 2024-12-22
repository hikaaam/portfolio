import { Text, TextProps, View } from "react-native";
import React from "react";
import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
    useFonts,
} from "@expo-google-fonts/poppins";

const Typography = (props: iTypography) => {
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });

    if (!fontsLoaded) return null;

    return (
        <Text
            {...props}
            style={[{
                fontFamily: props?.type ?? "Poppins_400Regular",
                fontSize: 14,
            }, props?.style]}
        />
    );
};

export default Typography;

export interface iTypography extends TextProps {
    type?:
        | "Poppins_100Thin"
        | "Poppins_100Thin_Italic"
        | "Poppins_200ExtraLight"
        | "Poppins_200ExtraLight_Italic"
        | "Poppins_300Light"
        | "Poppins_300Light_Italic"
        | "Poppins_400Regular"
        | "Poppins_400Regular_Italic"
        | "Poppins_500Medium"
        | "Poppins_500Medium_Italic"
        | "Poppins_600SemiBold"
        | "Poppins_600SemiBold_Italic"
        | "Poppins_700Bold"
        | "Poppins_700Bold_Italic"
        | "Poppins_800ExtraBold"
        | "Poppins_800ExtraBold_Italic"
        | "Poppins_900Black"
        | "Poppins_900Black_Italic";
}
