import { Box } from "../../components/ui/box";
import { HStack } from "../../components/ui/hstack";
import { Pressable } from "../../components/ui/pressable";
import { ScrollView } from "../../components/ui/scroll-view";
import { Text } from "../../components/ui/text";
import { VStack } from "../../components/ui/vstack";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const focusItems = [
  {
    title: "حركة متوازنة",
    subtitle: "Balanced movement",
    detail: "20 دقيقة · 20 min",
  },
  {
    title: "ترطيب ذكي",
    subtitle: "Smart hydration",
    detail: "6 من 8 أكواب · 6 of 8 cups",
  },
] as const;

const guidanceItems = [
  {
    title: "وجبة تدعم طاقتك",
    subtitle: "A meal that supports your energy",
    surface: "highlight" as const,
  },
  {
    title: "استشفاء بهدوء",
    subtitle: "Recover with intention",
    surface: "surfaceSelected" as const,
  },
] as const;

export default function ExploreScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();
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
          <Text style={[styles.eyebrow, { color: theme.actionSecondary }]}>
            دليلك اليومي · YOUR DAILY GUIDE
          </Text>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            أهلاً عبدالله
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Welcome back, Abdullah
          </Text>
          <Text style={[styles.caption, { color: theme.textMuted }]}>
            خطوة واضحة اليوم تصنع تقدماً يدوم.{"\n"}
            One focused step today builds lasting progress.
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
                توصية المدرب
              </Text>
              <Text style={[styles.caption, { color: theme.textSecondary }]}>
                Coach recommendation
              </Text>
            </VStack>
            <Text style={[styles.labelStrong, { color: theme.information }]}>
              18 MIN
            </Text>
          </HStack>

          <VStack style={styles.copyGroup}>
            <Text style={[styles.featuredTitle, { color: theme.textPrimary }]}>
              تنفّس، تحرّك، واستمر
            </Text>
            <Text style={[styles.body, { color: theme.textSecondary }]}>
              Breathe, move, and keep going
            </Text>
            <Text style={[styles.caption, { color: theme.textMuted }]}>
              جلسة حركة خفيفة صُممت لتناسب طاقتك اليوم.{"\n"}
              A gentle movement session shaped around today&apos;s energy.
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
              <Text aria-hidden style={[styles.statusIcon, { color: theme.success }]}>
                ✓
              </Text>
              <Text
                style={[
                  styles.successLabel,
                  { color: theme.textSecondary },
                ]}
              >
                جاهز للإكمال · Ready to complete
              </Text>
              <Text style={[styles.labelStrong, { color: theme.success }]}>
                72%
              </Text>
            </HStack>
          </VStack>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="ابدأ جلسة اليوم، Start today's session"
            style={({ pressed }) => [
              styles.primaryButton,
              {
                backgroundColor: pressed
                  ? theme.actionPrimaryHover
                  : theme.actionPrimary,
              },
              pressed && styles.pressed,
            ]}
          >
            <Text
              style={[styles.buttonLabel, { color: theme.textInverse }]}
            >
              ابدأ جلسة اليوم · Start today&apos;s session
            </Text>
            <Text aria-hidden style={[styles.arrow, { color: theme.textInverse }]}>
              ←
            </Text>
          </Pressable>
        </VStack>

        <VStack style={styles.section}>
          <HStack style={styles.sectionHeader}>
            <VStack>
              <Text
                style={[styles.labelStrong, { color: theme.actionSecondary }]}
              >
                خطوتك اليوم
              </Text>
              <Text style={[styles.caption, { color: theme.textMuted }]}>
                Your focus today
              </Text>
            </VStack>
            <Text style={[styles.caption, { color: theme.textMuted }]}>
              2 مهام · 2 tasks
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
                accessibilityLabel={`${item.title}, ${item.subtitle}`}
                style={({ pressed }) => [
                  styles.listRow,
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
                  <Text style={[styles.caption, { color: theme.textMuted }]}>
                    {item.subtitle}
                  </Text>
                </VStack>
                <Text
                  style={[
                    styles.detail,
                    { color: theme.textSecondary },
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
              استكشف الإرشادات
            </Text>
            <Text style={[styles.caption, { color: theme.textMuted }]}>
              Explore guidance
            </Text>
          </VStack>

          <VStack style={styles.guidanceList}>
            {guidanceItems.map((item) => (
              <Pressable
                key={item.title}
                accessibilityRole="button"
                accessibilityLabel={`${item.title}, ${item.subtitle}`}
                style={({ pressed }) => pressed && styles.pressed}
              >
                <HStack
                  style={[
                    styles.guidanceCard,
                    { backgroundColor: theme[item.surface] },
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
                        { color: theme.textPrimary },
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.caption,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {item.subtitle}
                    </Text>
                  </VStack>
                  <Text aria-hidden style={[styles.arrow, { color: theme.textMuted }]}>
                    ←
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>

        <HStack
          style={[styles.coachNote, { backgroundColor: theme.highlight }]}
        >
          <Text
            aria-hidden
            style={[styles.infoGlyph, { color: theme.actionSecondary }]}
          >
            i
          </Text>
          <VStack style={styles.flex}>
            <Text style={[styles.labelStrong, { color: theme.textPrimary }]}>
              ملاحظة مدربك
            </Text>
            <Text style={[styles.caption, { color: theme.textSecondary }]}>
              الاستمرارية أهم من الكمال · Consistency matters more than
              perfection.
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
    alignItems: "flex-end",
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
