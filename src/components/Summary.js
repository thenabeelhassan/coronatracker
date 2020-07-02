import React from 'react'

import { Afghanistan } from "./countries/A/Afghanistan/Summary";
import { Albania } from "./countries/A/Albania/Summary";
import { Algeria } from "./countries/A/Algeria/Summary";
import { Andorra } from "./countries/A/Andorra/Summary";
import { Angola } from "./countries/A/Angola/Summary";
import { Anguilla } from "./countries/A/Anguilla/Summary";
import { AntiguaAndBarbuda } from "./countries/A/AntiguaAndBarbuda/Summary";
import { Argentina } from "./countries/A/Argentina/Summary";
import { Armenia } from "./countries/A/Armenia/Summary";
import { Aruba } from "./countries/A/Aruba/Summary";
import { Australia } from "./countries/A/Australia/Summary";
import { Austria } from "./countries/A/Austria/Summary";
import { Azerbaijan } from "./countries/A/Azerbaijan/Summary";

export const Summary = () => {
    return (
        <section
            id='summary'
            className='col-12'
        >
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
        </section>
    )
}
