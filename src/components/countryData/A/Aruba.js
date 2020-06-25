import React, { useEffect, useState} from 'react'

export const Aruba = () => {

    let Data = {active: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Todo, setTodo] = useState({Data})

    useEffect( () => {


        async function fetchData() {

            const Data = await fetch('https://corona.lmao.ninja/v2/countries')

            const DataJSON = await Data.json()

            const myData = DataJSON[9]

            setTodo(myData)
        }

        fetchData();


    })


    return (
        <tr>
            <td>
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
