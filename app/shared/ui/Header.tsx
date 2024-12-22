import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Typography from "./Typography";
import { colors } from "../constant/colors";
import { iSections } from "@/app";
import { images } from "@/assets/images/images";

interface IHeader {
    data: iSections[];
    onPress: (screen: iSections) => void;
}

export default function Header(props: IHeader) {
    return (
        <View
            style={styles.headerContainer}
        >
            <TouchableOpacity onPress={() => props?.onPress("main")}>
                <Image
                    source={images.icon}
                    style={styles.imgIcon}
                />
            </TouchableOpacity>
            {props?.data?.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => props?.onPress(item)}
                        key={"headeritem" + item + index}
                    >
                        <Typography style={styles.textHeader}>
                            {item}
                        </Typography>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerContainer: {
        padding: 30,
        paddingHorizontal: 60,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#eaeaeaaa",
    },
    textHeader: {
        color: colors.secondary,
        fontSize: 24,
        fontFamily: "Poppins_300Light",
        marginRight: 20,
    },
    imgIcon: {
        height: 33,
        width: 60,
        resizeMode: "cover",
        marginRight: 16,
    },
});
