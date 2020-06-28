import React, { useEffect, useState} from 'react'

export const AfghanHistory = () => {
    
    let hist = Array.from({cases : 'Waiting ...'})
    const [info, setinfo] = useState(hist)

    useEffect( () => {

        async function fetchData() {

            const Data = await fetch('https://disease.sh/v2/historical/Afghanistan')

            const DataJSON = await Data.json()

            const timeln = DataJSON.timeline.cases

            setinfo(timeln)
        }
        fetchData();

    })

    // console.log('info :', info)

    let casesHistory = info

    let casesHist1 = []
    let casesHist2 = []
    
    for (let [key, value] of Object.entries(casesHistory)) {
        casesHist1.push(`${key}`);
    }
    for (let [key, value] of Object.entries(casesHistory)) {
        casesHist2.push(`${value}`);
    }


    return (
        <section>
            History:
            <table>
                <tbody>
                    <tr>
                        <td>
                            { casesHist1[29] }
                        </td>
                        <td>
                            { casesHist2[29] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[28] }
                        </td>
                        <td>
                            { casesHist2[28] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[27] }
                        </td>
                        <td>
                            { casesHist2[27] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[26] }
                        </td>
                        <td>
                            { casesHist2[26] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[25] }
                        </td>
                        <td>
                            { casesHist2[25] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[24] }
                        </td>
                        <td>
                            { casesHist2[24] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[23] }
                        </td>
                        <td>
                            { casesHist2[23] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[22] }
                        </td>
                        <td>
                            { casesHist2[22] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[21] }
                        </td>
                        <td>
                            { casesHist2[21] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[20] }
                        </td>
                        <td>
                            { casesHist2[20] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[19] }
                        </td>
                        <td>
                            { casesHist2[19] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[18] }
                        </td>
                        <td>
                            { casesHist2[18] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[17] }
                        </td>
                        <td>
                            { casesHist2[17] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[16] }
                        </td>
                        <td>
                            { casesHist2[16] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[15] }
                        </td>
                        <td>
                            { casesHist2[15] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[14] }
                        </td>
                        <td>
                            { casesHist2[14] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[13] }
                        </td>
                        <td>
                            { casesHist2[13] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[12] }
                        </td>
                        <td>
                            { casesHist2[12] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[11] }
                        </td>
                        <td>
                            { casesHist2[11] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[10] }
                        </td>
                        <td>
                            { casesHist2[10] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[9] }
                        </td>
                        <td>
                            { casesHist2[9] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[8] }
                        </td>
                        <td>
                            { casesHist2[8] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[7] }
                        </td>
                        <td>
                            { casesHist2[7] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[6] }
                        </td>
                        <td>
                            { casesHist2[6] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[5] }
                        </td>
                        <td>
                            { casesHist2[5] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[4] }
                        </td>
                        <td>
                            { casesHist2[4] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[3] }
                        </td>
                        <td>
                            { casesHist2[3] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[2] }
                        </td>
                        <td>
                            { casesHist2[2] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[1] }
                        </td>
                        <td>
                            { casesHist2[1] }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { casesHist1[0] }
                        </td>
                        <td>
                            { casesHist2[0] }
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}


