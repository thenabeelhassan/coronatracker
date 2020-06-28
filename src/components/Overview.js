import React from 'react'

import { TableHead } from './tableHead'

import { Afghanistan } from "./countries/A/Afghanistan/Overview";
import { Albania } from './countryData/A/Albania'
import { Algeria } from './countryData/A/Algeria'
import { Andorra } from './countryData/A/Andorra'
import { Angola } from './countryData/A/Angola'
import { Anguilla } from './countryData/A/Anguilla'
import { AntiguaandBarbuda } from './countryData/A/AntiguaandBarbuda'
import { Argentina } from './countryData/A/Argentina'
import { Armenia } from './countryData/A/Armenia'
import { Aruba } from './countryData/A/Aruba'
import { Australia } from './countryData/A/Australia'
import { Austria } from './countryData/A/Austria'
import { Azerbaijan } from './countryData/A/Azerbaijan'

export const Overview = () => {
    return (
        <section
            id='overview'
            className='col'
        >
            <table
                id='overviewTable'
                className='col-11'
            >
                <TableHead />
                <tbody>
                    <Afghanistan />
                    <Albania />
                    <Algeria />
                    <Andorra />
                    <Angola />
                    <Anguilla />
                    <AntiguaandBarbuda />
                    <Argentina />
                    <Armenia />
                    <Aruba />
                    <Australia />
                    <Austria />
                    <Azerbaijan />
                </tbody>
            </table>
        </section>
    )
}
