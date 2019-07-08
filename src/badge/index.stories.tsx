import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import { Badge } from './';

function useKnobs() {
  const borderWidth = number('BorderWidth', 0);
  const children = text('Children', 'Badge Text');
  const intent = select<
    'primary' | 'secondary' | 'danger' | 'info' | 'warning' | 'success' | null
  >(
    'Intent',
    {
      Danger: 'danger',
      Info: 'info',
      None: null,
      Primary: 'primary',
      Secondary: 'secondary',
      Success: 'success',
      Warning: 'warning'
    },
    null
  );

  const size = select<'small' | 'medium' | 'large' | null>(
    'Size',
    {
      None: null,
      Small: 'small',
      Medium: 'medium',
      Large: 'large'
    },
    null
  );

  const variant = select<'rounded-rectangle' | 'rectangle' | 'rounded' | null>(
    'Variant',
    {
      None: null,
      'Rounded Rectangle': 'rounded-rectangle',
      Rectangle: 'rectangle',
      Rounded: 'rounded'
    },
    null
  );

  return { borderWidth, children, intent, size, variant };
}

storiesOf('Components|Badge', module).add('default', () => {
  const { borderWidth, children, intent, size, variant } = useKnobs();
  return (
    <Badge
      borderWidth={borderWidth}
      intent={intent}
      size={size}
      variant={variant}
    >
      {children}
    </Badge>
  );
});
