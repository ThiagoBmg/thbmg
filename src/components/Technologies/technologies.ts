export type Itechnologies = {
    name: string,
    experience: string
    url:string
    level: string
}

var levels = ["BÁSICO", "INTERMEDIÁRIO","AVANÇADO"]

export const technologies : Itechnologies[]= [{
    name: 'Javascript',
    experience: 'Utilizando para criação de APIs e desevolvimento web com ReactJs.',
    url: 'https://img.icons8.com/color/96/000000/javascript--v1.png',
    level: levels[2]
},{
    name: 'ReactJs',
    experience: 'Este site foi desenvolvido com ReactJS e Typescript. A criação do design foi realizada no Figma, onde consegui prototipar e evoluir a idéia de desenvolver este meu site pessoal :)',
    url: 'https://img.icons8.com/plasticine/96/000000/react.png',
    level: levels[1]
},{
    name: 'Python',
    experience: 'Em um desafio, precisei desenvolver uma automação que válidava determinado cenário de um sistema utilizando Selenium (automação em navegadores) e Python.',
    url: 'https://img.icons8.com/color/96/000000/python--v1.png',
    level: levels[2]
},{
    name: 'Power Apps',
    experience: 'Administrando o sistema Dynamics365, estou apto à realizar ajustes complexos em fluxos no Power Apps.',
    url: 'https://img.icons8.com/fluency/96/000000/microsoft-power-automate-2020.png',
    level: levels[2]
},{
    name: 'Power BI',
    experience: 'Desenvolvendo relatórios e dashboards, criando indicadores estratégicos e operacionais. Consegui realizar a entrega de grandes projetos e resultados atuando na Pixeon com a àrea Comercial e Marketing.',
    url: 'https://img.icons8.com/color/96/000000/power-bi.png',
    level: levels[1]
},{
    name: 'Office 365',
    experience: 'Experiência em administração de sites no Sharepoint e criação de documentações. ',
    url: 'https://img.icons8.com/color/96/000000/office-365.png',
    level: levels[1]
},{
    name: 'SQL Server',
    experience: 'Desenvolvimento de scripts SQL e otimizando consultas existentes para melhorar a performance de execução',
    url: 'https://img.icons8.com/color/96/000000/microsoft-sql-server.png',
    level: levels[1]
},{
    name: 'Docker',
    experience: 'Aplicações já desenvolvidas e orquestradas através de containers',
    url: 'https://img.icons8.com/color/96/000000/docker.png',
    level: levels[1]
},{
    name: 'Git',
    experience: 'Aplicações já desenvolvidas e orquestradas através de containers',
    url: 'https://img.icons8.com/color/96/000000/git.png',
    level: levels[2]
},{
    name: 'Django',
    experience: 'Desenvolvendo e suportando produtos que utilizando Django como framework',
    url: 'https://img.icons8.com/windows/96/000000/django.png',
    level: levels[2]
},{
    name: 'Linguagem C',
    experience: 'Cursando Ciência da Computação, utilizo a linguagem C para realizar diversos trabalhos acadêmicos',
    url: 'https://img.icons8.com/color/96/000000/c-programming.png',
    level: levels[2]
},{
    name: 'Linguagem Java',
    experience: 'Cursando Ciência da Computação, utilizo a linguagem java para realizar diversos trabalhos acadêmicos',
    url: 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png',
    level: levels[2]
}]


export const getTechnologies = (arr:Itechnologies[], lim:number = 0):[] =>{
    
    var temp: Itechnologies[] = []
    var response:any = []

    function handler(value:Itechnologies,index:number){
        /*  */
        if(temp.length<lim){
            temp.push(value)
        }
        else if(temp.length == lim){
            response.push(temp)
            temp = [value]
        }
        /*  */
        if(index+1 === arr.length){
            response.push(temp)
        }
    }
    
    arr.map((value,index)=>handler(value, index))

    return response
}


export default getTechnologies
//console.log(getTechnologies(technologies,5))