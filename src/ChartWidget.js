import React from 'react'
import Chart from './Chart'
import "./ChartWidget.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function ChartWidget() {
    return (
        <div className="chartWidget">
            <div className="application_header">
                    <h5 className="header">Total Applications</h5>
                </div>
            <div className="chartExecution">
                <Chart/>
            </div>
        </div>
    )
}

export default ChartWidget
