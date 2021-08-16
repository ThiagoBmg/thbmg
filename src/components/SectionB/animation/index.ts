import {phrases} from '../phrases'

export const textAnimation = () => {
    const te = document.getElementById("TextTest")
    var init = 0,
    interval = 3 * 1000  

    const changeText = () =>{
        te!.innerText= phrases[init]
        if(init<phrases.length -1) return init++ 
        if(phrases.length>=init) return init = 0 
    }

    return  setInterval(()=>changeText(),interval)
}