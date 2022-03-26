import React from 'react'
import "./MiddleSection.css"

import ApplicationIncrease from './ApplicationIncrease';
import Shortlisted from './Shortlisted';
import ApplicationDecrease from './ApplicationDecrease';
import Chart from './Chart';
import ChartWidget from './ChartWidget';
import ProgressBarWidget from './ProgressBarWidget';
import Refer from './Refer';
import PieChartWidget from './PieChartWidget';
function MiddleSection() {
    return (
        <div className="middleSection">
            <div className="middleSection_header">
                <h3 className="head_1">Dashboard</h3>
                <h4 className="head_2">
                    Monday,
                    <h4 className="date blue">02 July 2020</h4>
                </h4>
            </div>
            <div className="widgets">
                <div className="widget-1">
                    <ApplicationIncrease/>
                </div>
                <div className="widget-2">
                    <Shortlisted/>
                </div>
                <div className="widget-3">
                    <ApplicationDecrease/>
                </div>
            </div>
            <div className="widgets_row2">
                <div className="widget_row2_number1">
                    <ChartWidget/>
                </div>
                <div className="widget_row2_number2">
                    <ProgressBarWidget/>
                </div>
            </div>
            <div className="widgets_row3">
                <div className="widget_row3_number1">
                    <Refer/>
                </div>
                <div className="widget_row3_number2">
                    <PieChartWidget/>
                </div>
            </div>
            

        </div>
    )
}

export default MiddleSection
