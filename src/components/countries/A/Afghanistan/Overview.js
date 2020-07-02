import React, { useEffect, useState} from 'react'

export const Afghanistan = () => {

    let Afghanistan = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Overview, setOverview] = useState({Afghanistan})

    useEffect( () => {


        async function fetchData() {

            const url = await fetch('https://corona.lmao.ninja/v2/countries/Afghanistan')

            const res = await url.json()

            setOverview(res)
        }

        fetchData();


    })


    return (
        <tr>
            <td
                className='detailsBtn'
                onClick = { () => {
                        document.getElementById('overview').style.display = 'none'
                        document.getElementById('afgSummary').style.display = 'block'
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
