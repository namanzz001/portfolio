import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </Router>
    </Container>
  )
}

const Container = styled.div`
background-image: linear-gradient(to right, rgb(102, 191, 161), rgb(27, 38, 161));
`
export default App