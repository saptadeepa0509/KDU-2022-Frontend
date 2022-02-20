import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react'
import "./SideMenu.css";

interface Iprops {
    text: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

function SideMenu({ text, Icon }: Iprops) {
    return (
        <div className="sidebar-menu">
            <Icon />
            <h2>{text}</h2>
        </div>

    )
}

export default SideMenu