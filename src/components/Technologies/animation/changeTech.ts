import tech , { technologies, Itechnologies } from '../technologies'
import {textLengthValider} from '../../../utils/textReducer'

export const changeTech = (index:number):void =>{
    const TechConfig:Itechnologies[][] = tech(technologies, 3) 
    /*  alert('w') */
    let documents = Array.from(document.getElementsByClassName("TechCard") as HTMLCollectionOf<HTMLElement>)
    let fotters = Array.from(document.getElementsByClassName("TechFotter") as HTMLCollectionOf<HTMLElement>)
    
    //alert(index)
    // console.log(index)
    //if(!documents.length) return false
 
    for(let i = 0; i<documents.length; i++){
        let selected_tech = TechConfig[index][i]
        if(documents[i].id == "upFade") {
            documents[i].setAttribute("id", "downFade")
        }
        else if(documents[i].id == "downFade") {
            documents[i].setAttribute("id", "upFade")
            if(selected_tech != undefined){
                setTimeout(()=>{
                    documents[i].getElementsByClassName("TechName")[0].innerHTML= selected_tech.name
                    documents[i].getElementsByClassName("TechImage")[0].setAttribute("src", selected_tech.url)
                    documents[i].getElementsByClassName("TechExperience")[0].innerHTML= textLengthValider(selected_tech.experience,100)
                    documents[i].getElementsByClassName("TechLevel")[0].innerHTML= selected_tech.level
                },1000)
                setTimeout(()=>{documents[i].setAttribute("id", "downFade")},1000)
            }
        }    
    }
    
    for(let i =0; i<fotters.length;i++){
        let getSimbols = fotters[i].getElementsByClassName("circle")
        for(let u =0; u< getSimbols.length; u++) getSimbols[u].setAttribute("id", "desactivatedCircle")
        fotters[i].getElementsByClassName("circle")[index].setAttribute("id", "activatedCircle")
    }
     
}

export default changeTech