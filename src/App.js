import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

import AnimatedRoutes from "./Routes";

function App() {
  document.body.className = "theme-root light";

  return (
    <HelmetProvider>
      <Helmet>
        <title>Balanced Team Maker | Generador de Equipos Balanceados</title>
        <meta
          name="description"
          content="Genera equipos balanceados de manera fácil y rápida con Balanced Team Maker. Herramienta para crear grupos equitativos en tus actividades y eventos."
        />
        <meta
          name="keywords"
          content="equipo, balanceado, generador de equipos, trabajo en equipo, herramienta, grupos equitativos"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.murkiva.com/" />
        <meta name="author" content="Balanced Team Maker" />
        <meta name="publisher" content="Balanced Team Maker" />

        {/* Social Media Tags */}
        <meta
          property="og:title"
          content="Balanced Team Maker | Generador de Equipos Balanceados"
        />
        <meta
          property="og:description"
          content="Genera equipos balanceados de manera fácil y rápida con Balanced Team Maker. Herramienta para crear grupos equitativos en tus actividades y eventos."
        />
        <meta property="og:url" content="https://www.murkiva.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta
          name="twitter:title"
          content="Balanced Team Maker | Generador de Equipos Balanceados"
        />
        <meta
          name="twitter:description"
          content="Genera equipos balanceados de manera fácil y rápida con Balanced Team Maker. Herramienta para crear grupos equitativos en tus actividades y eventos."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
