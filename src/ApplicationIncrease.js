import React from 'react'
import "./ApplicationIncrease.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { color } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function ApplicationIncrease() {
    const percentage = 70;
    return (
        <div className="applicationIncrease">
            <div className="application_header">
                    <h5 className="header">Total Applications</h5>
                </div>
                <div className="application_number">
                    <h4 className="number">7956</h4>
                </div>
                <div className="application_insight">
                    <ArrowUpwardIcon className="application_percentageIncrease" fontSize="small"/>
                    <h6 className="percentageNumber">+3.59%</h6>
                </div>
                <MoreHorizIcon className="application_dots"/>
                <div className="application_progressbar">
                    <div style={{ width: 50, height: 50}}>
                        <CircularProgressbar value={70} text={`${percentage}%`}
                            styles={buildStyles({
                            textColor: "#cbccd0",
                            pathColor: "#8671c6",
                        })} className="circular_progress"/>
                    </div>

                </div>
                
        </div>
    )
}

export default ApplicationIncrease
