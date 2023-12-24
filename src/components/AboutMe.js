import React from 'react'
import Education from './Education'
import Experience from './Experience'

function AboutMe() {
    return (
        <>
            <section id="home">
                <h2>About Me</h2>
                <div class="box">
                    <p>Hi, I am Abdul Arham, a Software Engineer who is passionate about creating intuitive designs and
                        presenting software solutions. I am skilled in web development and currently honing my skills in the
                        field of Data Engineering. I am experienced with different technologies including Python, Java Script,
                        Java, React, Nodejs and many more. You can always contact me in case of any request or query.</p>
                </div>
                <Education />
                <Experience />
            </section>
        </>
    )
}

export default AboutMe