import React from "react";
import Education from "./Education";
import Experience from "./Experience";

function AboutMe() {
  return (
    <>
      <section id="home">
        <h2>About Me</h2>
        <div class="box">
          <p>
            Hi, I am Arham, a Software Engineer who is passionate about creating
            intuitive designs and presenting software solutions. I am skilled in
            web development and continuously learning about other fields like
            data analysis, machine learning, mobile app development and cloud
            development. I am experienced with different technologies including
            Python, Java Script, Java, React, Nodejs and many more. You can
            always contact me in case of any request or query.
          </p>
        </div>
        <Education />
        <Experience />
      </section>
    </>
  );
}

export default AboutMe;
