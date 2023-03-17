//projects page will update when github updates :), only public repos though
//https://stackoverflow.com/questions/8713596/how-to-retrieve-the-list-of-all-github-repositories-of-a-person
//https://docs.github.com/en/rest/repos?apiVersion=2022-11-28

//maybe I should update the backend storing the projects every 6 months?
//need to implement backend server (Django)

//get top 3 projects if no filter, otherwise filter by date or programming language or favorite projects

import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    let p = this.props.project;
    return (
      <div id="item">
        <a href={p.link}>
          <h2>{p.name}</h2>
          <p>
            {/* Description of project here. This is what the project is about. These
          are the tools I used. */}
            {p.description}
          </p>
        </a>
      </div>
    );
  }
}

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "CUrPLAN",
          link: "https://github.com/CUrPLAN/Senior-Design-Capstone",
          description:
            "A web application software that helps Computer Science students at the University of Colorado Denver plan their classes to take in order to graduate on time. Technologies: React.js, Bootstrap, JavaScript, HTML, CSS, Python",
        },
        {
          name: "Pokemon Type Image Classification",
          link: "https://github.com/ivyT26/CSCI4931_DLFinal",
          description:
            "A deep learning project using convolutional neural networks to identify a Pokemon's primary and secondary type using images. The problem solves a multi-label classification problem and predicts Pokemon from generations 1-7. Technologies: Python, Tensorflow, Keras, pandas, numpy, sklearn, matplotlib",
        },
        {
          name: "CPU Scheduling Algorithm",
          link: "https://github.com/ivyT26/CSCI-3453",
          description:
            "A simulation program that runs various CPU scheduling algorithms such as first come first serve, shortest job first, preemptive priority, and round robin. Implemented with a queue using a linked list implementation. Designed linked list with classes and structures. Technologies: C++, VSCode",
        },
      ],
    };
    // this.getProjects = this.getProjects.bind(this);
    this.displayProjects = this.displayProjects.bind(this);
  }

  componentDidMount() {
    this.displayProjects();
  }

  //get projects from backend and create project items here
  // getProjects() {
  //   //go to the backend url to get projects
  //   fetch("/backend/get-projects/")
  //     .then((response) => {
  //       //if the data is valid
  //       if (response.status === 200) {
  //         //convert object to parsable json
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ projects: data });
  //     });
  // }

  displayProjects() {
    let projectList;
    if (typeof this.state.projects === "object") {
      projectList = this.state.projects.map((p) => (
        <ProjectItem key={p.name} project={p} />
      ));
    }
    return projectList;
  }

  render() {
    return (
      <div id="projects-info" className="main-section p-3 mb-5">
        <h1>Welcome to the Projects Page!</h1>
        {this.displayProjects()}
      </div>
    );
  }
}

export default Project;
