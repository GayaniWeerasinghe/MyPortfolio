import React, { useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent/index'
import Image1 from '../../assest/e-commerce.jpg'
import Image2 from '../../assest/food.jpg'
import Image3 from '../../assest/todo.jpg'
import Image4 from '../../assest/php.jpeg'
import Image5 from '../../assest/calculator.jpg'
import Image6 from '../../assest/design.jpg'
import {Link} from 'react-router-dom'
import './styles.scss'

const data = [
  {
    id: 2,
    name: 'Ecommerce',
    image: Image1,
    link: 'https://github.com/GayaniWeerasinghe/E_Commerce_Full-Stack-App.git'
  },
  {
    id: 2,
    name: 'FoodOrdering App',
    image: Image2,
    link: 'https://github.com/GayaniWeerasinghe/FoodOrderingApp.git'
  },
  {
    id: 2,
    name: 'ToDo App',
    image: Image3,
    link: 'https://github.com/GayaniWeerasinghe/ToDoApp.git'
  },
  {
    id: 2,
    name: 'PHP',
    image: Image4,
    link: 'https://github.com/GayaniWeerasinghe/PHP_CRUD.git'
  },
  {
    id: 2,
    name: 'Calculator',
    image: Image5,
    link: 'https://github.com/GayaniWeerasinghe/Calculator.git'
  },
  {
    id: 3,
    name: 'Web Designing',
    image: Image6,
    link: 'https://www.figma.com/design/lxnxh6K0ZkKzB1TAI19UxH/OBA-Website?node-id=0-1&t=kvqMtdJlgZ163xux-1'
  },
]

const filterData = [
  {
     filterId : 1,
     label: "All"
  },
  {
    filterId : 2,
    label: "Development"
 },
 {
  filterId : 3,
  label: "Design"
 },
]

const Portfolio=() => {

  const [filteredValue, setFilteredValue] = useState(1)
  const [hoveredValue, setHoveredValue] = useState(1)

  function handleFilter(currentId){
    setFilteredValue(currentId)
  }

  function handleHover(index){
    setHoveredValue(index)
  }

  const filteredItems = filteredValue === 1 ? data : 
  data.filter(item=>item.id === filteredValue)


    return(
        <section id="portfolio" className="portfolio">
             <PageHeaderContent
               headerText = "My Portfolio"
               icon={<BsInfoCircleFill size={40}/>}
             />
             <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                   {
                    filterData.map(item=> (
                      <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=> handleFilter(item.filterId)} key={item.filterId}>
                         {item.label}
                      </li>
                    ))
                   }
                </ul>
                <div className="portfolio__content__cards">
                   {
                    filteredItems.map((item,index)=>(
                      <div className="portfolio__content__cards__item" 
                      key={`cardItem${item.name.trim()}`}
                      onMouseEnter={()=>handleHover(index)}
                      onMouseLeave={()=>handleHover(null)}>
                        <div className="portfolio__content__cards__item__img-wrapper">
                           <a>
                              <img alt="Dummy data" src={item.image}/>
                           </a>
                        </div>
                        <div className="overlay">
                           {
                            index === hoveredValue && (
                              <div>
                                <p>{item.name}</p>
                                <Link to={item.link}><button>Visit</button></Link>
                              </div>
                            )
                           }
                        </div>
                      </div>
                    ))
                   }
                </div>
                <div>
                  <br/><br/>
      <h2>Career Development Plan</h2>
      <p>My career development plan involves some plans which are use to achieve some goals within Timeframes. These are the steps I plan to take.</p>
      <div className="grid-container">
        <div className="grid-item">
          <h4><b>Short-Term Goals (1-2 years)</b></h4>
          <ul>
            <li>Advance proficiency in the MERN stack.</li>
            <li>Learn DevOps tools and cloud platforms (AWS, Azure, Google Cloud).</li>
            <li>Explore mobile development frameworks like React Native or Flutter.</li>
          </ul>
        </div>
        <div className="grid-item">
          <h4><b>Mid-Term Goals (3-5 years)</b></h4>
          <ul>
            <li>Aim for a senior software engineer position.</li>
            <li>Take on team leadership responsibilities.</li>
            <li>Specialize in machine learning and AI.</li>
            <li>Master full-stack development.</li>
          </ul>
        </div>
        <div className="grid-item">
          <h4><b>Long-Term Goals (5+ years)</b></h4>
          <ul>
            <li>Aim for positions such as Engineering Manager or CTO.</li>
            <li>Develop strategic decision-making skills.</li>
            <li>Consider starting a tech company or a startup.</li>
            <li>Stay updated with technological advancements.</li>
          </ul>
        </div>
      </div>
    </div>

             </div>
        </section>
    )
}

export default Portfolio