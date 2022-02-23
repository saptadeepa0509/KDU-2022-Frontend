import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";
import SideMenu from "./SideMenu";
import "./Sidebar.css";
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';



function Sidebar() {
    return (
        <>
            <div className="sidebar" title="sidebar">
                <TwitterIcon className="twitter--icon" />
                {/* <Link to="/"> */}
                    <div>
                        <SideMenu Icon={HomeIcon} text="Home" />
                    </div>
                {/* </Link> */}

                <SideMenu Icon={TagIcon} text="Explore" />
                <SideMenu Icon={NotificationsNoneIcon} text="Notifications" />
                <SideMenu Icon={MailOutlineIcon} text="Messages" />
                <SideMenu Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SideMenu Icon={ListAltIcon} text="Lists" />
                <SideMenu Icon={PermIdentityIcon} text="Profile" />
                <SideMenu Icon={MoreHorizIcon} text="More" />
                <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
                <div style={{
                    height: "20px",
                }}></div>
                <AmplifySignOut />
            </div>
        </>
    )
}

export default Sidebar