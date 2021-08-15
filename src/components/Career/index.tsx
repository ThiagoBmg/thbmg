import './style.css'
import {works, Ihistory} from './career'
import {textLengthValider} from '../../utils/textReducer'

export const CareerCard = () =>{
    /* @Contruindo a tag com a tecnologia */
    const setStackTag = (val:string) => {
        return(
            <span className="CareerStackName">#{val}</span>
        )
    }
    /* @Acrecentando dados da carreira no card */
    const setCareerData = (valueb:Ihistory) =>{
        return(
            <div className="CareerCardUp">
                <h3 className="CareerActivity" >{valueb.activity}</h3>
                <h5 className="CareerPeriod">{valueb.startDate + ' - ' + valueb.endDate}</h5>
                <h6 className="CareerAbout">{textLengthValider(valueb.about, 100)}</h6>
                <h6 className="CareerStack">STACK</h6>              
                <div className="CareerStackDiv">{valueb.mainStack.map(val=>setStackTag(val))}</div>
            </div>
        )
    }

    return(
        <>
            {works.map(experience=>(
                <div className="CareerCard">    
                    <div className="CareerContext"> 
                      {/*   <img className="CareerImage" src={experience.image} alt="img" /> */}
                       
                        <video src="https://brandbook.pixeon.com/wp-content/uploads/2020/04/Pixeon_Fundo_Branco.mp4"  className="CareerImage" autoPlay playsInline loop muted ></video>
                        {experience.history.map(currentExperience=>setCareerData(currentExperience))}
                    </div>
                    <a className="CareerFotter"  href="#">
                        <img className="CareerPlusImage" src="https://img.icons8.com/pastel-glyph/128/000000/plus--v1.png"/>
                        <span className="CareerSaibaMais">SAIBA MAIS</span>
                    </a>
                </div>
            ))}
        </>
    )
}

export default CareerCard