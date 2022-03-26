import { borderColor } from '@mui/system'
import React from 'react'
import {Line, } from 'react-chartjs-2'
function Chart() {
    const data={
        labels:
        [
            'Jan',
            'Feb',
            'March', 
            'Apr',
            'May',
            'Jun', 
            'Jul'
        ],
        datasets: [
            {
                label: '2020',
                data:[30,60,40,60,80,60,60],
                borderColor: ['#fefefe'],
                backgroundColor: ['#fefefe'],
                pointBackgroundColor: ['#fefefe'],
                pointBorderColor: ['#fefefe'],
            },
            {
                label: '2019',
                data:[50,40,60,60,50,75,70],
                borderColor: ['#de606b'],
                backgroundColor: ['#de606b'],
                pointBackgroundColor: ['#de606b'],
                pointBorderColor: ['#de606b'], 
            }
        ]
    }
    const options = {
        title:{
            display: true,
            text: 'Line Chart',
        },
        scales:
        {
            yA:[
                {
                    ticks:
                    {
                        min: 0,
                        max:100,
                        stepSize: 0
                    }
                }
            ]
        }
    }
    return (
           <Line data= {data} options={options}/>     
    )
}

export default Chart
