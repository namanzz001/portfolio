import React from "react";
import Navbar from "../components/navbar";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Wordcloud from "../components/wordcloud";


const home = () => {
  return (
    <Container>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="home-content">
          <div className="home-bio">
            <h1>Hi,<br></br>I'm <span>Naman,</span> <br></br> Software Developer</h1>
            <p>
              Java Developer / Full Stack Developer
            </p>
          </div>
        </div>
        <div className="word-cloud">
        <Wordcloud/>
        </div>
        
        <div className="btn-contact">
          <Link to='/contact'><button Link to='/contact'>Contact Me</button></Link>
        </div>

      </div>

      
    </Container>
  );
};

const Container = styled.div`
// background-color: black;
height: 100vh;
background-image: linear-gradient(to right, rgb(102, 191, 161), rgb(27, 38, 161));


.home-content{
    display: flex;
    align-items: self-start;
    margin-left: 15%;
    padding-top: 4%;
}

.home-bio{
    margin-top: 0px;
    line-height: 1;
}

.home-bio h1{
    font-weight: 600;
    font-size: 5rem;
    letter-spacing: -2px;
}

.home-bio h1 span{
    color: white;
}

.home-bio p{
    font-size: medium;
    color: white;
    letter-spacing: 2px;
    margin-top: -5%;
}

.word-cloud{
  margin-left: 45%;
  margin-top: -30%;
}

.btn-contact{
  margin-left: 15%;
  margin-top: -7%;
  
}

.btn-contact button{
  background-color: rgb(0,0,0, 0.8);
  width: 10rem;
  padding: 0.5rem;
  // border-radius: 0.5rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: #f53d6d;
  border-color: #f53d6d;
}



`;

export default home;
