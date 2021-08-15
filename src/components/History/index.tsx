import './style.css'

const obj = [{
    image: 'https://img.icons8.com/dotty/100/D0F2F2/age.png',
    name: '21 Anos'
},{
    image: 'https://img.icons8.com/dotty/100/D0F2F2/worldwide-location.png',
    name: 'São Bernardo do Campo - SP'
},{
    image: 'https://img.icons8.com/ios/100/D0F2F2/diploma.png',
    name: 'Graduando'
}]


export const History = () =>{
    return(
        <section className="HistorySections">
                {obj.map((value)=>(
                    <div className="HistoryCard">
                        <img src={value.image}/>
                        <h1>{value.name}</h1>    
                    </div>
                ))}
        </section>
    )
}

export default History