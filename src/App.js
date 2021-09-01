import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

const NotFoundRedirect = () => <Redirect to='/' />


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/contato" component={Contact} />
          <Route exact path="/servicos" component={Products} />
          <Route exact path="/clientes" component={Clients} />
          <Route component={NotFoundRedirect} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
