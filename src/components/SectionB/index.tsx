import './style.css'
import {phrases} from './phrases'


export const SectionB = () =>{

    const handler = () =>{
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

    setTimeout(()=>handler(), 1000)

    return(
        <section className="SectionBContainer">
            <div className="SecBA"></div>
            <div className="SecBB">
                <p> valores</p>
                <h1 id="TextTest">FAZENDO A DIFERENÇA</h1>
            </div>
            

           {/*  <button>Testes</button> */}
        </section>
    )
}

export default SectionB