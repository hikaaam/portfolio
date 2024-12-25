import { ActivityIndicator, Dimensions, View } from "react-native";
import { colors } from "./shared/constant/colors";
import Typography from "./shared/ui/Typography";
import Header from "./shared/ui/Header";
import { SectionList } from "react-native";
import { useRef } from "react";
import useFontReady from "./shared/lib/useFontReady";
import Main from "./pages/Home/widgets/Main";
import Profile from "./pages/Home/widgets/Profile";
import Skill from "./pages/Home/widgets/Skill";
import Projects from "./pages/Home/widgets/Projects";
const { height } = Dimensions.get("window");
import "./shared/constant/unistyle";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Contact from "./pages/Home/widgets/Contact";
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
  const { styles } = useStyles(StyleSheet);

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
        style={styles.sectionContainer}
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
            case "projects":
              return <Projects />;
            case "contact":
              return <Contact />;
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

const StyleSheet = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: {
      lg: 60,
      md: 40,
      xs: 20,
      sm: 20,
      xl: 60,
    },
  },
});
