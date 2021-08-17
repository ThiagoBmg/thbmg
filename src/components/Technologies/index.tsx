//import React from 'react'
import './styles.css'
import {textLengthValider} from '../../utils/textReducer'
import tech , { technologies, Itechnologies } from './technologies'
import { changeTech } from './animation/changeTech'

export const TechnologiesCard = () =>{
    const TechConfig:Itechnologies[][] = tech(technologies, 3) 

    const Fotter = () => (
        <div className="TechFotter">
            {TechConfig.map((value,index)=>( <div className="circle" onClick={()=> changeTech(index)}></div> ))}
        </div>
    )

    const TechCard = (technologie:Itechnologies) => (
        <div id="downFade" className="TechCard">
            <img className="TechImage" src={technologie.url} alt="technologie image" />
            <h3 className="TechName">{technologie.name}</h3>
            <p className="TechExperience">{ textLengthValider(technologie.experience, 100)}</p>

            <div className="TechCardFotter">
                <span className="TechLevel" >{technologie.level.toUpperCase()}</span>
                <a className="TechPlus"  href="#"><span>PROJETOS</span></a>
            </div>
        </div>
    )

    return(
        <section id="TechCard" className="Tech">
            <div className="TechHeader">
                <h1>CONHECIMENTOS</h1>
            </div>
            {TechConfig[0].map(technologie=>TechCard(technologie))}
           <Fotter/>
        </section>
    )
}

export default TechnologiesCard