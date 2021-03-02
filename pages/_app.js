import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
