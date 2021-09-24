
import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import uthoob from './images/uthoob.png'
import wall from './images/wall.png'
import hostel from './images/hostel.JPG'
import wall2 from './images/wall2.jpg'

export class Project extends Component {  

        render() {  

  

                return (  

                        <div>  

                         <div className='container-fluid' >  

                         <Carousel fade black>  

                         <Carousel.Item style={{'height':"700px",'backgroundColor':"black", "margin-top":"20px"}} >  

                         <img style={{'height':"700px"}}  

                         className="d-block w-100"  

                        src={wall}  />  

                           <Carousel.Caption>  

                             <h3>Flight Fare</h3>  

                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"700px", 'backgroundColor':"black", "margin-top":"25px", }}>  

                                 <img style={{'height':"800px"}}  

                                   className="d-block w-100"  

                                    src={uthoob}    />  

                                       <Carousel.Caption>  

                                        <h3>Video and Lyrics Search App</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item style={{'height':"700px",'backgroundColor':"black"}}>  

                                       <img style={{'height':"700px"}}  

                                        className="d-block w-100"  

                                         src={wall2}   />  

                                        <Carousel.Caption>  

                                          <h3>Third Demo</h3>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

      }  

}  

export default Project 