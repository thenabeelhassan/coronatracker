import React from 'react'

import { StatsBar } from '../components/statsBar'
import { Info } from '../components/info'
import { CountryData } from '../components/countryData'
import { CountryDetails } from '../components/countryDetails'

export const Body = () => {
    return (
        <section>
            <StatsBar />
            <Info />
            <CountryData />
            <CountryDetails />
        </section>
    )
}
