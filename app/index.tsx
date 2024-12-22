import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "./shared/constant/colors";
import Typography from "./shared/ui/Typography";
import Header from "./shared/ui/Header";
import { SectionList } from "react-native";
import { useEffect, useRef, useState } from "react";
import Animated, { LightSpeedInLeft } from "react-native-reanimated";
import useFontReady from "./shared/lib/useFontReady";
import Button from "./shared/ui/Button";
import Main from "./pages/Home/widgets/Main";
import Profile from "./pages/Home/widgets/Profile";
import Skill from "./pages/Home/widgets/Skill";
const { height, width } = Dimensions.get("window");

//section list
const sections: iSections[] = [
  "main",
  "profile",
  "skills",
  "projects",
  "contact",
];
export type iSections = "main" | "profile" | "skills" | "projects" | "contact";

export default function Home() {
  const { fontReady } = useFontReady();
  const sectionlistRef = useRef<SectionList>(null);

  const scrollTo = (screenName: iSections) => {
    if (sectionlistRef?.current) {
      sectionlistRef.current.scrollToLocation({
        itemIndex: 0,
        sectionIndex: sections.findIndex((item) => item === screenName),
        animated: true,
      });
    }
  };

  if (!fontReady) {
    return (
      <View
        style={[styles.container, {
          justifyContent: "center",
          alignItems: "center",
        }]}
      >
        <ActivityIndicator size={"large"} animating color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        data={sections.slice(1, sections.length)}
        onPress={scrollTo}
      />
      <SectionList
        ref={sectionlistRef}
        style={{ flex: 1, paddingHorizontal: 60 }}
        sections={sections.map((item) => ({
          data: [item],
          title: item,
        }))}
        renderItem={({ item }: { item: iSections }) => {
          switch (item) {
            case "main":
              return <Main />;
            case "profile":
              return <Profile />;
            case "skills":
              return <Skill />;
            default:
              return (
                <View
                  style={{
                    height,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    {item}
                  </Typography>
                </View>
              );
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
