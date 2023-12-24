import React from 'react'

function Header() {
    return (
        <>
            <div class="top">
                <h1>Abdul Arham</h1>
                <h2>Software Engineer</h2>
                <p>Islamabad, Pakistan</p>
                <div class="image-div">
                    <img class="profile-pic" src={require("./images/my_pic1.jpg")} alt="A picture of me" />
                </div>
            </div>
        </>
    )
}

export default Header