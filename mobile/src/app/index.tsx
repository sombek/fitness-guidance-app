import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTranslation } from '@/i18n/use-translation';

function getDevMenuHint(t: ReturnType<typeof useTranslation>['t']) {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">{t.home.step2HintWeb}</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        {t.home.step2HintDevice.replace('{shortcut}', t.home.shortcut)}
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      {t.home.step2HintAndroid.replace('{shortcut}', shortcut)}
    </ThemedText>
  );
}

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            {t.home.title}
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
          {t.home.subtitle}
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <HintRow
            title={t.home.step1Title}
            hint={<ThemedText type="code">{t.home.step1Hint}</ThemedText>}
          />
          <HintRow title={t.home.step2Title} hint={getDevMenuHint(t)} />
          <HintRow
            title={t.home.step3Title}
            hint={<ThemedText type="code">{t.home.step3Hint}</ThemedText>}
          />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
