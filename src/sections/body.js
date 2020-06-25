import React from 'react'

import { StatsBar } from '../components/statsBar'
import { Info } from '../components/info'
import { CountryData } from '../components/countryData'

export const Body = () => {
    return (
        <section>
            <StatsBar />
            <Info />
            <CountryData />
        </section>
    )
}
