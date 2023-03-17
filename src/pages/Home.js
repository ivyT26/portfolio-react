import React, { Component, useState } from "react";

import "../styles/Home.css";

//I would like this to be something similar to my LinkedIn banner/collage, showcasing my top skills, and a cool background picture
//https://alvarotrigo.com/blog/web-developer-portfolio-examples/

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIndex: 0,
      qIndex: 0,
      question: [
        "I'm an aspiring engineer interested in...",
        "I am a person who is...",
        "I am open to...",
      ],
      text: [
        "Full Stack Development | Machine Learning | Artificial Intelligence | Computer Vision and Graphics",
        "Growth Minded | Positive Thinker | Learner",
        "Full-time opportunities | Remote opportunities | Freelance",
      ],
      currQ: 0,
      typingQ: true,
      typingT: false,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.typingQ) {
          if (prevState.typingT) {
            const textIndex = prevState.textIndex + 1;
            if (textIndex >= this.state.text[this.state.currQ].length) {
              setTimeout(() => {
                this.setState({ typingQ: false, typingT: false });
              }, 1000);
              return { textIndex: this.state.text[this.state.currQ].length };
            }
            return { textIndex };
          } else {
            const qIndex = prevState.qIndex + 1;
            if (qIndex >= this.state.question[this.state.currQ].length) {
              setTimeout(() => {
                this.setState({ typingT: true });
              }, 500);
              return { qIndex: this.state.question[this.state.currQ].length };
            }
            return { qIndex };
          }
        } else if (prevState.typingQ === false) {
          if (prevState.typingT == false) {
            const textIndex = prevState.textIndex - 1;
            if (textIndex < 0) {
              setTimeout(() => {
                this.setState({ typingT: true });
              }, 500);
              return { textIndex: 0 };
            }
            return { textIndex };
          } else {
            const qIndex = prevState.qIndex - 1;
            if (qIndex < 0) {
              let newQuestion = this.state.currQ + 1;
              if (newQuestion >= this.state.question.length) {
                newQuestion = 0;
              }
              setTimeout(() => {
                this.setState({
                  typingQ: true,
                  typingT: false,
                  currQ: newQuestion,
                });
              }, 1000);
              return { qIndex: 0 };
            }
            return { qIndex };
          }
        }
      });
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  QA() {
    const typedText = this.state.text[this.state.currQ].substring(
      0,
      this.state.textIndex
    );

    const typedQ = this.state.question[this.state.currQ].substring(
      0,
      this.state.qIndex
    );

    return (
      <section id="QA">
        <div id="question">
          <h4>{typedQ}</h4>
        </div>
        <div id="answer">
          <h5>{typedText}</h5>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div id="home-info" className="main-section p-3 mb-5">
        <h1>Hello! I'm Ivy Truong.</h1>
        {this.QA()}
      </div>
    );
  }
}

export default Home;
