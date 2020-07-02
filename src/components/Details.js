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
                        document.getElementById('overview').style.display = 'block'
                        document.getElementById('info').style.display = 'none'
                        document.getElementById('history').style.display = 'none'
                        document.getElementById('summary').style.display = 'none'
                        document.getElementById('historyBtn').style.display = 'none'
                        document.getElementById('afgSummary').style.display = 'none'
                        document.getElementById('albSummary').style.display = 'none'
                        document.getElementById('algSummary').style.display = 'none'
                        document.getElementById('andSummary').style.display = 'none'
                        document.getElementById('angSummary').style.display = 'none'
                        document.getElementById('anuSummary').style.display = 'none'
                        document.getElementById('aabSummary').style.display = 'none'
                        document.getElementById('argSummary').style.display = 'none'
                        document.getElementById('armSummary').style.display = 'none'
                        document.getElementById('aruSummary').style.display = 'none'
                        document.getElementById('ausSummary').style.display = 'none'
                        document.getElementById('autSummary').style.display = 'none'
                        document.getElementById('azeSummary').style.display = 'none'
                        document.getElementById('afgHist').style.display = 'none'
                        document.getElementById('albHist').style.display = 'none'
                        document.getElementById('algHist').style.display = 'none'
                        document.getElementById('andHist').style.display = 'none'
                        document.getElementById('angHist').style.display = 'none'
                        document.getElementById('aabHist').style.display = 'none'
                        document.getElementById('argHist').style.display = 'none'
                        document.getElementById('armHist').style.display = 'none'
                        document.getElementById('ausHist').style.display = 'none'
                        document.getElementById('autHist').style.display = 'none'
                        document.getElementById('azeHist').style.display = 'none'
                    }
                }
            >
                <i className="fa fa-globe"></i>
                Full Stats
            </button>
        </section>
    )
}
