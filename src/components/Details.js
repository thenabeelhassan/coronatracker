import React from 'react'

export const Details = () => {
    return (
        <section
            className='col-12'
        >
            <button
                id='detail'
                onClick = {
                    () => {
                        document.getElementById('info').style.display = 'none'
                        document.getElementById('overview').style.display = 'block'
                        document.getElementById('history').style.display = 'none'
                        document.getElementById('summary').style.display = 'none'
                        document.getElementById('afgSummary').style.display = 'none'
                        document.getElementById('albSummary').style.display = 'none'
                    }
                }
            >
                <i className="fa fa-globe"></i>
                Full Stats
            </button>
        </section>
    )
}
