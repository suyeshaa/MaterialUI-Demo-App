import React from "react";
import { orange, pink } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const Theme = ({ children }) => {
  const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 15,
      },
    },
    palette: {
      primary: {
        main: pink[400],
      },
      secondary: {
        main: orange[400],
      },
    },
  });

  return <ThemeProvider theme={theme}> {children}</ThemeProvider>;
};

export default Theme;
