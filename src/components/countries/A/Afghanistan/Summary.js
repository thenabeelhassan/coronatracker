import React, { useEffect, useState} from 'react'

export const Afghanistan = () => {

    let Afghanistan = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...', flag: '...'}
    const [Summary, setSummary] = useState({Afghanistan})

    useEffect( () => {


        async function fetchData() {

            const url = await fetch('https://corona.lmao.ninja/v2/countries/Afghanistan')

            const res = await url.json()

            setSummary(res)
        }

        fetchData();
    })

    return (
        <section
            id='afgSummary'
        >
            <section
                className='flag col-lg-6 col-sm-12'
            >
                <img src='https://disease.sh/assets/img/flags/af.png' alt={Summary.country} />
                <h3
                    className='col'
                >
                    {Summary.country}
                </h3>
                <button
                    className='historyButton'
                    onClick = { () => {
                        document.getElementById('afgHist').style.display = 'block'
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
                            className='SummaryLabel'
                        >
                            <b> Infected : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.cases}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Infected Today : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.todayCases}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Deaths : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.deaths}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Deaths Today : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.todayDeaths}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Recovered : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.Recovered}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Recovered Today : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.todayRecovered}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Active : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.active}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Infected Critical : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.critical}
                        </span>
                    </li>
                    <li>
                        <span
                            className='SummaryLabel'
                        >
                            <b> Tests : </b>
                        </span>
                        <span
                            className='SummaryValue'
                        >
                            {Summary.tests}
                        </span>
                    </li>
                </ul>
            </section>
            
        </section>
    )
}

