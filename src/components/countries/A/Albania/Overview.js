import React, { useEffect, useState} from 'react'

export const Albania = () => {

    let Data = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Todo, setTodo] = useState({Data})

    useEffect( () => {


        async function fetchData() {

            const api = await fetch('https://corona.lmao.ninja/v2/countries')

            const json = await api.json()

            const myData = json[1]

            setTodo(myData)
        }

        fetchData();


    })


    return (
        <tr>
            <td
                className='detailsBtn'
                onClick = { () => {
                        document.getElementById('overview').style.display = 'none'
                        document.getElementById('albSummary').style.display = 'block'
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
