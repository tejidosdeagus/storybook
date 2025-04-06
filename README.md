# Storybook Component Library

This is a React component library built with Storybook, showcasing reusable UI components.

## Installation

```bash
npm install storybook
```

## Usage

```jsx
import { ComponentName } from 'storybook';

function App() {
  return <ComponentName />;
}
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/agust/storybook.git
cd storybook
```

2. Install dependencies:
```bash
npm install
```

3. Run Storybook locally:
```bash
npm run storybook
```

## Deployment

### GitHub Pages

The Storybook documentation is automatically deployed to GitHub Pages when pushing to the main branch.
You can view it at: https://agust.github.io/storybook

### Publishing to npm

To publish a new version to npm:

1. Update the version and create a git tag:
```bash
npm run version [patch|minor|major]
```

2. Push the new version tag:
```bash
git push --follow-tags
```

The GitHub Action will automatically publish the new version to npm when a version tag is pushed.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the library
- `npm run storybook` - Start Storybook locally
- `npm run build-storybook` - Build Storybook for production
- `npm run version` - Create a new version

## License

MIT
