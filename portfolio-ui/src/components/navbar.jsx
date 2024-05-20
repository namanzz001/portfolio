import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const navbar = () => {
  return (
    <Container className='navbar'>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </Container>
  )
}

const Container = styled.div`
nav {
  padding: 1rem;
}

nav ul {
    margin-left: 30%;
    width: 15cm;
    background-color: white;
    border-radius: 1cm;
}

nav ul li {
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
}

nav ul li a {
    text-decoration: none;
    color: black;
    font-size: x-large;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 20px;
    transition: background-color 0.5s ease;
    transition: color 0.7s ease;
}

nav ul li a:hover {
    color: white;
}

nav ul:hover{
    background-color: rgb(1, 95, 109);
}
`
export default navbar