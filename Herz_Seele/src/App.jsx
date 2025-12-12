// App.jsx
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import WhatIs from "./components/WhatIs.jsx";
import Signs from "./components/Signs.jsx";
import Help from "./components/Help.jsx";
import Resources from "./components/Resources.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>

      <Header />

      <main id="main">
        <Hero />
        <WhatIs />
        <Signs />
        <Help />
        <Resources />
      </main>

      <Footer />
    </>
  );
}