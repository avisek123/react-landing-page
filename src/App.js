import { ThemeProvider } from "styled-components";
import React from "react";
import Header from "./components/Header";
import { Container } from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const theme = {
    colors: {
      headers: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
