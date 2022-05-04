import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1976D1",
            light: "#7986cb",
        },
        secondary: {
            main: "#f50057",
        },
    },
    typography: {
        fontFamily: [
            'Poppins',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});