import React from 'react'
import { ReactDOM } from 'react';
import { Parallax, Background } from 'react-parallax';
import About from './components/About';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useState, useEffect } from 'react';
import Project from './components/Project';
import Navbar from './components/Navbar';
import Resume from './Nathan_resume.pdf'
import {Route, Switch} from 'react-router-dom'

function App(){

  
  const image1="https://images.unsplash.com/photo-1488489153583-89ce18dd4968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
  const image2="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"

  

  const inlineStyle ={
    background: '#00000094',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',

  }

  
  return(
    

      <div style={{ textAlign: 'center' }}>
        
          <Route path ='/' component={About} exact/>
          <Route path ='/project' component={Project} />
          {/* <Route path ='/contact' component={Contact} exact/> */}
        


        <Navbar/>
        <Parallax bgImage={ image1 } strength={500}>
            <div style={{ height: 750 }}>
          < Fade bottom cascade>
            <About/>
              {/* <div style={inlineStyle} className='circle'>
              
                <h1 style={{color:'white'}}>Nathan $ Subhash</h1>
                <p style={{color:'white'}}>a cool guy</p>
            </div> */}
          </Fade>
          </div>
        </Parallax>
        <h1>|||</h1>

        <Zoom>

          <Parallax>
              <div style={{ height: 600 }}>
            
                <div style={{alignContent:'center'}}><h1>About ME</h1>
                <p>Shit about me</p>
                <a href={Resume} target="_blank">
                <button type = "button" class="btn btn-outline-success" > Resume</button>
                </a>
                
                </div>
              </div>
          </Parallax>
        </Zoom>
        
        

      </div>
    

      );

}
export default App