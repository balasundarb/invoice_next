import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',

        background: {

            default: '#F1D4E5',
            paper: '#DBD3DE'
        },
        text: {
            primary: '#1A1A1A',
            secondary: '#786380'
        },
        primary: {
            main: '#927C9C',
            light: '#CEFFE2',
            dark: '#786383',
            contrastText: '#F3F0F4'
        },
        secondary: {
            main: '#C23AAD',
            light: '#D7CFF3',
            dark: '#B61E82',
            contrastText: '#601A0A'
        }
    },
    typography: {
        fontFamily: ['Alkatra', 'cursive'].join(','),
        h1: {
            fontFamily: ['Josefin Sans', 'cursive'].join(','),
        },
        button: {
            fontFamily: ['Pridi', 'san-serif'].join(','),
            fontWeight: 400,
            fontSize: '1em',
            textTransform: 'uppercase',

        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',

        background: {

            default: '#1A1A1A',
            paper: '#1A1A1A'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#F0F0F0'
        },
        primary: {
            main: '#55EFFF',
            light: '#CEFFE2',
            dark: '#1E90FF',
            contrastText: '#330780'
        },
        secondary: {
            main: '#C23AAD',
            light: '#D7CFF3',
            dark: '#B61E82',
            contrastText: '#601A0A'
        }
    },
    typography: {
        fontFamily: ['Alkatra', 'cursive'].join(','),
        h1: {
            fontFamily: ['Josefin Sans', 'cursive'].join(','),
        },
        button: {
            fontFamily: ['Pridi', 'san-serif'].join(','),
            fontWeight: 400,
            fontSize: '1em',
            textTransform: 'uppercase',

        }
    },
});


