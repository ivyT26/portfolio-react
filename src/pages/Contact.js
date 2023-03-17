import React, { Component } from "react";

import { MenuSpace } from "../sharedComps/menu";

//generate csrf token when doing post, put, patch, and delete requests
//source: techiediaries.com/django-react-forms-csrf-axios/
// function getCookie(name) {
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     var cookies = document.cookie.split(";");
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = jQuery.trim(cookies[i]);
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

class Contact extends Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault();

  //   let csrftoken = getCookie("csrftoken");

  //   const requestOptions = {
  //     credentials: "include",
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
  //     body: JSON.stringify({
  //       //variables to send to backend must match the variables used in the serializer/model
  //       name: document.getElementById("name").value,
  //       text: document.getElementById("message").value,
  //       email: document.getElementById("email").value,
  //     }),
  //   };

  //   fetch("/backend/save-message/", requestOptions).then((response) => {
  //     if (response.status === 201) {
  //       console.log("submit success");
  //     } else {
  //       console.log("failed");
  //     }
  //   });
  // }

  footer() {
    return (
      <div id="footer">
        <a target="_blank" href="https://icons8.com">
          Icons by Icons8
        </a>
        <p>Site hosted on Github pages</p>
      </div>
    );
  }

  render() {
    return (
      <div id="contact-info" className="main-section p-3 mb-5">
        <h3 id="connect-message">
          Ready to connect and collaborate? Here's how you can reach me.
        </h3>
        <div id="contact-links">
          <a target="_blank" href="truong.ivy26@gmail.com">
            <img src="https://img.icons8.com/fluency/90/null/apple-mail.png" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ivy-truong26/">
            <img src="https://img.icons8.com/color/90/null/linkedin.png" />
          </a>
          <a target="_blank" href="https://github.com/ivyT26">
            <img src="https://img.icons8.com/ios-glyphs/90/null/github.png" />
          </a>
        </div>
        {this.footer()}
        {/* <h4 id="connect-message">
          If you want to send me a message, you can fill this form below!
        </h4>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <div className="headers">
            <div id="name-field" className="form-item">
              <input id="name" type="text" name="name" placeholder="My Name" />
            </div>
            <div id="email-field" className="form-item">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="myemail@example.com"
              />
            </div>
          </div>
          <div id="message-field" className="form-item">
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="My Message"
              rows="10"
              cols="65"
            />
          </div>
          <button type="submit" className="submitbutton">
            Submit
          </button>
        </form> */}
      </div>
    );
  }
}

export default Contact;
