import React, { useEffect, useState} from 'react'

export const Angola = () => {

    let Angola = {active: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Todo, setTodo] = useState({Angola})

    useEffect( () => {


        async function fetchData() {

            const api = await fetch('https://corona.lmao.ninja/v2/countries/Angola')

            const json = await api.json()

            setTodo(json)
        }

        fetchData();


    })


    return (
        <tr>
            <td
                className='detailsBtn'
                onClick = { () => {
                        document.getElementById('overview').style.display = 'none'
                        document.getElementById('angSummary').style.display = 'block'
                        document.getElementById('summary').style.display = 'block'
                        document.getElementById('history').style.display = 'block'
                    }
                }
            >
                {Todo.country}
            </td>
            <td>
                {Todo.cases}
            </td>
            <td>
                {Todo.deaths}
            </td>
            <td
                className='tabTable'
            >
                {Todo.recovered}
            </td>
            <td
                className='fullTable'
            >
                {Todo.tests}
            </td>
            <td
                className='fullTable'
            >
                {Todo.active}
            </td>
            <td
                className='fullTable'
            >
                {Todo.critical}
            </td>
        </tr>    
    )
}
