declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1: React.CSSProperties;
    balance: React.CSSProperties;
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    balance?: React.CSSProperties;
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    balance: true;
    title: true
    subtitle: true
  }
}

export const typography = {
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
    },
    h6: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.5,
      whiteSpace: 'normal',
      textTransform: 'none',
    },
    title: {
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 700,
      '@media (min-width:900px)': {
        lineHeight: 1.2,
        fontSize: 54,
      },
    },
    subtitle: {
      fontSize: 18,
      lineHeight: 1.2,
      fontWeight: 800,
      '@media (min-width:900px)': {
        lineHeight: 1.2,
        fontSize: 22,
      },
    },
  }
}
