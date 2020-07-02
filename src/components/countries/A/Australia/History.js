import React, { useEffect, useState} from 'react'

export const Australia = () => {
    
    let data1 = {History : 'Waiting ...'}
    let data2 = {History : 'Waiting ...'}
    let data3 = {History : 'Waiting ...'}
    const [info1, setinfo1] = useState(data1)
    const [info2, setinfo2] = useState(data2)
    const [info3, setinfo3] = useState(data3)

    useEffect( () => {

        async function fetchData() {

            const url = await fetch('https://corona.lmao.ninja/v2/historical/Australia')

            const res = await url.json()

            const history1 = res.timeline.cases
            const history2 = res.timeline.deaths
            const history3 = res.timeline.recovered

            setinfo1(history1)
            setinfo2(history2)
            setinfo3(history3)
        }
        fetchData();

    })

    let casesHistory = info1
    let deathsHistory = info2
    let recoveredHistory = info3

    let date = []
    let cases = []
    let deaths = []
    let recovered = []
    
    for (let [key] of Object.entries(casesHistory)) {
        date.push(`${key}`);
    }
    for (let [, value] of Object.entries(casesHistory)) {
        cases.push(`${value}`);
    }
    for (let [, value] of Object.entries(deathsHistory)) {
        deaths.push(`${value}`);
    }
    for (let [, value] of Object.entries(recoveredHistory)) {
        recovered.push(`${value}`);
    }


    return (
        <section
            id='ausHist'
        >
            <section
                className='historyTable'
            >
                <table
                    className='col-12'
                >
                    <thead>
                        <tr>
                            <th 
                                colSpan='4'
                                className='text-center'
                            >
                                Last 30 day History
                            </th>
                        </tr>
                        <tr>
                            <th>
                                DATES
                            </th>
                            <th>
                                CASES
                            </th>
                            <th>
                                DEATHS
                            </th>
                            <th>
                                RECOVERED
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                { date[29] }
                            </td>
                            <td>
                                { cases[29] }
                            </td>
                            <td>
                                { deaths[29] }
                            </td>
                            <td>
                                { recovered[29] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[28] }
                            </td>
                            <td>
                                { cases[28] }
                            </td>
                            <td>
                                { deaths[28] }
                            </td>
                            <td>
                                { recovered[28] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[27] }
                            </td>
                            <td>
                                { cases[27] }
                            </td>
                            <td>
                                { deaths[27] }
                            </td>
                            <td>
                                { recovered[27] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[26] }
                            </td>
                            <td>
                                { cases[26] }
                            </td>
                            <td>
                                { deaths[26] }
                            </td>
                            <td>
                                { recovered[26] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[25] }
                            </td>
                            <td>
                                { cases[25] }
                            </td>
                            <td>
                                { deaths[25] }
                            </td>
                            <td>
                                { recovered[25] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[24] }
                            </td>
                            <td>
                                { cases[24] }
                            </td>
                            <td>
                                { deaths[24] }
                            </td>
                            <td>
                                { recovered[24] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[23] }
                            </td>
                            <td>
                                { cases[23] }
                            </td>
                            <td>
                                { deaths[23] }
                            </td>
                            <td>
                                { recovered[23] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[22] }
                            </td>
                            <td>
                                { cases[22] }
                            </td>
                            <td>
                                { deaths[22] }
                            </td>
                            <td>
                                { recovered[22] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[21] }
                            </td>
                            <td>
                                { cases[21] }
                            </td>
                            <td>
                                { deaths[21] }
                            </td>
                            <td>
                                { recovered[21] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[20] }
                            </td>
                            <td>
                                { cases[20] }
                            </td>
                            <td>
                                { deaths[20] }
                            </td>
                            <td>
                                { recovered[20] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[19] }
                            </td>
                            <td>
                                { cases[19] }
                            </td>
                            <td>
                                { deaths[19] }
                            </td>
                            <td>
                                { recovered[19] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[18] }
                            </td>
                            <td>
                                { cases[18] }
                            </td>
                            <td>
                                { deaths[18] }
                            </td>
                            <td>
                                { recovered[18] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[17] }
                            </td>
                            <td>
                                { cases[17] }
                            </td>
                            <td>
                                { deaths[17] }
                            </td>
                            <td>
                                { recovered[17] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[16] }
                            </td>
                            <td>
                                { cases[16] }
                            </td>
                            <td>
                                { deaths[16] }
                            </td>
                            <td>
                                { recovered[16] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[15] }
                            </td>
                            <td>
                                { cases[15] }
                            </td>
                            <td>
                                { deaths[15] }
                            </td>
                            <td>
                                { recovered[15] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[14] }
                            </td>
                            <td>
                                { cases[14] }
                            </td>
                            <td>
                                { deaths[14] }
                            </td>
                            <td>
                                { recovered[14] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[13] }
                            </td>
                            <td>
                                { cases[13] }
                            </td>
                            <td>
                                { deaths[13] }
                            </td>
                            <td>
                                { recovered[13] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[12] }
                            </td>
                            <td>
                                { cases[12] }
                            </td>
                            <td>
                                { deaths[12] }
                            </td>
                            <td>
                                { recovered[12] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[11] }
                            </td>
                            <td>
                                { cases[11] }
                            </td>
                            <td>
                                { deaths[11] }
                            </td>
                            <td>
                                { recovered[11] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[10] }
                            </td>
                            <td>
                                { cases[10] }
                            </td>
                            <td>
                                { deaths[10] }
                            </td>
                            <td>
                                { recovered[10] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[9] }
                            </td>
                            <td>
                                { cases[9] }
                            </td>
                            <td>
                                { deaths[9] }
                            </td>
                            <td>
                                { recovered[9] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[8] }
                            </td>
                            <td>
                                { cases[8] }
                            </td>
                            <td>
                                { deaths[8] }
                            </td>
                            <td>
                                { recovered[8] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[7] }
                            </td>
                            <td>
                                { cases[7] }
                            </td>
                            <td>
                                { deaths[7] }
                            </td>
                            <td>
                                { recovered[7] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[6] }
                            </td>
                            <td>
                                { cases[6] }
                            </td>
                            <td>
                                { deaths[6] }
                            </td>
                            <td>
                                { recovered[6] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[5] }
                            </td>
                            <td>
                                { cases[5] }
                            </td>
                            <td>
                                { deaths[5] }
                            </td>
                            <td>
                                { recovered[5] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[4] }
                            </td>
                            <td>
                                { cases[4] }
                            </td>
                            <td>
                                { deaths[4] }
                            </td>
                            <td>
                                { recovered[4] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[3] }
                            </td>
                            <td>
                                { cases[3] }
                            </td>
                            <td>
                                { deaths[3] }
                            </td>
                            <td>
                                { recovered[3] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[2] }
                            </td>
                            <td>
                                { cases[2] }
                            </td>
                            <td>
                                { deaths[2] }
                            </td>
                            <td>
                                { recovered[2] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[1] }
                            </td>
                            <td>
                                { cases[1] }
                            </td>
                            <td>
                                { deaths[1] }
                            </td>
                            <td>
                                { recovered[1] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { date[0] }
                            </td>
                            <td>
                                { cases[0] }
                            </td>
                            <td>
                                { deaths[0] }
                            </td>
                            <td>
                                { recovered[0] }
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </section>
        </section>
    )
}


