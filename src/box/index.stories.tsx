import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import { Box } from '.';

function useKnobs() {
  const borderWidth = number('BorderWidth', 0);
  const children = text('Children', 'Box Text');
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

  const variant = select<'rounded-rectangle' | 'rectangle' | null>(
    'Variant',
    {
      None: null,
      'Rounded Rectangle': 'rounded-rectangle',
      Rectangle: 'rectangle'
    },
    null
  );

  return { borderWidth, children, intent, size, variant };
}

storiesOf('Components|Box', module).add('default', () => {
  const { borderWidth, children, intent, size, variant } = useKnobs();
  return (
    <Box
      borderWidth={borderWidth}
      intent={intent}
      size={size}
      variant={variant}
    >
      {children}
    </Box>
  );
});
