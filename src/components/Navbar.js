import React, { useState } from 'react'
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Router } from 'react-router'
import Project from './Project'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'

export default function Navbar() {
    const[navbar, setNavbar]= useState(false)
    const scrollHandle= ()=>{
        if (window.scrollY >= 320){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', scrollHandle)
    const inLineStyle={
        padding:'7px',
        align:"right",
        fontSize:'125%',
        alignItems:'right',
        spacing:'10px',
        letterSpacing:'7px'

    }
    let name;
    if (navbar){
        name = <div style={inLineStyle}> 
        <p>Nathan Subhash</p>

    </div>
    }else{
        name = <div>

            <ul class="nav ">
                            
                <li class="nav-item">
                    <Link to ="/" className="nav-link">Home</Link>
                </li>
                
                <li class="nav-item">

                    <Link to="/project" class="nav-link" >Project
                    </Link>
                    
                </li>
                <li class="nav-item">
                    <Link to="/contact" class="nav-link" >Contact</Link>
                </li>
                
            </ul>
        </div>

    }
   
    return (
        <div style={{display:'flex'}}>

            <div className={navbar ? 'navbg active ' : 'navbg '} >
                {/* {(()=> {
                    if(navbar===true){
                        return (
                            

                        )
                    }else{
                        return(
                            

                        )
                    }

                } 

                )}
                
                 */}
                 {name}
            </div>
        </div>

    )
}
