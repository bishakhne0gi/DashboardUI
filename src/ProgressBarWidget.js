import React from 'react'
import ProgressBar from './ProgressBar'
import "./ProgressBarWidget.css"
function ProgressBarWidget() {
    return (
        <div className="progressBarWidget">
             <div className="application_header">
                    <h5 className="header">Total Applications</h5>
            </div>
            <div className="progressBar_execution">
                <div className="progressBar_1">
                    <h5 className="progressBar_name p1" >• Applications</h5>
                    <ProgressBar done="40"/>
                </div>
                <div className="progressBar_1">
                    <h5 className="progressBar_name p2" >• Selected</h5>
                    <ProgressBar done="80"/>
                </div>
                <div className="progressBar_1">
                    <h5 className="progressBar_name p3" >• Shortlisted</h5>
                    <ProgressBar done="30"/>
                </div>
                <div className="progressBar_1">
                    <h5 className="progressBar_name p4" >• On hold</h5>
                    <ProgressBar done="20"/>
                </div>
                <div className="progressBar_1">
                    <h5 className="progressBar_name p5" >• Denial</h5>
                    <ProgressBar done="90"/>
                </div>
            </div>
            
        </div>
    )
}

export default ProgressBarWidget
