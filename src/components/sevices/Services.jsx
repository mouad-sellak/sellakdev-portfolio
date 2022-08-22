import React, {useState, useEffect} from 'react'
import './services.css'
import { BiBadgeCheck } from "react-icons/bi";
import {db} from '../../firebase-config.js'
import {collection,getDocs} from '@firebase/firestore'
function Services() {
  const [services,setServices]=useState([])
  const servicesRef=collection(db,"services")
  useEffect(()=>{
    const getServices= async ()=>{
      const data=await getDocs(servicesRef)
      //setServices(data.docs)
      console.log(data)
    }
    getServices()
  },[])
  const data=[
    {
      title:"Frontend Developement",
      content:[
        "Build Responsive User Interfaces",
        "Customise Existing Frontend Projects",
        "Transform Figma,AdobeXD files to HTML,React Projects",
        "Build React Web Applications",
        "Link Frontend UI to Backend API",
        "Build Creative UIs Based on Your Requerments"
      ]
    },
    {
      title:"Backend Developement",
      content:[
        "Build Rest and Restful Functional APIs",
        "Customise Existing Backend Projects",
        "Build Backend Projects From Scratch",
        "Test and Maintain Existing Web APIs",
        "Transform Monoletic Projects to Microservices Projects",
        "Build Fast APIs Based on Your Requerments",
      ]
    },
    {
      title:"Design & Multimedia",
      content:[
        "Make Attractive Illustrator Logo Design",
        "Make Flyers, Thumbneals, Ads Posters",
        "Design Figma,AdobeXD pallettes",
        "Make Social Media Posts Design",
        "Edit Longs, Shorts Videos and Reels",
      ]
    }
  ]
  return (
    <section id="services">
      <h5>What I can do</h5>
      <h2>Services</h2>
      <div className="container services_container" >

        {services.map(({title,content})=>(
        <article className="service_item" >
          <div>
            <div className="service_title">
              <h3>{title}</h3>
            </div>
            {content.map(item=>(
               <div className="service_item_desc">
               <BiBadgeCheck className="service_item_icon" />
               <h4>{item}</h4>
             </div>
            ))}
          </div>
        </article>
   ))}
      </div>
    </section>
  )
}

export default Services