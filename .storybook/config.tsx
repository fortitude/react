import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const theme = {
  base: {
    unit: 2,
    fontSize: 16,
    borderRadius: 4
  },
  typography: {
    body: 'sans-serif'
  },
  colors: {
    type: 'light',
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    intents: {
      danger: '#E2190C',
      info: '#33D8A5',
      primary: '#2787E1',
      secondary: '#F9F9FA',
      success: '#57BE5B',
      warning: '#EBB809'
    }
  }
};

const withTheme = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(withTheme);
// addDecorator(withInfo);

addDecorator(withKnobs);

configure(loadStories, module);
