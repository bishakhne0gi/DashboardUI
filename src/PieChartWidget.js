import React from 'react'
import PieChart from './PieChart'
import "./PieChartWidget.css"
function PieChartWidget() {
    return (
        <div className="pieChartWidget">
             <div className="application_header">
                    <h5 className="header">Open Positions by department</h5>
                </div>
            <div className="pieChartWidget_execution">
                <PieChart/>
            </div>
            
        </div>
    )
}

export default PieChartWidget
