import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Menu, { MenuSpace } from "./sharedComps/menu";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";

//sample portfolios: https://www.springboard.com/blog/data-science/machine-learning-portfolio/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
      menuOn: false,
    };
  }

  handleToggle() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  handleClick(page) {
    this.setState({ active: page });
  }

  menu() {
    const showMenu = this.state.menuOn ? " show" : "";
    return (
      <section id={this.state.active} className="page-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 mb-2 fixed-top">
          <div className="container-fluid bg-info text-dark shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <a className="navbar-brand" href="/">
              Ivy Truong
              {/* Need to desgin a cool logo on Canva :) */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => this.handleToggle()}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                "collapse navbar-collapse justify-content-end" + showMenu
              }
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a
                  className={
                    "nav-link" + (this.state.active === "home" ? " active" : "")
                  }
                  href="#"
                  onClick={() => this.handleClick("home")}
                >
                  Home
                </a>
                <a
                  className={
                    "nav-link" +
                    (this.state.active === "about" ? " active" : "")
                  }
                  href="#"
                  onClick={() => this.handleClick("about")}
                >
                  About
                </a>
                <a
                  className={
                    "nav-link" +
                    (this.state.active === "projects" ? " active" : "")
                  }
                  href="#"
                  onClick={() => this.handleClick("projects")}
                >
                  Projects
                </a>
                <a
                  className={
                    "nav-link" +
                    (this.state.active === "contact" ? " active" : "")
                  }
                  href="#"
                  onClick={() => this.handleClick("contact")}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }

  render() {
    let currentPage = this.state.active;
    let content = <Home />;

    if (currentPage === "home") {
      content = <Home />;
    } else if (currentPage === "about") {
      content = <About />;
    } else if (currentPage === "projects") {
      content = <Project />;
    } else if (currentPage === "contact") {
      content = <Contact />;
    }

    return (
      <div className="App">
        <div className="background-section">
          {this.menu()}
          {content}
        </div>
      </div>
    );
  }
}

export default App;
