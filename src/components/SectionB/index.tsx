import './style.css'

const phrases = ['INOVAÇÃO', 'PROATIVIDADE', 'HONESTIDADE', "EXELÊNCIA"] 

export const SectionB = () =>{

    const handler = () =>{
        const te = document.getElementById("TextTest")
        var init =0 

        setInterval(()=>{
            te!.innerText= phrases[init]
            if(init<phrases.length -1) return init++
            if(phrases.length>=init) return init = 0 
        },2000)
    }

    setTimeout(()=>handler(), 1000)

    return(
        <div className="SectionBContainer">
            <div className="SecBA"></div>
            <div className="SecBB">
                <h1 id="TextTest">FAZENDO A DIFERENÇA</h1>
                <p> valores</p>
            </div>
            

           {/*  <button>Testes</button> */}
        </div>
    )
}

export default SectionB