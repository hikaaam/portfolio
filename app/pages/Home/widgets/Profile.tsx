import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
import { colors } from "@/app/shared/constant/colors";
import Typography from "@/app/shared/ui/Typography";
import { images } from "@/assets/images/images";
const { height, width } = Dimensions.get("window");

const Profile = () => {
    return (
        <View style={styles.container}>
            <Typography
                type="Poppins_700Bold"
                style={{ fontSize: 30, color: colors.black }}
            >
                About Me
            </Typography>
            <View
                style={styles.sectionRow}
            >
                <Animated.View
                    style={{ flex: 1 }}
                    entering={SlideInLeft.delay(100)}
                >
                    <Typography
                        type="Poppins_500Medium"
                        style={styles.textSection}
                    >
                        I have 3 years of experience in developing mobile apps
                        using React Native, and I am also experienced in
                        building Backend using NodeJS or Laravel.
                    </Typography>
                    <Typography
                        type="Poppins_500Medium"
                        style={[styles.textSection, { marginTop: 20 }]}
                    >
                        I like learning new technology because technology is
                        getting more advance every day and i don't want to miss
                        out on it.
                    </Typography>
                </Animated.View>
                <Animated.View
                    style={{
                        flex: 1,
                        alignItems: "flex-end",
                    }}
                    entering={SlideInRight.delay(100)}
                >
                    <Image
                        source={images.ilyas}
                        style={{
                            maxWidth: width / 2.5,
                            maxHeight: height / 2.5,
                        }}
                    />
                </Animated.View>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: { paddingHorizontal: 100 },
    sectionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    textSection: {
        fontSize: 20,
        lineHeight: 30,
        maxWidth: 720,
        color: colors.black,
    },
});
