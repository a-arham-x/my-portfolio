import React from "react";

function TechStack() {
  return (
    <>
      <div class="tech-skills">
        <div class="tech-skills-row">
          <img src={require("./images/python-logo.png")} alt="Python Logo" />
          <img src={require("./images/js-logo.png")} alt="Java Script Logo" />
          <img src={require("./images/react-logo.png")} alt="React Logo" />
        </div>
        <div class="tech-skills-row">
          <img src={require("./images/nodejs-logo.png")} alt="Nodejs Logo" />
          <img
            src={require("./images/express-logo.png")}
            alt="Expressjs Logo"
          />
          <img src={require("./images/mongodb-logo.png")} alt="Mongodb Logo" />
        </div>
        <div class="tech-skills-row">
          <img src={require("./images/html-logo.png")} alt="Nodejs Logo" />
          <img src={require("./images/css-logo.png")} alt="Expressjs Logo" />
          <img
            src={require("./images/postgresql-logo.png")}
            alt="Mongodb Logo"
          />
        </div>
        <div class="tech-skills-row">
          <img src={require("./images/nextjs-logo.png")} alt="Nextjs Logo" />
          <img src={require("./images/flutter-logo.png")} alt="Flutter Logo" />
          <img src={require("./images/aws-logo.png")} alt="AWS Logo" />
        </div>
      </div>
    </>
  );
}

export default TechStack;
