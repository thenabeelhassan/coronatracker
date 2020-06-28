import React, { useEffect, useState} from 'react'

export const Afghanistan = () => {

    let Data = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...', flag: '...'}
    const [Summary, setSummary] = useState({Data})

    useEffect( () => {


        async function fetchData() {

            const api = await fetch('https://corona.lmao.ninja/v2/countries')

            const json = await api.json()

            const data = json[0]

            setSummary(data)
        }

        fetchData();
    })


    return (
        <section
            id='afgSummary'
        >
            <section
                className='flag col-6'
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
                    <i class="fa fa-history"></i>
                    Last 30 Days
                </button>
            </section>

            <section
                className='details col-6'
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

