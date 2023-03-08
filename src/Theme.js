import { createMuiTheme, responsiveFontSizes } from '@mui/material';

const Theme = responsiveFontSizes(createMuiTheme({
    spacing:4,
    typography: {
        fontFamily: [
            'Roboto',
            'Raleway',
            'Open Sans'
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontFamily: 'Raleway'
        },
        h2: {
            fontSize: '3.5rem',
            fontFamily: "Open Sans"
        },
        h3: {
            fontSize: "2.5rem",
            fontFamily: "Roboto"
        },
    },
    palette: {
        background: {
            greenBlueGradiant: 'linear-gradient(to right, #002244, #00563B)',
            blueGreenGradiant: "linear-gradient(to right, #0CAFFF, #32de84)",
            pinkVioletGradient: "linear-gradient(to right, pink, violet)"
        }
    }
}));

export default Theme;
