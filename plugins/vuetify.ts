import { createVuetify } from 'vuetify';
import { themeConfig } from '~/styles/themeConfig';

export default defineNuxtPlugin((app) => {
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
    defaults: {
      VBtn: {
        rounded: themeConfig.buttonStyles.borderRadius,
        class: 'text-none',
      },
    },
  });

  app.vueApp.use(vuetify);
}); 