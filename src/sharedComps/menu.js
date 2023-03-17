import React, { Component } from "react";

import "bootstrap/dist/js/bootstrap.bundle";

//if using pure bootstrap, cannot use built in bootstrap functionalities that use JS because the JS would clash with the reactJS doms.

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
      menuOn: false,
    };
  }

  componentDidMount() {
    this.setState({active: this.props.page});
  }

  /*if using functions within render, you want to bind the functions called within render, not out here. 
  this is to prevent a warning to call update functions within render. functions and props must be pure.*/
  // handleClick(section) {
  //   this.setState({ active: section });
  // }

  handleToggle() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  render() {
    const showMenu = this.state.menuOn ? " show" : "";

    return (
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
                href="/"
                // onClick={() => this.handleClick("home")}
              >
                Home
              </a>
              <a
                className={
                  "nav-link" + (this.state.active === "about" ? " active" : "")
                }
                href="/about/"
                // onClick={() => this.handleClick("about")}
              >
                About
              </a>
              <a
                className={
                  "nav-link" +
                  (this.state.active === "projects" ? " active" : "")
                }
                href="/projects/"
                // onClick={() => this.handleClick("projects")}
              >
                Projects
              </a>
              <a
                className={
                  "nav-link" +
                  (this.state.active === "contact" ? " active" : "")
                }
                href="/contact/"
                // onClick={() => this.handleClick("contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export class MenuSpace extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id={this.props.page} className="page-container">
        <Menu page={this.props.page}/>
      </section>
    );
  }
}

export default Menu;

//sources
//source for using pure bootstrap and reactjs for navbar: https://stackoverflow.com/questions/52248179/how-to-use-data-toggle-collapse-in-reactjs-with-bootstrap
