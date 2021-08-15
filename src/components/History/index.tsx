import './style.css'
import {higthlights} from './highlights'

export const History = () =>{
    return(
        <section className="HistorySections">
                {higthlights.map((value)=>(
                    <div className="HistoryCard">
                        <img src={value.image}/>
                        <h1>{value.name}</h1>    
                    </div>
                ))}
        </section>
    )
}

export default History