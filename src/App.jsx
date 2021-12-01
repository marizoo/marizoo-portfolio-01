import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";


const theme = {
  colors: {
    primary: "#15023a",
    secondary: "#e67171",
  },
  media: {
    mobile: "768px"
  }
}

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
     <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </ThemeProvider>
  );
};

export default App;