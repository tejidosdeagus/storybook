import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme(); // customize as needed

export const decorators = [
  withThemeFromJSXProvider({
    themes: { light: theme },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
