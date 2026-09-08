import React from 'react';

import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { Text as RNText } from 'react-native';

import { useTranslation } from '@/i18n/use-translation';

import { textStyle } from './styles';

type ITextProps = React.ComponentProps<typeof RNText> &
  VariantProps<typeof textStyle> & {
    writingDirection?: 'rtl' | 'ltr';
  };

const Text = React.forwardRef<React.ComponentRef<typeof RNText>, ITextProps>(
  function Text(
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = 'md',
      sub,
      italic,
      highlight,
      style,
      writingDirection,
      ...props
    },
    ref
  ) {
    const { language } = useTranslation();
    const isRtl = language === 'ar';

    return (
      <RNText
        className={textStyle({
          isTruncated: isTruncated as boolean,
          bold: bold as boolean,
          underline: underline as boolean,
          strikeThrough: strikeThrough as boolean,
          size,
          sub: sub as boolean,
          italic: italic as boolean,
          highlight: highlight as boolean,
          class: className,
        })}
        {...props}
        style={[
          { writingDirection: writingDirection ?? (isRtl ? 'rtl' : 'ltr') },
          style,
        ]}
        ref={ref}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
