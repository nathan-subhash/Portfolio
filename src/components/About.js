import React from 'react'
import { useState } from 'react'
import { animation } from 'react-reveal/globals'
import '../components/About.css'

export default function About(props) {

    const[shape, setShape] = useState(false)

    const scrollHandle = () =>{
        
        if(window.scrollY >=300){
            setShape(true)
        }else{

            setShape(false)
        }
    }
    window.addEventListener('scroll', scrollHandle)
    
    const social= ()=> {

        document.documentElement.scrollTop = 0;

    }


    return (
        <div  onScroll={scrollHandle} className="logo">
            <h2 id = "change"> Nathan Subhash
            </h2>
            <p id ='change1'> Front End Web Developer</p>
            
        </div>
    )
}
