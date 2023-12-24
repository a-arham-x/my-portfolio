import React from 'react'

function Projects() {
  return (
    <>
        <section id="projects">
        <h2>Projects</h2>
        <div class="projects-div">
            <ul>
                <li>
                    <h3>Bakery Management System</h3>
                    <div class="project">
                        <div class="projects-img">
                            <a href="https://bakery-management-system-app.vercel.app/" target="_blank"><img
                                    src={require("./images/bms-pic1.png")} alt="Project Screenshot" /></a>
                            <a href="https://bakery-management-system-app.vercel.app/" target="_blank"><img
                                    src={require("./images/bms-pic2.png")} alt="Project Screenshot" /></a>
                            <a href="https://bakery-management-system-app.vercel.app/" target="_blank"><img
                                    src={require("./images/bms-pic3.png")} alt="Project Screenshot" /></a>
                        </div>
                        <p>A MERN Stack Application built with the aim of providing the very best User Experience and
                            functionality. The application comes with a login and signup feature. Users can create an
                            acccount after which they can check the products and items available at the bakery. Users
                            can
                            make and update bookings and cancel them if they want. The users can also update their
                            account
                            information if they want. The application also has an admin side for the management of the
                            system. The database has been designed to be fully scalabale and secure. Users are
                            authenticated
                            before making any operation and only authorized users have access to making orders or any
                            updates. You can click on any of these images to visit the website or press the button below
                            to
                            view the source code at github.</p>
                        <div class="github-link"><a href="https://github.com/a-arham-x/bakery-management-system"
                                target="_blank">GITHUB</a></div>
                    </div>
                </li>
                <li>
                    <h3>Notesbase</h3>
                    <div class="project">
                        <div class="projects-img">
                            <img src={require("./images/nb-pic1.png")} alt="Project Screenshot" />
                            <img src={require("./images/nb-pic2.png")} alt="Project Screenshot" />
                            <img src={require("./images/nb-pic3.png")} alt="Project Screenshot" />
                        </div>
                        <p>Notesbase is a PERN Stack application which means that it has a PostgreSQL database in
                            place of MongoDB as in MERN stack applications. The application allows its users to create
                            notes, view, edit or delete them. The user has to first signup and login into the
                            application. The user can also update their account information or delete their account. The
                            Application provides a great user experience.</p>
                        <div class="github-link"><a href="https://github.com/a-arham-x/notes-react-app"
                                target="_blank">GITHUB</a></div>
                    </div>
                </li>
                <li>
                    <h3>Train Reservation System</h3>
                    <div class="project">
                        <div class="projects-img">
                            <img src={require("./images/trs-pic1.jpeg")} alt="Project Screenshot" />
                            <img src={require("./images/trs-pic2.jpeg")} alt="Project Screenshot" />
                            <img src={require("./images/trs-pic3.jpeg")} alt="Project Screenshot" />
                        </div>
                        <p>A Desktop Application for making train ticket booking for customers. The application is built
                            in
                            Python with PyQt5 for designing the app GUI and mongodb as the database. The users of the
                            application can make bookings upon which they recieve a token or booking id. Using that
                            token
                            and their information the users can also make any kind of update to their booking, they can
                            view
                            the booking or update the booking. The project database has several collections for handling
                            different documents. The backend code his designed such that the database is managed
                            properly
                            and all the data is used in an appropriate way.</p>
                        <div class="github-link"><a href="https://github.com/mbilal234/TrainReservationSystem"
                                target="_blank">GITHUB</a></div>
                    </div>
                </li>
                <li>
                    <h3>Network Routing Simulation</h3>
                    <div class="project">
                        <div class="projects-img">
                            <img src={require("./images/nrs-pic1.png")} alt="Project Screenshot" />
                            <img src={require("./images/nrs-pic2.png")} alt="Project Screenshot" />
                            <img src={require("./images/nrs-pic3.png")} alt="Project Screenshot" />
                        </div>
                        <p>A basic Python Application that uses the NetworX library for showing a simulation of a
                            networking
                            system. The network implements hot potato routing in which the priority is to send the
                            packet
                            out of the sub network through the gateway router as early as possible. The application uses
                            matplotlib library in Python to display the graph that contains all the nodes in the network
                            and
                            also shows the path that has been followed by the packet to move from the source node to the
                            destination node.</p>
                        <div class="github-link"><a href="https://github.com/a-arham-x/network-routing-simulation"
                                target="_blank">GITHUB</a></div>
                    </div>
                </li>
                <li>
                    <h3>House Price Predictor</h3>
                    <div class="project">
                        <div class="projects-img">
                            <img src={require("./images/hpp-pic1.png")} alt="Project Screenshot" />
                            <img src={require("./images/hpp-pic2.png")} alt="Project Screenshot" />
                            <img src={require("./images/hpp-pic3.png")} alt="Project Screenshot" />
                        </div>
                        <p>A Python Flask Application that has only one form. The form takes in all the values from the
                            user
                            and then predicts the price of house based on the given values. The model is trained using
                            the
                            Regression Trees algorithm. For this purpose, I had used the sklearn library in Python which
                            has
                            many built in functions for the implementation of various machine learning algorithms.</p>
                        <div class="github-link"><a href="https://github.com/a-arham-x/house-price-predictor"
                                target="_blank">GITHUB</a></div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Projects