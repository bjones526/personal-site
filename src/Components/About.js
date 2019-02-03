import React, { Component } from "react";

class About extends Component {
    render(){
        //todo photo
        //todo resume link
        return (
        <div>
            <p>I'm currently a front end developer for IBM Hybrid Cloud. My favorite framework at the moment is React.js with Redux, but I've also developed in Angular and written backend apps with node express.
            </p>
            <p>I graduated from UNC's master's in Information Science program in 2016. 
                My master's paper focused on thumbnails for archival collections online, which I presented at the 2017 Joint Conference for Digital Libraries in Toronto. 
                You can find my poster on github and the <a href='https://ieeexplore.ieee.org/document/7991599'> publication</a> in the JCDL conference proceedings on IEEE Xplore. </p>
        </div>);
    }
}

export default About;