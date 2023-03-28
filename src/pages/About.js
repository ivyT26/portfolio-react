//Ask me a question and the site will give you a response about me!
//this will be a drop down menu

//text appears like it was typed by someone as a response

import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about-info" className="main-section p-3 mb-5">
        <h1>About Ivy</h1>
        <section className="basic-info">
          <p>
            I am a recent graduate from the University of Colorado Denver. I
            have a bachelor's of science degree in computer science with a minor
            in mathematics.
          </p>
          <p>
            I am interested in developing web apps, machine learning with an
            emphasis on reinforcement learning software, and computer vision
            projects that are impactful and useful to the community. I am open
            and flexible to learning new technologies for future projects!
          </p>
        </section>
        <section className="skills">
          <div className="languages">
            <p>Programming Languages I am proficient in: </p>
            <a target="_blank" href="https://www.python.org/">
              <img src="https://img.icons8.com/fluency/48/null/python.png" />
            </a>
            <a target="_blank" href="https://cplusplus.com/">
              <img src="https://img.icons8.com/fluency/48/null/c-plus-plus-logo.png" />
            </a>
            <a target="_blank" href="https://www.learn-c.org/">
              <img src="https://img.icons8.com/fluency/48/null/c-programming.png" />
            </a>
            <a target="_blank" href="https://www.javascript.com/">
              <img src="https://img.icons8.com/fluency/48/null/javascript.png" />
            </a>
            <a target="_blank" href="https://www.r-project.org/">
              <img src="https://img.icons8.com/fluency/48/null/r-project.png" />
            </a>
            <a target="_blank" href="https://www.w3schools.com/html/">
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/38/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png" />
            </a>
            <a target="_blank" href="https://www.w3.org/TR/CSS/#css">
              <img src="https://img.icons8.com/color/48/null/css3.png" />
            </a>
          </div>
          <div className="technologies">
            <p>Tools and Technologies I am familiar with using:</p>
            <a
              target="_blank"
              href="https://scikit-learn.org/stable/index.html"
            >
              <img
                style={{ height: "40px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png"
              />
            </a>
            <a target="_blank" href="https://matplotlib.org/stable/index.html">
              <img
                style={{ height: "40px" }}
                src="https://hadrienj.github.io/assets/images/icons/matplotlib.png"
              />
            </a>
            <a target="_blank" href="https://seaborn.pydata.org/">
              <img
                style={{ height: "40px" }}
                src="https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png"
              />
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img src="https://img.icons8.com/plasticine/48/000000/react.png" />
            </a>
            <a target="_blank" href="https://www.djangoproject.com/">
              <img
                style={{ height: "40px" }}
                src="https://juststickers.in/wp-content/uploads/2019/07/django-shapecut.png"
              />
            </a>
            <a target="_blank" href="https://www.tensorflow.org/">
              <img src="https://img.icons8.com/color/48/null/tensorflow.png" />
            </a>
            <a target="_blank" href="https://git-scm.com/">
              <img src="https://img.icons8.com/color/48/null/git.png" />
            </a>
            <a target="_blank" href="https://dev.mysql.com/doc/">
              <img
                style={{ height: "40px" }}
                src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-1024.png"
              />
            </a>
            <a target="_blank" href="https://aws.amazon.com/?nc2=h_lg">
              <img
                style={{ height: "40px" }}
                src="https://logodix.com/logo/34937.png"
              />
            </a>
          </div>
          <div className="technologies-learning">
            <p>Tools and Technologies I am currently learning now:</p>
            <a target="_blank" href="https://www.docker.com/">
              <img
                style={{ height: "40px" }}
                src="https://1.bp.blogspot.com/-Q86XGVJahug/Xm-aQfgtuMI/AAAAAAAAAcA/qqPQeihI39EbG2N87jG65xfnCdvF85-WQCLcBGAsYHQ/s1600/docker.png"
              />
            </a>
            <a target="_blank" href="https://kubernetes.io/docs/home/">
              <img
                style={{ height: "40px" }}
                src="http://www.thagomizer.com/img/kubernetes-logo.png"
              />
            </a>
            <a target="_blank" href="https://spark.apache.org/">
              <img
                style={{ height: "40px" }}
                src="http://scala-phase.org/talks/rdds-dataframes-datasets-2016-06-16/images/spark-logo-white.png"
              />
            </a>
          </div>
          <div className="environment">
            <p>Coding environments I am comfortable using:</p>
            <a target="_blank" href="https://code.visualstudio.com/">
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/code-stable.png"
              />
            </a>
            <a target="_blank" href="https://www.anaconda.com/">
              <img
                style={{ height: "40px" }}
                src="https://www.pinclipart.com/picdir/big/180-1800785_anaconda-python-logo-clipart.png"
              />
            </a>
            <a target="_blank" href="https://www.kernel.org/doc/html/latest//">
              <img
                style={{ height: "40px" }}
                src="https://vignette.wikia.nocookie.net/logopedia/images/0/04/Linux_logo.png/revision/latest?cb=20120814052336"
              />
            </a>
            <a target="_blank" href="https://docs.ubuntu.com/">
              <img
                style={{ height: "40px" }}
                src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/ubuntu-512.png"
              />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
