import React, { useEffect, useState} from 'react'

export const Anguilla = () => {

    let Anguilla = {active: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Overview, setOverview] = useState({Anguilla})

    useEffect( () => {


        async function fetchData() {

            const api = await fetch('https://corona.lmao.ninja/v2/countries/Anguilla')

            const json = await api.json()

            setOverview(json)
        }

        fetchData();


    })


    return (
        <tr>
            <td
                className='detailsBtn'
                onClick = { () => {
                        document.getElementById('overview').style.display = 'none'
                        document.getElementById('anuSummary').style.display = 'block'
                        document.getElementById('summary').style.display = 'block'
                        document.getElementById('history').style.display = 'block'
                    }
                }
            >
                {Overview.country}
            </td>
            <td>
                {Overview.cases}
            </td>
            <td>
                {Overview.deaths}
            </td>
            <td
                className='tabTable'
            >
                {Overview.recovered}
            </td>
            <td
                className='fullTable'
            >
                {Overview.tests}
            </td>
            <td
                className='fullTable'
            >
                {Overview.active}
            </td>
            <td
                className='fullTable'
            >
                {Overview.critical}
            </td>
        </tr>    
    )
}
