import React, { useEffect, useState} from 'react'

export const Anguilla = () => {

    let Anguilla = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...', flag: '...'}
    const [Summary, setSummary] = useState({Anguilla})

    useEffect( () => {


        async function fetchData() {

            const url = await fetch('https://corona.lmao.ninja/v2/countries/Anguilla')

            const res = await url.json()

            setSummary(res)
        }

        fetchData();
    })


    return (
        <section
            id='anuSummary'
        >
            <section
                className='flag col-lg-6 col-sm-12'
            >
                <img src='https://disease.sh/assets/img/flags/ai.png' alt={Summary.country} />
                <h3
                    className='col'
                >
                    {Summary.country}
                </h3>
            </section>

            <section
                className='details col-lg-6 col-sm-12'
            >
                <ul>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Infected : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.cases}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Infected Today : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.todayCases}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Deaths : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.deaths}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Deaths Today : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.todayDeaths}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Recovered : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.Recovered}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Recovered Today : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.todayRecovered}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Active : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.active}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Infected Critical : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.critical}
                        </span>
                    </li>
                    <li>
                        <span
                            className='summaryLabel'
                        >
                            <b> Tests : </b>
                        </span>
                        <span
                            className='summaryValue'
                        >
                            {Summary.tests}
                        </span>
                    </li>
                </ul>
            </section>
            
        </section>
    )
}

