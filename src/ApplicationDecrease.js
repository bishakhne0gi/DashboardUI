import React from 'react'
import "./ApplicationDecrease.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { color } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function ApplicationDecrease() {
    const percentage = 40;
    return (
        <div className="applicationIncrease">
        <div className="application_header">
                <h5 className="header">Total Applications</h5>
            </div>
            <div className="application_number">
                <h4 className="number">1501</h4>
            </div>
            <div className="decrease_insight">
                <ArrowDownwardIcon className="application_percentageIncrease" fontSize="small"/>
                <h6 className="percentageNumber">-04%</h6>
            </div>
            <MoreHorizIcon className="application_dots"/>
            <div className="application_progressbar">
                <div style={{ width: 50, height: 50}}>
                    <CircularProgressbar value={40} text={`${percentage}%`}
                        styles={buildStyles({
                        textColor: "#cbccd0",
                        pathColor: "#de606b",
                    })} className="circular_progress"/>
                </div>

            </div>
            
    </div>
    )
}

export default ApplicationDecrease
