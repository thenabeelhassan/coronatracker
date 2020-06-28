import React, { useEffect, useState} from 'react'

export const StatsBar = () => {

    let globeData = {active: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...'}
    const [Todo, setTodo] = useState({globeData})

    useEffect( () => {


        async function fetchData() {
            const globeData = await fetch('https://corona.lmao.ninja/v2/all')

            const globeDataJSON = await globeData.json()

            setTodo(globeDataJSON)
        }

        fetchData();


    })

    
    // console.log(Todo)

    return (
        <section
            id='worldStatus'
        >
            <table
                id='worldStatusBar'
                className='col-12'
            >
                <tbody>
                    <tr>
                        <td
                            rowSpan='2'
                        >
                            <span>
                                <b>
                                    World Status
                                </b>
                            </span>
                        </td>
                        <td>
                            Active Cases:
                        </td>
                        <td>
                            Total Infected:
                        </td>
                        <td>
                            Deaths:
                        </td>
                        <td
                            id='detailsBtn'
                            rowSpan='2'
                            onClick = { () => {
                                document.getElementById('info').style.display = 'none'
                                document.getElementById('countryData').style.display = 'block'
                                }
                            }
                        >
                            Stats
                        </td>
                    </tr>
                    <tr>
                        <td
                            className='red'
                        >
                            {Todo.active}
                        </td>
                        <td
                            className='red'
                        >
                            {Todo.cases}
                        </td>
                        <td
                            className='red'
                        >
                            {Todo.deaths}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
