import React, { useEffect, useRef } from 'react';
import 'https://www.goat1000.com/tagcanvas.min.js';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const WordCloud = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      window.TagCanvas.Start('myCanvas', 'tags', {
        textColour: '#94FFD8',
        outlineColour: '#1a1a1a',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.03,
        initial: [0.3, -0.1],
        textHeight: 25,
      });
    } catch (e) {
      if (containerRef.current) {
        containerRef.current.style.display = 'none';
      }
    }
  }, []);

  return (
    <Container>
    <div className="App">
      <div id="myCanvasContainer" ref={containerRef}>
        <canvas width="800" height="600" id="myCanvas" ref={canvasRef}>
          <p>Anything in here will be replaced on browsers that support the canvas element</p>
        </canvas>
      </div>
      <ul id="tags">
      <li><Link to='/' data-weight="1000">ReactJS</Link></li>
      <li><Link to='/' data-weight="900">Data Structures</Link></li>
      <li><Link to='/' data-weight="800">JAVA</Link></li>
      <li><Link to='/' data-weight="700">NodeJS</Link></li>
      <li><Link to='/' data-weight="600">MongoDB</Link></li>
      <li><Link to='/' data-weight="500">C++</Link></li>
      <li><Link to='/' data-weight="400">DBMS</Link></li>
      <li><Link to='/' data-weight="300">JavaScript</Link></li>
      <li><Link to='/' data-weight="200">Tailwind CSS</Link></li>
        
      </ul>
    </div>
    </Container>
  );
};

const Container = styled.div`
body {
  margin: 0;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #00FFFF;
}

#myCanvasContainer {
  width: 100%;
  height: 100%;
}

canvas {
  display: block;
}

#tags {
  display: none;
}

`
export default WordCloud;
