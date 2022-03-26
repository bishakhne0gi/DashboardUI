import React from 'react'
import "./Shortlisted.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { color } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Shortlisted() {
    const percentage = 60;
    return (
        <div className="applicationIncrease">
            <div className="application_header">
                    <h5 className="header">Shortlisted Candidates</h5>
                </div>
                <div className="application_number">
                    <h4 className="number">4658</h4>
                </div>
                <div className="shortlisted_insight">
                    <ArrowUpwardIcon className="shortlisted_percentageIncrease" fontSize="small"/>
                    <h6 className="shortlisted_percentageNumber">+06%</h6>
                </div>
                <MoreHorizIcon className="application_dots"/>
                <div className="application_progressbar">
                    <div style={{ width: 50, height: 50}}>
                        <CircularProgressbar value={60} text={`${percentage}%`}
                            styles={buildStyles({
                            textColor: "#cbccd0",
                            pathColor: "#27d215",
                        })} className="circular_progress"/>
                    </div>

                </div>
                
        </div>
    )
}

export default Shortlisted
