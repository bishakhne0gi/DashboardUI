import { borderColor } from '@mui/system'
import React from 'react'
import {Doughnut} from 'react-chartjs-2'
function Chart() {
    const data1={
        labels:
        [
            'Selected',
            'Shortlisted',
            'Denial'
        ],
        datasets: [
            {
                label: 'Points',
                backgroundColor: ['#3df75c','#fd5053','#5b4a9f'],
                data: [25,45,40]
            }
        ]
     
}
    const options1 = {
        animation:{
            animationScale: true
        }
    }
    return (
           <Doughnut data= {data1} options={options1}/>     
    )
}

export default Chart
