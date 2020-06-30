import React, { useEffect, useState} from 'react'

import { Details } from "../components/Details";

export const Status = () => {

    let globe = {active: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Data, setData] = useState({globe})

    useEffect( () => {


        async function fetchData() {
            const api = await fetch('https://corona.lmao.ninja/v2/all')

            const json = await api.json()

            setData(json)
        }

        fetchData();


    })

    
    return (
        <section
            id='bar'
        >
            <table
                id='status'>
                <thead>
                    <tr>
                        <th
                            colSpan='4'
                            className='col-12 text-center'
                        >
                            <h3>
                                World Status
                            </h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Total Cases:
                        </td>
                        <td>
                            Active Cases:
                        </td>
                        <td>
                            Recovered:
                        </td>
                        <td>
                            Deaths:
                        </td>
                    </tr>
                    <tr>
                        <td
                            className='red'
                        >
                            {Data.cases}
                        </td>
                        <td
                            className='red'
                        >
                            {Data.active}
                        </td>
                        <td
                            className='red'
                        >
                            {Data.recovered}
                        </td>
                        <td
                            className='red'
                        >
                            {Data.deaths}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Details />
        </section>
    )
}
