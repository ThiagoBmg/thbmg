import './style.css'
import {Switch} from './components'

export const Navbar = () => {
    return(
         <div className="Nav">
             <div className="NavSection">
                 <Switch/>
           {/*       <img className="FlagImage" src="./images/brFlag.svg" alt="leng img" />
                 <img className="FlagImage" src="./images/usaFlag.svg" alt="leng img" />  */}
             </div>
         </div>
    )
}

export default Navbar