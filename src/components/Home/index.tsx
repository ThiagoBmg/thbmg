import './style.css'


export const Section = () =>{

    return(
        <section id="SectionA"  className="Section">
           
            <div className="SectionA">
                <h1>Olá, <br/>eu sou o Thiago!</h1>
                <div className="sub_textos"> 
                    <span>Desenvolvedor Full-Stack</span>
                    <span>Ciência da Computação</span>
                    <span>Trabalhando na Pixeon</span>
                </div>
                <p id="sectionAText">Descubra um pouco mais sobre minha história, e como venho evoluindo minhas habilidades nos ultimos tempos</p>

                <a href="#Home"><button className="HomeButton">Saber Mais</button></a>
            </div>
            <div className="SectionB">
               <img className="ProfilePhoto" src="./images/eu.svg" alt="ss"/> 
            </div>
        </section>
    )
}

export default Section