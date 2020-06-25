import React from 'react'

export const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>
                    Country
                </th>
                <th>
                    Infected
                </th>
                <th>
                    Deaths
                </th>
                <th
                    className='tabTable'
                >
                    Recovered
                </th>
                <th
                    className='fullTable'
                >
                    Tested
                </th>
                <th
                    className='fullTable'
                >
                    Active
                </th>
                <th
                    className='fullTable'
                >
                    Critical
                </th>
            </tr>
        </thead>
    )
}
