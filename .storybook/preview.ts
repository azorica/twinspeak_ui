import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import { themeConfig } from '~/styles/themeConfig';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: themeConfig.colors,
        dark: false,
      },
      dark: {
        colors: themeConfig.dark.colors,
        dark: true,
      },
    },
  },
});

setup((app) => {
  app.use(vuetify);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview; 