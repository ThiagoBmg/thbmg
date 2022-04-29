export interface Ihistory{
    activity: string
    startDate:string
    endDate:string
    mainStack:string[]
    about:string
}

export const works  = [
{
    company: 'Pixeon',
    image: 'https://www.pixeon.com/wp-content/themes/pixeon2018/img/new/logo-pixeon.png',
    site: 'https://www.pixeon.com',
    history: [{
        activity: 'Analista Desenvolvedor',
        startDate: 'ago. de 2021',
        endDate: 'atualmente',
        mainStack: ['Django', 'Python', 'SQL', 'Jinja2' ,'Rabbitmq', 'Celery', 'Azure Devops', 'Rancher'],
        about:`
        \Desenvolvimento de melhorias e suporte no produto Lumia (chatbot).
        \Tecnologias:
        \- Python 
        \n- Django 
        \- Sql`
    },{
        activity: 'Analista de Eficiência Operacional Jr',
        startDate: 'nov. de 2020',
        endDate: 'ago. de 2021',
        mainStack: ['Power Apps', 'Jira', 'Salesforce', 'Office365' ,'Python', 'SQL', 'Excel', 'JavaScript', 'Dynamics365'],
        about:`
        \nAdministração de acessos/funções dentro de sistemas corporativos.
        \nSuporte Jira service desk (ajustes em workflows, criação de projetos, criação de usuários, automatização de processos, entre outros...).
        \nDesenvolvimento web.
        \nCriação de consultas em Sql.
        \nMigração de dados entre sistemas.
        \nMapeamento de processos e aplicação de melhorias.`
    },{
        activity: 'Assistente de Eficiência Operacional',
        startDate: 'nov. de 2019',
        endDate: 'nov. de 2020',
        mainStack: ['Power BI', 'Power Query', 'SQL', 'Office365'],
        about:`
        \nCriação e manutenção em planilhas de Excel.
        \nGestão e manutenção de relatórios (power bi).
        \nAdministração de acessos/funções dentro de sistemas corporativos.
        \nDesenvolvimento web.
        \nCriação de consultas em Sql.
        \nMapeamento de processos e aplicação de melhorias.`
    }]
}/* ,{
    company: 'FEI' 
    ,image: '',
    site: 'https://www.pixeon.com',
    history: [{
        activity: 'Ciência da Computação',
        startDate: 'nov. de 2020',
        endDate: 'Atualmente',
        mainStack: ['Power Apps', 'Jira', 'Salesforce', 'Power Query', 'SQL', 'Excel'],
        about:`desenvolvimento de relatórios estratégicos (power bi)
        \ngestão e manutenção de relatórios (power bi)
        \nadministração de acessos/funções dentro de sistemas corporativos.
        \nsuporte Jira service desk (ajustes em workflows, criação de projetos, criação de usuários, automatização de processos, entre outros...)
        \ndesenvolvimento web
        \ncriação de consultas em Sql
        \nmigração de dados entre sistemas
        \nmapeamento de processos e aplicação de melhorias`
    }]
} */]