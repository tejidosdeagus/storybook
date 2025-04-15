import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import type { Preview } from '@storybook/react';

const theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display, serif',
  },
  palette: {
    text: {
      primary: '#4A4A4A',
    },
  },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
