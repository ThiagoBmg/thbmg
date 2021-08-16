import './style.css'
import {textAnimation} from './animation'

export const SectionB = () =>{

    setTimeout(()=>textAnimation(), 1000)

    return(
        <section className="SectionBContainer">
            <div className="SecBA"></div>
            <div className="SecBB">
                <p> valores</p>
                <h1 id="TextTest">FAZENDO A DIFERENÇA</h1>
                <span>meu foco é dar o meu melhor e garantir experiência de mercado.</span>
            </div>
        </section>
    )
}

export default SectionB