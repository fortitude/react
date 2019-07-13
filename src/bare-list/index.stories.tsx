import React from 'react';
import { storiesOf } from '@storybook/react';
import { BareList } from '.';

storiesOf('Components|BareList', module).add('default', () => {
  return (
    <BareList as="ol">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </BareList>
  );
});
