import React from 'react'

import { Afghanistan } from "./countries/A/Afghanistan/History";
import { Albania } from "./countries/A/Albania/History";
import { Algeria } from "./countries/A/Algeria/History";
import { Andorra } from "./countries/A/Andorra/History";
import { Angola } from "./countries/A/Angola/History";
import { AntiguaAndBarbuda } from "./countries/A/AntiguaAndBarbuda/History";
import { Argentina } from "./countries/A/Argentina/History";
import { Armenia } from "./countries/A/Armenia/History";
import { Australia } from "./countries/A/Australia/History";
import { Austria } from "./countries/A/Austria/History";
import { Azerbaijan } from "./countries/A/Azerbaijan/History";


export const History = () => {
    return (
        <section
            id='history'
        >
            <section>
                <button
                    id='historyBtn'
                    onClick = { () => {
                        document.getElementById('history').style.display = 'none'
                        document.getElementById('historyBtn').style.display = 'none'
                        }
                    }
                >
                    Close
                </button>
            </section>
            <Afghanistan />
            <Albania />
            <Algeria />
            <Andorra />
            <Angola />
            <AntiguaAndBarbuda />
            <Argentina />
            <Armenia />
            <Australia />
            <Austria />
            <Azerbaijan />
        </section>
    )
}
