import React from 'react'

import { TableHead } from './tableHead'

import { Afghanistan } from "./countries/A/Afghanistan/Overview";
import { Albania } from './countries/A/Albania/Overview'
import { Algeria } from './countries/A/Algeria/Overview'
import { Andorra } from './countries/A/Andorra/Overview'
import { Angola } from './countries/A/Angola/Overview'
import { Anguilla } from './countries/A/Anguilla/Overview'
import { AntiguaAndBarbuda } from './countries/A/AntiguaAndBarbuda/Overview'
import { Argentina } from './countries/A/Argentina/Overview'
import { Armenia } from './countries/A/Armenia/Overview'
import { Aruba } from './countries/A/Aruba/Overview'
import { Australia } from './countries/A/Australia/Overview'
import { Austria } from './countries/A/Austria/Overview'
import { Azerbaijan } from './countries/A/Azerbaijan/Overview'

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
                    <AntiguaAndBarbuda />
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
