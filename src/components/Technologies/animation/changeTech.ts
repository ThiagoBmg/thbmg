import tech , { technologies, Itechnologies } from '../technologies'
import {textLengthValider} from '../../../utils/textReducer'

export const changeTech = (index:number):void =>{
    const TechConfig:Itechnologies[][] = tech(technologies, 3) 
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

export default changeTech