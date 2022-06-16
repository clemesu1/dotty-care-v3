import {
  PaletteOptions,
  createTheme,
  css,
  responsiveFontSizes
} from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light"
    }
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark"
    }
  })
);

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
