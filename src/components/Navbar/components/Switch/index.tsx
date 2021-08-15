import { resourceUsage } from 'process'
import './style.css'
import {switchColorhandler} from './animation/toggle'


export const Switch = () =>{
 return(
    <div className="SwitchColorContext" id="SwitchColorContext" onClick={switchColorhandler}>
        <div className="Toggle" id="Toggle" >
            <img src="./images/sun.svg" id="ToggleImage" alt="moon image" />
        </div>
    </div>
 )
}

export default Switch