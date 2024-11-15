import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                contained: {
                  backgroundColor: colors.gipermart,
                  color: colors.m3syslightontertiarycontainer,
                },
              },
            },
        MuiContainer: {
            styleOverrides: {
                maxWidthXs: {
                    maxWidth: "1330px !important",
                },
                maxWidthXl: {
                    maxWidth: "1360px !important", 
                },
            },
        },
    },
});
