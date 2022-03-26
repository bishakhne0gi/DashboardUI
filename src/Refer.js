import React from 'react'
import "./Refer.css"
import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Refer() {
    return (
        <div className="refer">
            <div className="refer_row1">
                <div className="r1_left">
                    <h5 className="header">Referal And Campaign Stats</h5>
                </div>
                <div className="r1_right">
                    <SendIcon className="send" fontSize="medium"/>
                    <h5 className="header_2">40 Campaigns sent in total</h5>
                 </div>
            </div>
            <div className="refer_row2">
                <div className="reach">
                    <h6 className="header_portion">Users Reached</h6>
                    <div className="application_insight">
                        <ArrowUpwardIcon className="application_percentageIncrease" className="colour" fontSize="small"/>
                        <h6 className="percentageNumber" className="colour">+3.59%</h6>
                    </div>
                    <div className="application_number">
                        <h4 className="number">7956</h4>
                     </div>
                </div>
                <div className="reach">
                    <h6 className="header_portion">Referals</h6>
                    <div className="application_insight">
                        <ArrowUpwardIcon className="application_percentageIncrease" className="colour" fontSize="small"/>
                        <h6 className="percentageNumber" className="colour">+9.01%</h6>
                    </div>
                    <div className="application_number">
                        <h4 className="number">0662</h4>
                     </div>
                </div>
                <div className="reach">
                    <h6 className="header_portion">Shares</h6>
                    <div className="application_insight">
                        <ArrowUpwardIcon className="application_percentageIncrease" className="colour" fontSize="small"/>
                        <h6 className="percentageNumber" className="colour">+39.18%</h6>
                    </div>
                    <div className="application_number">
                        <h4 className="number">1478</h4>
                     </div>
                </div>
                <div className="reach reach_alt">
                    <h6 className="header_portion">Applications</h6>
                    <div className="application_insight">
                        <ArrowUpwardIcon className="application_percentageIncrease" className="colour" fontSize="small"/>
                        <h6 className="percentageNumber" className="colour">+12.00%</h6>
                    </div>
                    <div className="application_number">
                        <h4 className="number">0564</h4>
                     </div>
                </div>
            </div>
            <div className="refer_row3">
                <button className="btn1">Start a new campaign now</button>
                <button className="btn2">Pause all running campaigns</button>
            </div>
        </div>
    )
}

export default Refer
