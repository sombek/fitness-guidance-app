import { Box } from "../../components/ui/box";
import { HStack } from "../../components/ui/hstack";
import { Pressable } from "../../components/ui/pressable";
import { ScrollView } from "../../components/ui/scroll-view";
import { Text } from "../../components/ui/text";
import { VStack } from "../../components/ui/vstack";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useTranslation } from "@/i18n/use-translation";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();
  const { t, language } = useTranslation();
  const isRtl = language === "ar";

  const focusItems = [
    {
      title: t.explore.balancedMovement,
      detail: t.explore.balancedMovementDetail,
    },
    {
      title: t.explore.smartHydration,
      detail: t.explore.smartHydrationDetail,
    },
  ] as const;

  const guidanceItems = [
    {
      title: t.explore.energyMealTitle,
      surface: "highlight" as const,
    },
    {
      title: t.explore.recoverTitle,
      surface: "surfaceSelected" as const,
    },
  ] as const;

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
            {t.explore.greeting}
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            {t.explore.welcome}
          </Text>
          <Text style={[styles.caption, { color: theme.textMuted }]}>
            {t.explore.caption}
          </Text>
        </VStack>

        <VStack
          style={[
            styles.featuredCard,
            {
              backgroundColor: theme.surfaceRaised,
              borderColor: theme.borderDefault,
            },
          ]}
        >
          <HStack style={styles.featuredTopline}>
            <Box
              style={[
                styles.featuredIcon,
                { backgroundColor: theme.surfaceSelected },
              ]}
            >
              <Text
                aria-hidden
                style={[styles.iconGlyph, { color: theme.actionSecondary }]}
              >
                ★
              </Text>
            </Box>
            <VStack style={styles.flex}>
              <Text
                style={[styles.labelStrong, { color: theme.actionSecondary }]}
              >
                {t.explore.coachRecommendation}
              </Text>
            </VStack>
            <Text style={[styles.labelStrong, { color: theme.information }]}>
              {t.explore.duration}
            </Text>
          </HStack>

          <VStack style={styles.copyGroup}>
            <Text style={[styles.featuredTitle, { color: theme.textPrimary }]}>
              {t.explore.featuredTitle}
            </Text>
            <Text style={[styles.caption, { color: theme.textMuted }]}>
              {t.explore.featuredBody}
            </Text>
          </VStack>

          <VStack style={styles.progressGroup}>
            <Box
              style={[
                styles.progressTrack,
                { backgroundColor: theme.progressIncomplete },
              ]}
            >
              <Box
                style={[
                  styles.progressValue,
                  { backgroundColor: theme.progressComplete },
                ]}
              />
            </Box>
            <HStack style={styles.successRow}>
              <Text
                aria-hidden
                style={[styles.statusIcon, { color: theme.success }]}
              >
                ✓
              </Text>
              <Text
                style={[styles.successLabel, { color: theme.textSecondary }]}
              >
                {t.explore.readyToComplete}
              </Text>
              <Text style={[styles.labelStrong, { color: theme.success }]}>
                {t.explore.percent}
              </Text>
            </HStack>
          </VStack>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t.explore.startSession}
            style={({ pressed }) => [
              styles.primaryButton,
              {
                backgroundColor: pressed
                  ? theme.actionPrimaryHover
                  : theme.actionPrimary,
                flexDirection: isRtl ? "row-reverse" : "row",
              },
              pressed && styles.pressed,
            ]}
          >
            <Text style={[styles.buttonLabel, { color: theme.textInverse }]}>
              {t.explore.startSession}
            </Text>
            <Text
              aria-hidden
              style={[styles.arrow, { color: theme.textInverse }]}
            >
              {isRtl ? "←" : "→"}
            </Text>
          </Pressable>
        </VStack>

        <VStack style={styles.section}>
          <HStack style={styles.sectionHeader}>
            <VStack>
              <Text
                style={[styles.labelStrong, { color: theme.actionSecondary }]}
              >
                {t.explore.focusTitle}
              </Text>
            </VStack>
            <Text style={[styles.caption, { color: theme.textMuted }]}>
              {t.explore.taskCount}
            </Text>
          </HStack>

          <VStack
            style={[
              styles.list,
              {
                backgroundColor: theme.surface,
                borderColor: theme.borderDefault,
              },
            ]}
          >
            {focusItems.map((item, index) => (
              <Pressable
                key={item.title}
                accessibilityRole="button"
                accessibilityLabel={`${item.title}, ${item.detail}`}
                style={({ pressed }) => [
                  styles.listRow,
                  {
                    flexDirection: isRtl ? "row-reverse" : "row",
                  },
                  index > 0 && {
                    borderTopWidth: StyleSheet.hairlineWidth,
                    borderTopColor: theme.borderDefault,
                  },
                  pressed && styles.pressed,
                ]}
              >
                <Box
                  style={[
                    styles.smallIcon,
                    { backgroundColor: theme.backgroundSubtle },
                  ]}
                >
                  <Text
                    aria-hidden
                    style={[styles.infoGlyph, { color: theme.actionSecondary }]}
                  >
                    i
                  </Text>
                </Box>
                <VStack style={styles.flex}>
                  <Text
                    style={[styles.labelStrong, { color: theme.textPrimary }]}
                  >
                    {item.title}
                  </Text>
                </VStack>
                <Text
                  style={[
                    styles.detail,
                    { color: theme.textSecondary },
                    isRtl && { textAlign: "left" },
                  ]}
                >
                  {item.detail}
                </Text>
              </Pressable>
            ))}
          </VStack>
        </VStack>

        <VStack style={styles.section}>
          <VStack>
            <Text
              style={[styles.labelStrong, { color: theme.actionSecondary }]}
            >
              {t.explore.guidanceTitle}
            </Text>
          </VStack>

          <VStack style={styles.guidanceList}>
            {guidanceItems.map((item) => (
              <Pressable
                key={item.title}
                accessibilityRole="button"
                accessibilityLabel={item.title}
                style={({ pressed }) => pressed && styles.pressed}
              >
                <HStack
                  style={[
                    styles.guidanceCard,
                    {
                      backgroundColor: theme[item.surface],
                      flexDirection: isRtl ? "row-reverse" : "row",
                    },
                  ]}
                >
                  <Text
                    aria-hidden
                    style={[styles.iconGlyph, { color: theme.actionSecondary }]}
                  >
                    ★
                  </Text>
                  <VStack style={styles.flex}>
                    <Text
                      style={[
                        styles.labelStrong,
                        {
                          color: theme.textPrimary,
                          textAlign: isRtl ? "right" : "left",
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </VStack>
                  <Text
                    aria-hidden
                    style={[styles.arrow, { color: theme.textMuted }]}
                  >
                    {isRtl ? "←" : "→"}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>

        <HStack
          style={[
            styles.coachNote,
            {
              backgroundColor: theme.highlight,
              flexDirection: isRtl ? "row-reverse" : "row",
            },
          ]}
        >
          <Text
            aria-hidden
            style={[styles.infoGlyph, { color: theme.actionSecondary }]}
          >
            i
          </Text>
          <VStack style={styles.flex}>
            <Text
              style={[
                styles.labelStrong,
                {
                  color: theme.textPrimary,
                  textAlign: isRtl ? "right" : "left",
                },
              ]}
            >
              {t.explore.coachNoteTitle}
            </Text>
            <Text style={[styles.caption, { color: theme.textSecondary }]}>
              {t.explore.coachNoteBody}
            </Text>
          </VStack>
        </HStack>
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
    fontSize: 48,
    lineHeight: 60,
    fontWeight: "700",
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
    minHeight: 72,
    padding: Spacing.three,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
  },
  smallIcon: {
    width: 36,
    height: 36,
    borderRadius: Spacing.two,
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    maxWidth: 112,
    textAlign: "right",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
  },
  guidanceList: {
    gap: Spacing.two,
  },
  guidanceCard: {
    minHeight: 80,
    padding: Spacing.three,
    borderRadius: Spacing.three,
    alignItems: "center",
    gap: Spacing.three,
  },
  coachNote: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    alignItems: "flex-start",
    gap: Spacing.three,
  },
});
