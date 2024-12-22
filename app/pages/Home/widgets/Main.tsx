import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import Animated, { LightSpeedInLeft } from "react-native-reanimated";
import { colors } from "@/app/shared/constant/colors";
import Button from "@/app/shared/ui/Button";
import Typography from "@/app/shared/ui/Typography";
const { height } = Dimensions.get("window");

const Main = () => {
    return (
        <View
            style={styles.container}
        >
            <View>
                <Animated.View entering={LightSpeedInLeft.delay(100)}>
                    <Typography
                        type="Poppins_600SemiBold"
                        style={styles.textGreet}
                    >
                        Hey, I am
                    </Typography>
                </Animated.View>
                <Animated.View entering={LightSpeedInLeft.delay(200)}>
                    <Typography
                        type="Poppins_700Bold"
                        style={styles.textName}
                    >
                        Ilyas Abdurahman Yusuf
                    </Typography>
                </Animated.View>
                <Animated.View entering={LightSpeedInLeft.delay(300)}>
                    <Typography
                        type="Poppins_600SemiBold"
                        style={styles.textDesc}
                    >
                        a software Enginer from Indonesia, i make Mobile Apps,
                        Website, Backend and other Magic Stuff ✨
                    </Typography>
                </Animated.View>
                <Animated.View
                    entering={LightSpeedInLeft.delay(400)}
                    style={styles.btnContainer}
                >
                    <Button
                        withIcon
                        iconProps={{ name: "logo-github" }}
                        text="Github"
                    />
                    <Button
                        withIcon
                        iconProps={{
                            name: "logo-linkedin",
                            color: colors.primary,
                        }}
                        text="LinkedIn"
                        style={styles.btnLinkedin}
                        textProps={{ style: { color: colors.black } }}
                    />
                </Animated.View>
            </View>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        height,
        justifyContent: "center",
        alignItems: "center",
    },
    textGreet: {
        fontSize: 36,
        color: colors.black,
        lineHeight: 54,
    },
    textName: {
        fontSize: 48,
        color: colors.secondary,
        lineHeight: 72,
    },
    textDesc: {
        fontSize: 30,
        color: colors.black,
        maxWidth: 850,
        lineHeight: 45,
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 200,
    },
    btnLinkedin: {
        marginLeft: 28,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: "#999999aa",
    },
});
