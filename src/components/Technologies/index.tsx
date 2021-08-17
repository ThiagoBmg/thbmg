//import React from 'react'
import './styles.css'
import {textLengthValider} from '../../utils/textReducer'
import tech , { technologies, Itechnologies } from './technologies'

export const TechnologiesCard = () =>{
    // configurando a quantidade de itens visiveis no cartão por página
    const TechConfig:Itechnologies[][] = tech(technologies, 3) 
    //console.log(TechConfig[1][1].name)

    const handler = (index:number):void =>{
       /*  alert('w') */
        let documes = Array.from(document.getElementsByClassName("TechCard") as HTMLCollectionOf<HTMLElement>)
        let fotters = Array.from(document.getElementsByClassName("TechFotter") as HTMLCollectionOf<HTMLElement>)
        
        //alert(index)
        // console.log(index)
        //if(!documes.length) return false

        for(let i = 0; i<documes.length; i++){
            let selected_tech = TechConfig[index][i]
            if(documes[i].id == "upFade") {
                documes[i].setAttribute("id", "downFade")
            }
            else if(documes[i].id == "downFade") {
                documes[i].setAttribute("id", "upFade")
                setTimeout(()=>{
                    documes[i].getElementsByClassName("TechName")[0].innerHTML= selected_tech.name
                    documes[i].getElementsByClassName("TechImage")[0].setAttribute("src", selected_tech.url)
                    documes[i].getElementsByClassName("TechExperience")[0].innerHTML= textLengthValider(selected_tech.experience,100)
                    documes[i].getElementsByClassName("TechLevel")[0].innerHTML= selected_tech.level
                },1000)
                setTimeout(()=>{documes[i].setAttribute("id", "downFade")},1000)
            }    
        }
        
        for(let i =0; i<fotters.length;i++){
            let getSimbols = fotters[i].getElementsByClassName("circle")
            for(let u =0; u< getSimbols.length; u++) getSimbols[u].setAttribute("id", "desactivatedCircle")
            
            fotters[i].getElementsByClassName("circle")[index].setAttribute("id", "activatedCircle")
        }
    }

    const Fotter = () => (
        <div className="TechFotter">
            {TechConfig.map((value,index)=>(
                <div className="circle" onClick={()=>handler(index)}></div>
            ))}
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