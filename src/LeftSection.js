import React from 'react'
import "./LeftSection.css"
import AndroidIcon from '@mui/icons-material/Android';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
import SettingsIcon from '@mui/icons-material/Settings';
function LeftSection() {
    return (
        <div className="leftSection">
                <AndroidIcon className="leftSection_logo" fontSize="large"/>
                <div className="leftSection_menu">
                    <HomeIcon className="icon_menu"/>
                    <InsertChartIcon className="icon_menu"/>
                    <WorkIcon className="icon_menu"/>
                    <FolderIcon className="icon_menu"/>
                    <EventIcon className="icon_menu"/>
                    <GroupIcon className="icon_menu"/>
                    <CommentIcon className="icon_menu"/>
                    <IosShareIcon className="icon_menu"/>
                    <SettingsIcon className="icon_menu" className="last_icon"/>
                </div>

        </div>
    )
}

export default LeftSection ;
