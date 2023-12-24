import React from 'react'

function Skills() {
    return (
        <>
            <section id="skills">
                <h2>The skills I have got</h2>
                <div class="box">
                    <p>I have been doing software programming fo over two years and I have developed many skills and have worked
                        on a number of projects. I have made individual projects as well as collaborated with teams. My top
                        skills include Python, Java Script and MERN stack development. I am looking forward to developing much
                        more new skills and to work on different software engineering roles.</p>
                </div>
                <h2>My Skill Set</h2>
                <div class="box">
                    <div class="skills-row">
                        <div class="skill-row">
                            <img src={require("./images/python-logo.png")} alt="" />
                            <ul class="skill">
                                <li>Python</li>
                                <li>
                                    <pre>Experienced</pre>
                                </li>
                            </ul>
                        </div>
                        <div class="skill-row">
                            <img src={require("./images/js-logo.png")} alt="" />
                            <ul class="skill">
                                <li>Java Script</li>
                                <li>
                                    <pre>Experienced</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills-row">
                        <div class="skill-row">
                            <img src={require("./images/html-logo.png")} alt="" />
                            <ul class="skill">
                                <li>HTML</li>
                                <li>
                                    <pre>Experienced</pre>
                                </li>
                            </ul>
                        </div>
                        <div class="skill-row">
                            <img src={require("./images/css-logo.png")} alt="" />
                            <ul class="skill">
                                <li>CSS</li>
                                <li>
                                    <pre>Experienced</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills-row">
                        <div class="skill-row">
                            <img src={require("./images/react-logo.png")} alt="" />
                            <ul class="skill">
                                <li>React</li>
                                <li>
                                    <pre>Intermediate</pre>
                                </li>
                            </ul>
                        </div>
                        <div class="skill-row">
                            <img src={require("./images/express-logo.png")} alt="" />
                            <ul class="skill">
                                <li>Expressjs</li>
                                <li>
                                    <pre>Experienced</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills-row">
                        <div class="skill-row">
                            <img src={require("./images/nodejs-logo.png")} alt="" />
                            <ul class="skill">
                                <li>Nodejs</li>
                                <li>
                                    <pre>Experienced</pre>
                                </li>
                            </ul>
                        </div>
                        <div class="skill-row">
                            <img src={require("./images/mongodb-logo.png")} alt="" />
                            <ul class="skill">
                                <li>Mongodb</li>
                                <li>
                                    <pre>Intermediate</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills-row">
                        <div class="skill-row">
                            <img src={require("./images/flask-logo.png")} alt="" />
                            <ul class="skill">
                                <li>Flask</li>
                                <li>
                                    <pre>Intermediate</pre>
                                </li>
                            </ul>
                        </div>
                        <div class="skill-row">
                            <img src={require("./images/postgresql-logo.png")} alt="" />
                            <ul class="skill">
                                <li>PostgreSql</li>
                                <li>
                                    <pre>Intermediate</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills