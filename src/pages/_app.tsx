import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
