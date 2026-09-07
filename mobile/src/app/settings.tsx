import { Box } from "../../components/ui/box";
import { HStack } from "../../components/ui/hstack";
import { Pressable } from "../../components/ui/pressable";
import { ScrollView } from "../../components/ui/scroll-view";
import { Text } from "../../components/ui/text";
import { VStack } from "../../components/ui/vstack";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage, useTranslation } from "@/i18n/use-translation";
import { version } from "expo/package.json";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SettingsRow({
  label,
  value,
  onPress,
  isLast,
  isRtl,
  theme,
}: {
  label: string;
  value?: string;
  onPress?: () => void;
  isLast?: boolean;
  isRtl: boolean;
  theme: ReturnType<typeof useTheme>;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        styles.listRow,
        {
          flexDirection: isRtl ? "row-reverse" : "row",
          opacity: pressed && onPress ? 0.76 : 1,
        },
        !isLast && {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: theme.borderDefault,
        },
      ]}
    >
      <Text
        style={[
          styles.labelStrong,
          { color: theme.textPrimary },
        ]}
      >
        {label}
      </Text>
      {value && (
        <Text style={[styles.caption, { color: theme.textMuted }]}>
          {value}
        </Text>
      )}
    </Pressable>
  );
}

export default function SettingsScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();
  const { t, language } = useTranslation();
  const { setLanguage, toggleLanguage } = useLanguage();
  const isRtl = language === "ar";

  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.five,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
    >
      <VStack style={styles.page}>
        <VStack style={styles.header}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            {t.settings.title}
          </Text>
        </VStack>

        <VStack style={styles.section}>
          <Text
            style={[styles.labelStrong, { color: theme.actionSecondary }]}
          >
            {t.settings.language}
          </Text>
          <VStack
            style={[
              styles.list,
              {
                backgroundColor: theme.surface,
                borderColor: theme.borderDefault,
              },
            ]}
          >
            <SettingsRow
              label={t.settings.arabic}
              value={language === "ar" ? "✓" : undefined}
              onPress={() => setLanguage("ar")}
              isLast={false}
              isRtl={isRtl}
              theme={theme}
            />
            <SettingsRow
              label={t.settings.english}
              value={language === "en" ? "✓" : undefined}
              onPress={() => setLanguage("en")}
              isLast
              isRtl={isRtl}
              theme={theme}
            />
          </VStack>
        </VStack>

        <VStack style={styles.section}>
          <Text
            style={[styles.labelStrong, { color: theme.actionSecondary }]}
          >
            {t.settings.about}
          </Text>
          <VStack
            style={[
              styles.list,
              {
                backgroundColor: theme.surface,
                borderColor: theme.borderDefault,
              },
            ]}
          >
            <SettingsRow
              label={t.settings.version}
              value={`v${version}`}
              isLast
              isRtl={isRtl}
              theme={theme}
            />
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  page: {
    width: "100%",
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    gap: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.five,
  },
  header: {
    gap: Spacing.one,
    paddingTop: Spacing.four,
  },
  eyebrow: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: "700",
    writingDirection: "rtl",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  caption: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "500",
  },
  labelStrong: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
  featuredCard: {
    borderWidth: 1,
    borderRadius: Spacing.four,
    padding: Spacing.four,
    gap: Spacing.four,
  },
  featuredTopline: {
    alignItems: "center",
    gap: Spacing.two,
  },
  featuredIcon: {
    width: 40,
    height: 40,
    borderRadius: Spacing.three,
    alignItems: "center",
    justifyContent: "center",
  },
  iconGlyph: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
  },
  infoGlyph: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "800",
  },
  statusIcon: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "800",
  },
  arrow: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
  },
  flex: {
    flex: 1,
  },
  copyGroup: {
    gap: Spacing.one,
  },
  featuredTitle: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: "700",
    writingDirection: "rtl",
  },
  progressGroup: {
    gap: Spacing.two,
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressValue: {
    width: "72%",
    height: "100%",
    borderRadius: 3,
  },
  successRow: {
    alignItems: "center",
    gap: Spacing.two,
  },
  successLabel: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "700",
  },
  primaryButton: {
    minHeight: 48,
    borderRadius: Spacing.three,
    paddingHorizontal: Spacing.three,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.76,
  },
  section: {
    gap: Spacing.three,
  },
  sectionHeader: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    borderWidth: 1,
    borderRadius: Spacing.three,
    overflow: "hidden",
  },
  listRow: {
    minHeight: 56,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.three,
  },
});
