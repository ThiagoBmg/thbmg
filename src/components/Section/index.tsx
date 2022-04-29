import './style.css'
import {textAnimation} from './animation'

export const SectionB = () =>{

    setTimeout(()=>textAnimation(), 1000)

    return(
        <section className="SectionBContainer">
            <div className="SecBA">
                <img src="https://media-exp1.licdn.com/dms/image/C4E2DAQETjzTwYrZneA/profile-treasury-image-shrink_800_800/0/1619449394943?e=2147483647&v=beta&t=n-B_iNsLa-SmfgNeukqMmMvzqQTk3-GlUp7sXqO2lr8" alt="" />
            </div>
            <div className="SecBB">
                <p> valores</p>
                <h1 id="TextTest">FAZENDO A DIFERENÇA</h1>
                <span>meu foco é dar o meu melhor e garantir experiência de mercado.</span>
                <a href="#CareerCard"><button className="SectionBButton">Saber Mais</button></a>
            </div>
        </section>
    )
}

export default SectionB