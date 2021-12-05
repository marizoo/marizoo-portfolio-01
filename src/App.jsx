import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Sections from "./components/Sections";
import Topbar from "./components/Topbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";

const theme = {
  colors: {
    primary: "#1d1d1d",
    secondary: "#ee6e6e"
  },
}

const Cont = styled.div`
height: 100vh;
`

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = (e) => {
    setMenuOpen(false);
}

  return (
   <ThemeProvider theme={theme}>
     <Cont>
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu}/>
      <Sections>
        <Home closeMenu={closeMenu}/>
        <About closeMenu={closeMenu} />
        <Portfolio closeMenu={closeMenu} />
        <Projects closeMenu={closeMenu} />
        <Blog closeMenu={closeMenu}/>
        <Testimonials closeMenu={closeMenu}/>
        <Contact closeMenu={closeMenu}/>
      </Sections>
      </Cont>
   </ThemeProvider>
  );
};

export default App;