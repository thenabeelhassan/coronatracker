import React from 'react'

import { Status } from '../components/Status'
import { Info } from '../components/Info'
import { Overview } from '../components/Overview'
import { Summary } from '../components/Summary'
import { History } from "../components/History";

export const Body = () => {
    return (
        <section>
            <Status />
            <Info />
            <Overview />
            <Summary />
            <History />
        </section>
    )
}
