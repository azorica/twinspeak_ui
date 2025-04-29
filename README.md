# Twinspeak UI

A modern web application built with Nuxt 3, Vue 3, Vuetify, and Pinia.

## Features

- 🚀 Built with Nuxt 3 and Vue 3
- 🎨 Styled with Vuetify 3
- 📦 State management with Pinia
- 📚 Component documentation with Storybook
- 🎯 Responsive and accessible design
- 🔄 Server-side rendering (SSR)
- 🎨 Configurable theming system
- 🔒 Authentication system
- 📱 Mobile-first approach

## Project Structure

```
twinspeak_ui/
├── components/
│   ├── atoms/         # Basic UI components
│   ├── molecules/     # Complex components
│   ├── organisms/     # Page sections
│   └── templates/     # Layout components
├── composables/       # Vue composables
├── stores/            # Pinia stores
├── styles/            # Global styles and theme config
├── assets/            # Static assets
└── pages/             # Application pages
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:azorica/twinspeak_ui.git
   cd twinspeak_ui
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Start Storybook:
   ```bash
   pnpm storybook
   ```

## Development

### Component Development

Components are organized following atomic design principles:

- **Atoms**: Basic building blocks (buttons, inputs, etc.)
- **Molecules**: Groups of atoms (forms, cards, etc.)
- **Organisms**: Complex UI sections (headers, footers, etc.)
- **Templates**: Page layouts

### Styling

The application uses Vuetify for styling with a custom theme configuration. Theme settings can be modified in `styles/themeConfig.ts`.

### State Management

Pinia is used for state management. Stores are located in the `stores` directory.

## Testing

Run the test suite:

```bash
pnpm test
```

## Building for Production

```bash
pnpm build
```

## Deployment

The application can be deployed to various platforms:

- Vercel
- Netlify
- AWS Amplify

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
