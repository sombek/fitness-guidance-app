import { StyleSheet, Text, type TextProps } from "react-native";

import { useTheme } from "@/hooks/use-theme";

import { useTranslation } from "./use-translation";

type BilingualTextProps = TextProps & {
  ar: string;
  en: string;
  primary?: "ar" | "en";
};

export function BilingualText({
  ar,
  en,
  primary,
  style,
  ...rest
}: BilingualTextProps) {
  const { language } = useTranslation();
  const theme = useTheme();

  const isRtl = language === "ar";
  const first = isRtl || primary === "ar" ? ar : en;
  const second = isRtl || primary === "ar" ? en : ar;

  return (
    <Text
      style={[
        styles.text,
        { color: theme.textPrimary },
        { writingDirection: isRtl ? "rtl" : "ltr" },
        style,
      ]}
      {...rest}
    >
      {first}
      {" · "}
      {second}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
});
