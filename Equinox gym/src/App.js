import React from 'react'
import GlobalStyle from './globalStyles'
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Footer } from './component'

//pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/AboutUs'
import Blog from './pages/BlogPage'


const theme = {
  color: {
    primary: "#0b0b0b",
    secondary: "#494863",
    transDark: "rgba(0, 0, 0, .75)",
    transLight: "rgba(255, 255, 255, .05)",
    light: "#ffff",
    lightAlt: "#aeb2b8",


  },

  font: {
    xsm: ".8rem",
    sm: "1.6rem",
    md: "2.4rem",
    lg: "3rem",
    xl: "4rem"
  },

  gap: {
    gap: "2.5rem"
  }

}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />


        </Switch>
        <Footer />
      </ThemeProvider>

    </Router>
  )
}

export default App