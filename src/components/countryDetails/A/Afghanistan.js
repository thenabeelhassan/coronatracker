import React, { useEffect, useState} from 'react'

import { AfghanHistory } from '../../countryHistory/A/Afghanistan'

export const Afghanistan = () => {

    let Data = {country: 'Waiting ...', cases: 'Waiting ...', deaths: 'Waiting ...', flag: '...'}
    const [Todo, setTodo] = useState({Data})

    useEffect( () => {


        async function fetchData() {

            const Data = await fetch('https://corona.lmao.ninja/v2/countries')

            const DataJSON = await Data.json()

            const myData = DataJSON[0]

            setTodo(myData)
        }

        fetchData();
    })


    return (
        <section
            id='afgDetails'
        >
            <section
                className='countryDetail'
            >
                <section
                    className='countryName col-lg-5 col-sm-12 text-center'
                >
                    <img src='https://disease.sh/assets/img/flags/af.png' alt={Todo.country} />
                    <section>
                        <h3>
                            {Todo.country}
                        </h3>
                    </section>
                </section>

                <section
                    className='countryInfo col-lg-7 col-sm-12'
                >
                    <table
                        className='countryDetails'
                    >
                        <tbody>
                            <tr>    
                                <td>
                                    <b>
                                        Infected :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.cases} 
                                </td>
                            </tr>
                            <tr>    
                                <td>
                                    <b>
                                        Infected Today :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.todayCases} 
                                </td>    
                            </tr>
                            <tr>    
                                <td>
                                    <b>
                                        Deaths :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.deaths} 
                                </td>        
                            </tr>
                            <tr>    
                                <td>
                                    <b>
                                        Today Deaths :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.todayDeaths} 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Recovered :
                                    </b> 
                                </td>
                                <td> 
                                    {Todo.recovered} 
                                </td>     
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Today Recovered :
                                    </b> 
                                </td>
                                <td> 
                                    {Todo.todayRecovered} 
                                </td>     
                            </tr>
                            <tr>    
                                <td>
                                    <b>
                                        Active :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.active} 
                                </td>        
                            </tr>
                            <tr>    
                                <td>
                                    <b>
                                        Critical :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.critical} 
                                </td>      
                            </tr>
                            <tr>    
                                <td>
                                    <b>
                                        Tests :
                                    </b>
                                </td>
                                <td> 
                                    {Todo.tests} 
                                </td>         
                            </tr>
                        </tbody>
                    </table>
                </section>
                </section>
            <section>
                <AfghanHistory />
            </section>
        </section>
    )
}



