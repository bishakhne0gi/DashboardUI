import React from 'react'
import "./RightSection.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
function RightSection() {
    return (
        <div className="rightSection">
            <div className="rightSection_header">
                <NotificationsIcon className="notification" fontSize="small"/>
                <h4 className="profile_name">Bishakh Neogi</h4>
                <Avatar  sx={{ width: 20, height: 20}, { bgcolor: '#de606b'  }} className="profile_pic">B</Avatar>
                <KeyboardArrowDownIcon className="notification" fontSize="small"/>
            </div>
            <div className="right_widget">
                <div className="row1_widget1">
                    <button className="btn3">+ Add</button>
                    <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search for application here" type="text" />
                </div>
                </div>
                <div className="row2_widget1">
                    <div className="contact_header">
                        <h4 className="greet">Hello, Bishakh Neogi,</h4>
                        <h4 className="msg">You have 8 new Applications today!</h4>
                    </div>
                    <img src="https://image.freepik.com/free-vector/man-look-graphic-chart-business-analytics-concept-big-data-processing-icon_39422-761.jpg" alt="" className="contact_pic"/>
                    
                </div>
                <div className="row3_widget1">
                    <div className="participants_list">
                        <h4 className="participation_header">New Applicants</h4>
                    </div>

                </div>
                <div className="applications">
                    <AccountCircleIcon className="account_dp" fontSize="large"/>
                    <div className="details">
                        <h4 className="applicants_name">Elizabeth Hurton</h4>
                        <h5 className="applied_for">FrontEnd Designer</h5>
                    </div>
                    <ChatIcon className="application_chat" fontSize="large"/>
                    <PhoneInTalkIcon className="application_call" fontSize="large"/>
                </div>
                <div className="applications">
                    <AccountCircleIcon className="account_dp" fontSize="large"/>
                    <div className="details">
                        <h4 className="applicants_name">Danny Watson</h4>
                        <h5 className="applied_for">IOS developer</h5>
                    </div>
                    <ChatIcon className="application_chat" fontSize="large"/>
                    <PhoneInTalkIcon className="application_call" fontSize="large"/>
                </div>
                <div className="applications">
                    <AccountCircleIcon className="account_dp" fontSize="large"/>
                    <div className="details">
                        <h4 className="applicants_name">Reha Scarlett</h4>
                        <h5 className="applied_for">IOS developer</h5>
                    </div>
                    <ChatIcon className="application_chat" fontSize="large"/>
                    <PhoneInTalkIcon className="application_call" fontSize="large"/>
                </div>
                <div className="applications">
                    <AccountCircleIcon className="account_dp" fontSize="large"/>
                    <div className="details">
                        <h4 className="applicants_name">Rossie Metts</h4>
                        <h5 className="applied_for">IOS developer</h5>
                    </div>
                    <ChatIcon className="application_chat" fontSize="large"/>
                    <PhoneInTalkIcon className="application_call" fontSize="large"/>
                </div>
                <div className="applications">
                    <AccountCircleIcon className="account_dp" fontSize="large"/>
                    <div className="details">
                        <h4 className="applicants_name">James Scott</h4>
                        <h5 className="applied_for">Nodejs developer</h5>
                    </div>
                    <ChatIcon className="application_chat" fontSize="large"/>
                    <PhoneInTalkIcon className="application_call" fontSize="large"/>
                </div>
                <div className="applications">
                    <AccountCircleIcon className="account_dp" fontSize="large"/>
                    <div className="details">
                        <h4 className="applicants_name">Jamie Laureson</h4>
                        <h5 className="applied_for">Marketing Manager</h5>
                    </div>
                    <ChatIcon className="application_chat" fontSize="large"/>
                    <PhoneInTalkIcon className="application_call" fontSize="large"/>
                </div>
            </div>

        </div>
    )
}

export default RightSection
