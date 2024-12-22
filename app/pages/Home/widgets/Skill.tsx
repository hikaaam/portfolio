import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@/app/shared/constant/colors";
import Typography from "@/app/shared/ui/Typography";
import SkillBox from "@/app/shared/ui/SkillBox";
import { skills } from "@/app/shared/constant/skills";
const { width } = Dimensions.get("window");

const Skill = () => {
    return (
        <View style={styles.container}>
            <Typography
                type="Poppins_700Bold"
                style={{ fontSize: 30, color: colors.black }}
            >
                Skills
            </Typography>
            <Typography
                type="Poppins_500Medium"
                style={styles.textSection}
            >
                Here are some of technology that i usually use
            </Typography>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    maxWidth: width / 2,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {skills.map((item, index) => (
                    <SkillBox
                        {...item}
                        key={item?.text + index}
                    />
                ))}
            </View>
        </View>
    );
};

export default Skill;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    textSection: {
        fontSize: 20,
        lineHeight: 30,
        maxWidth: 720,
        color: colors.black,
        marginVertical: 20,
    },
});
