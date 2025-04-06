# Storybook Component Library

This is a React component library built with Storybook, showcasing reusable UI components.

## Installation

```bash
npm install @argamunin/storybook
```

## Usage

```jsx
import { ComponentName } from '@argamunin/storybook';

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

1. Set up your npm organization:
```bash
# Create the organization
npm org create argamunin

# Add yourself as an owner (replace YOUR_NPM_USERNAME with your actual npm username)
npm org set argamunin YOUR_NPM_USERNAME owner

# Create a publish token
npm token create --type publish
```

2. Add the token to your GitHub repository:
   - Go to repository Settings > Secrets and variables > Actions
   - Add a new secret named `NPM_TOKEN` with your publish token

3. Update the version and create a git tag:
```bash
npm run version [patch|minor|major]
```

4. Push the new version tag:
```bash
git push --follow-tags
```

The GitHub Action will automatically publish the new version to npm when a version tag is pushed.

Note: Make sure you have:
- A valid npm publish token stored as `NPM_TOKEN` secret
- The organization `@argamunin` created on your npm account
- Owner permissions in the organization

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the library
- `npm run storybook` - Start Storybook locally
- `npm run build-storybook` - Build Storybook for production
- `npm run version` - Create a new version

## License

MIT
