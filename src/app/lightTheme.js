import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',

        background: {

            default: '#F1D4E5',
            paper: '#dbd3de'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#786380'
        },
        primary: {
            main: '#927c9c',
            light: '#CEFFE2',
            dark: '#786383',
            contrastText: '#f3f0f4'
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

export default lightTheme;
