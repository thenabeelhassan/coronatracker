import React, { useEffect, useState} from 'react'

export const Angola = () => {

    let Angola = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...', flag: '...'}
    const [Summary, setSummary] = useState({Angola})

    useEffect( () => {


        async function fetchData() {

            const api = await fetch('https://corona.lmao.ninja/v2/countries/Angola')

            const json = await api.json()

            setSummary(json)
        }

        fetchData();
    })


    return (
        <section
            id='angSummary'
        >
            <section
                className='flag col-lg-6 col-sm-12'
            >
                <img src='https://disease.sh/assets/img/flags/ao.png' alt={Summary.country} />
                <h3
                    className='col'
                >
                    {Summary.country}
                </h3>
                <button
                    className='historyButton'
                    onClick = { () => {
                        document.getElementById('angHist').style.display = 'block'
                        document.getElementById('history').style.display = 'block'
                        document.getElementById('historyBtn').style.display = 'block'
                        }
                    }
                >
                    <i className="fa fa-history"></i>
                    Last 30 Days
                </button>
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

