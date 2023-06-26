import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./pages/Navbar";
import Main from "./pages/Main";
import ResponsiveIcons from "./pages/ResponsiveIcons";
import "./App.css";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Epilogue', 'sans-serif'].join(","),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Main />
      <ResponsiveIcons />
    </ThemeProvider>
  );
}

export default App;
