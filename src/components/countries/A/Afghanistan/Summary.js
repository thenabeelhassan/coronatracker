import React, { useEffect, useState} from 'react'

export const Afghanistan = () => {

    let Data = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...', flag: '...'}
    const [Afghan, setAfghan] = useState({Data})

    useEffect( () => {


        async function fetchData() {

            const api = await fetch('https://corona.lmao.ninja/v2/countries')

            const json = await api.json()

            const data = json[0]

            setAfghan(data)
        }

        fetchData();
    })

    console.log('Afghan: ', Afghan)

    return (
        <section
            id='afgSummary'
        >
            <section
                className='flag col-lg-6 col-sm-12'
            >
                <img src='https://disease.sh/assets/img/flags/af.png' alt={Afghan.country} />
                <h3
                    className='col'
                >
                    {Afghan.country}
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
                            className='AfghanLabel'
                        >
                            <b> Infected : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.cases}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Infected Today : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.todayCases}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Deaths : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.deaths}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Deaths Today : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.todayDeaths}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Recovered : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.Recovered}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Recovered Today : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.todayRecovered}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Active : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.active}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Infected Critical : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.critical}
                        </span>
                    </li>
                    <li>
                        <span
                            className='AfghanLabel'
                        >
                            <b> Tests : </b>
                        </span>
                        <span
                            className='AfghanValue'
                        >
                            {Afghan.tests}
                        </span>
                    </li>
                </ul>
            </section>
            
        </section>
    )
}

