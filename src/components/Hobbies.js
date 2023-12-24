import React from 'react'

function Hobbies() {
    return (
        <>
            <section id="hobbies">
                <h2>My Hobbies</h2>
                <div class="box">
                    <img src={require("./images/reading.jpg")} alt="A picture of books" />
                    <h3>Reading</h3>
                    <p>Reading is one of my favourite things to do. When I say reading, I do not just mean book reading or
                        magazines, I also love reading different articles on internet such as those on medium. I always make
                        sure
                        not to miss any chance of gaining useful knowledge through reading.</p>
                </div>
                <div class="box">
                    <img src={require("./images/movies.jpg")} alt="A picture of some movie website" />
                    <h3>Watching Shows and Movies</h3>
                    <p>In my free time, I often watch different movies and shows, while I have explored different genres, I love
                        science fictions movies the most. My favourite movies are Interstelar and The Dark Knight. Other than
                        shows
                        and movies, I also watch videos about science and math where Varitasium and 3Blue1Brown are my favourite
                        channels in science and maths.</p>
                </div>
                <div class="box">
                    <img src={require("./images/programming.jpg")} alt="A picture of some computer program" />
                    <h3>Coding For Fun</h3>
                    <p>While I code for my academics or some important work or developing app for my portfolio, I also code for
                        fun
                        in my free time. When coding as a hobby, I would just think of something random or some problem and
                        start
                        working on it. These func projects range from short programs to simple GUI apps. As a by-product, this
                        activity helps in my skills development and logic building, and its a good exercise for my mind too,
                        isn't
                        it?</p>
                </div>
            </section>
        </>
    )
}

export default Hobbies