import { createTheme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    violet: Palette["primary"];
    orange: Palette["primary"];
    green: Palette["primary"];
    red: Palette["primary"];
    gray: Palette["primary"];
  }

  interface PaletteOptions {
    violet?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    violet: true;
    orange: true;
    gray: true;
    green: true;
    red: true;
  }
}

const violetBase = "#7e7bce";

const orangeBase = "#ef8e01";

const greenBase = "#40c260";

const grayBase = "#b6bbbb";

const redBase = "#e35d62";

const warningBase = "#f3992b";

export const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
    fontSize: 12,
    htmlFontSize: 14,
  },

  palette: {
    text: {
      primary: "#6d6b6b",
      secondary: "#adadad",
    },
    violet: {
      main: violetBase,
      light: alpha(violetBase, 0.1),
      dark: alpha(violetBase, 0.2),
      contrastText: "#fff",
    },
    orange: {
      main: orangeBase,
      light: alpha(orangeBase, 0.1),
      dark: alpha(orangeBase, 0.2),
      contrastText: "#fff",
    },
    green: {
      main: greenBase,
      light: alpha(greenBase, 0.1),
      dark: alpha(greenBase, 0.2),
      contrastText: "#fff",
    },
    gray: {
      main: grayBase,
      light: alpha(grayBase, 0.1),
      dark: alpha(grayBase, 0.2),
      contrastText: "#fff",
    },
    red: {
      main: redBase,
      light: alpha(redBase, 0.1),
      dark: alpha(redBase, 0.2),
      contrastText: "#fff",
    },
    warning: {
      main: warningBase,
      light: alpha(warningBase, 0.1),
      contrastText: "#dd8323",
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: "1rem",
        },
        contained: ({ ownerState, theme }) => {
          const color =
            ownerState.color && ownerState.color !== "inherit"
              ? ownerState.color
              : "primary";

          return {
            "&:hover": {
              backgroundColor:
                theme.palette[color]?.main ?? theme.palette.primary.main,
              opacity: 0.85,
            },
          };
        },
      },
    },
  },
});
