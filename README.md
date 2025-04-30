# Storybook Component Library

This is a React component library built with Storybook, showcasing reusable UI components.

## Installation

```bash
npm install @tejidosdeagus/storybook
```

## Usage

```jsx
import { Button, Tabs } from '@tejidosdeagus/storybook';

function App() {
  return (
    <>
      <Button variant="primary">Botón grande</Button>
      <Tabs items={[/* your items */]} />
    </>
  );
}
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/tejidosdeagus/storybook.git
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

## Using with GitHub Packages

1. Create a `.npmrc` file in your project:
```
@tejidosdeagus:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Make sure you have a GitHub personal access token with `read:packages` scope
3. Set the token in your environment or in your `.npmrc`

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the library
- `npm run storybook` - Start Storybook locally
- `npm run build-storybook` - Build Storybook for production

## License

MIT

