import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Menu } from "./layouts/HomePage/components/Menu";
import { ContactUs } from "./layouts/HomePage/components/ContactUs";
import { AboutUs } from "./layouts/HomePage/components/AboutUs";
import ScrollToTop from "./layouts/Utils/ScrollToTop";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
