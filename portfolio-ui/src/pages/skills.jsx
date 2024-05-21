import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
// import Java from '../assets/java.png'

const skills = () => {
  return (
    <Container>
      <div>
        <Navbar/>
      </div>

      <div className='skills-heading'>
        <h1>SKILLS</h1>
      </div>

      <div className='skills-container'>
      <div className='skill-block'>
        <div className='proglang'>
          <h1>Prog Languages/Tools</h1>
        </div>
        <div className='skills'>
          <p>Java</p>
          <p>C++</p>
          <p>C Programming</p>
          <p>VS Code</p>
          <p>IntelliJ</p>
          <p>GIT</p>
          <p>Gitbash</p>
          <p>Github</p>
        </div>
      </div>

      <div className='skill-block'>
        <div className='webtech'>
          <h1>Web Technologies</h1>
        </div>
        <div className='skills'>
          <p>ReactJS</p>
          <p>NodeJS</p>
          <p>ExpressJS</p>
          <p>MongoDB</p>
          <p>JavaScript</p>
          <p>Tailwind CSS</p>
          <p>BootStrap</p>   
          <p>CSS</p>
          <p>HTML</p>
        </div>
      </div>

      <div className='skill-block'>
        <div className='comptech'>
          <h1>Computer Technologies</h1>
        </div>
        <div className='skills'>
          <p>Data Structures</p>
          <p>DBMS</p>
          <p>Operating Systems</p>
          <p>Computer Networks</p>
          <p>Oops</p>
          <p>Low Level Design</p>
        </div>
      </div>

      </div>

    </Container>
    
  )
}

const Container = styled.div`
height: 100vh;
.skills-heading h1{
  text-align: center;
  margin-top: 2%;
}

.skills-container{
  display: grid;
  grid-template-columns: auto auto auto auto;
  // grid-gap: 150px;
  padding: 5px;
  margin-top: 50px;
  // margin-left: 0%;
  // padding-left: 7%;
}

.skill-block{
  border: solid;
  margin-left: 20%;
  width: 25vw;
  padding-left: 2%;
  // padding-top: -2%;
}

.skill-block h1{
  letter-spacing: -2px;
}

.skills{

}

.skills p{
  letter-spacing: 2px;
}


`

export default skills