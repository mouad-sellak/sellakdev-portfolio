import React, { useState } from 'react'
import './portfolio.css'
import finotbib from '../../assets/finotbib.png'
import laraemp from '../../assets/laraemp.png'
import planningmanage from '../../assets/planningmanage.png'
import gestiofact from '../../assets/gestiofact.png'
import guessapp from '../../assets/guessapp.png'
import djangoblog from '../../assets/djangoblog.png'
import Modal from './Modal'
function Portfolio() {
  const [openModal, setOpenModal] = useState(false)
  const [idModal, setIdModal] = useState(0)
  const data = [
    {
      id:1,
      title: "GestioFact Web App",
      img:  gestiofact,
      github:"https://github.com/mouad-sellak/gestiofact-management-php",
      describe:"  Its a back office web application developed in order to facilitate invoices and billing management for a good client experience."

    },
    {
      id:2,
      title: "FinoTbib Mobile App",
      img: finotbib,
      github:"https://github.com/OussamaWR/FinoTbibAppReactNative" ,
      describe:" This is a mobile app built with React Native and PHP, it helps seek people to find the nearest doctor to their neighboor whith the fatest way. "
    },
    {
      id:3,
      title: "LaraEmp Web App",
      img: laraemp,
      github:"https://github.com/mouad-sellak/employees-management-laravel",
      describe:" This is an employees management web application devloped with laravel and admin lte, it's main purpose is to make easy the management of a company employees as storing, showing, updating their data      "

    },
    {
      id:4,
      title: "Simple GueesNum App",
      img:  guessapp,
      github:"https://github.com/mouad-sellak/guessingnumber-game-react-native" ,
      describe:"   For learning purposes I developed a simple react native mobile application that helps user to enjoy guessing number game."

    },
    {
      id:5,
      title: "Django Blog Web App",
      img:  djangoblog,
      github:"https://github.com/mouad-sellak/django-blog",
      describe:"  Its a django website I developed for learning purposes, its main idea is to present bright coding platform products and services."

    },{
      id:6,
      title: "Planning Management App",
      img:  planningmanage ,
      github:"https://github.com/mouad-sellak/planning-management-php",
      describe:"  It is a monolithic PHP web application that helps project managers within a company to manage and plan proper planning for good and successful work"

    }
  
  ]
  return ( 
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container" >
        {data.map(({id,title,img,github,describe})=> 
          <article key={id}  className="portfolio_item" >
            <div className="portfolio_item_img" >
              <h3>{title}</h3>
              <img src={img} className="item_img" alt={title} />
              <div className="buttons " >
                <a href={github} target="_blank" className="btn btn-primary" >Source Code</a>
                <a onClick={() => { setOpenModal(true) ; setIdModal(id) }} className="btn" >Read More</a>
              </div>
              {openModal && idModal==id && <Modal id={setIdModal} closeModal={setOpenModal} description={describe} />}
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio