import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import Netflixclone from '../assets/netflixclone.jpg'
import Scienticcalc from '../assets/calculator.png'

const Projects = () => {
  return (
    <Container>
      <div>
        <Navbar/>
      </div>
      <div className='project'>
        <div className='project-img'>
          <img src={Netflixclone} alt='netflixcloneimg' />
          <div className='text'>
            <h1><span>NETFLIX CLONE</span></h1>
            <p>
               The Netflix Clone Project is a web application designed to replicate the core
               functionalities of Netflix. Built using modern web development technologies 
               such as React for the frontend, Node.js and Express for the backend, and MongoDB
                for the database, this project showcases a streaming platform where users can browse, 
                search, and view a collection of movies and TV shows. Key features include user authentication,
                 personalized recommendations, video playback, and a responsive user interface. 
                 The project serves as an excellent demonstration of full-stack development skills
                  and provides a comprehensive understanding of building a scalable and interactive web 
                  application.
            </p>
            <button>Source Code</button>
          </div>
        </div>
      </div>

      <div className='project'>
        <div className='project-img'>
          <img src={Scienticcalc} alt='calcimg' />
          <div className='text'>
            <h1><span>SCIENTIFIC CALCULATOR</span></h1>
            <p>
               The Netflix Clone Project is a web application designed to replicate the core
               functionalities of Netflix. Built using modern web development technologies 
               such as React for the frontend, Node.js and Express for the backend, and MongoDB
                for the database, this project showcases a streaming platform where users can browse, 
                search, and view a collection of movies and TV shows. Key features include user authentication,
                 personalized recommendations, video playback, and a responsive user interface. 
                 The project serves as an excellent demonstration of full-stack development skills
                  and provides a comprehensive understanding of building a scalable and interactive web 
                  application.
            </p>
            <button>Source Code</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container  = styled.div`
  .project {
    margin-top: 2%;
    padding-bottom: 2%;
    margin-left: 5%;
    display: flex;
    align-items: center;
  }

  .project-img {
    position: relative;
    width: 50%;
  }

  .project-img img {
    margin-top: 0.07%;
    width: 100%;
    height: 70vh;
    border-radius: 0.5cm 0cm 0cm 0.5cm;
    display: block;
  }

  .text {
    height: 67vh;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
    margin-left: 0px;
    padding: 10px;
    background: linear-gradient(to bottom right, rgb(255, 0, 0), rgb(0, 0, 0), rgb(0,0,139)  );
    color: white;
    width: 85%;
    border-radius: 0cm 0.5cm 0.5cm 0cm;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease, transform 2s ease;
  }

  .text p{
    padding-left: 2%;
    padding-right: 2%;
    text-align: justify;
  }

  .text button{
    margin-left: 2%;
    background-color: rgb(0,0,0, 0.8);
    width: 10rem;
    padding: 0.5rem;
    letter-spacing: 2px;
    font-weight: 500;
    color: #f53d6d;
    border-color: #f53d6d;
  }

  .text h1 span{
    padding-left: 30%;
  }

  .project-img:hover .text {
    opacity: 1;
    visibility: visible;
    transform: translate(0%, -50%);
  }
`

export default Projects
