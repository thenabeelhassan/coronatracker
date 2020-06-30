import React from 'react'

import { Afghanistan } from "./countries/A/Afghanistan/Summary";
import { Albania } from "./countries/A/Albania/Summary";

export const Summary = () => {
    return (
        <section
            id='summary'
            className='col-12'
        >
            <Afghanistan />
            <Albania />
        </section>
    )
}
