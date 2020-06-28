import React, { useEffect, useState} from 'react'

export const Afghan = () => {

    let Data = []
    const [Todo, setTodo] = useState(Data)

    useEffect( () => {


        async function fetchData() {

            const Data = await fetch('https://disease.sh/v2/historical/Afghanistan')

            const DataJSON = await Data.json()

            const timeLine = DataJSON.timeline.cases

            // console.log('json: ', timeLine)

            let timeline = Array.of(timeLine)

            // console.log('array: ', timeline)

            // let isTime = timeline.toString(0)

            // console.log(isTime)

            setTodo(timeline)

        }

        fetchData();
    })

    // console.log('Todo: ', Todo[0])


    return (
        <section>
            History:
            {/* {Todo} */}
        </section>
    )
}



