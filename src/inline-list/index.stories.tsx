import React from 'react';
import { storiesOf } from '@storybook/react';
import { InlineList } from '.';

storiesOf('Components|InlineList', module).add('default', () => {
  return (
    <InlineList as="ol">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </InlineList>
  );
});
