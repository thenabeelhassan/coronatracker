import React from 'react'

export const Header = () => {
    return (
        <section
            id='header'
        >
            <h1
                className='text-center'
                onClick = { () => {
                    document.getElementById('overview').style.display = 'none'
                    document.getElementById('summary').style.display = 'none'
                    document.getElementById('history').style.display = 'none'
                    document.getElementById('info').style.display = 'block'
                    }
                }
            >
                Corona Virus
            </h1>
        </section>
    )
}
