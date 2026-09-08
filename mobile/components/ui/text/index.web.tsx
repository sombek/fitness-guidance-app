import React from 'react';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import { useTranslation } from '@/i18n/use-translation';

import { textStyle } from './styles';

type ITextProps = React.ComponentProps<'span'> & VariantProps<typeof textStyle>;

const Text = React.forwardRef<React.ComponentRef<'span'>, ITextProps>(
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
      dir,
      ...props
    }: { className?: string } & ITextProps,
    ref
  ) {
    const { language } = useTranslation();
    const isRtl = language === 'ar';

    return (
      <span
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
        dir={dir ?? (isRtl ? 'rtl' : 'ltr')}
        {...props}
        ref={ref}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
