//import React from 'react'
import './styles.css'
import {textLengthValider} from '../../utils/textReducer'
import {technologies} from './technologies'

export const TechnologiesCard = () =>{
    return(
        <section className="Tech">
            <div className="TechHeader">
                <h1>CONHECIMENTOS</h1>
            </div>
            {technologies.map(technologie=>(
                <div className="TechCard">
                    <img className="TechImage" src={technologie.url} alt="technologie image" />
                    <h3 className="TechName">{technologie.name}</h3>
                    <p className="TechExperience">{ textLengthValider(technologie.experience, 100) /* technologie.experience.length  */}</p>
                    
                    <div className="TechCardFotter">
                        <span className="TechLevel" >{technologie.level.toUpperCase()}</span>
                        <a className="TechPlus"  href="#"><span>PROJETOS</span></a>
                    </div>
                
                </div>
            ))}
        </section>
    )
}

export default TechnologiesCard