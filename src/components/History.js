import React from 'react'

// 
import { Afghanistan } from "./countries/A/Afghanistan/History";
import { Albania } from "./countries/A/Albania/History";


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
        </section>
    )
}
