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



function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <TwitterIcon className="twitter--icon" />
                <SideMenu Icon={HomeIcon} text="Home" />
                <SideMenu Icon={TagIcon} text="Explore" />
                <SideMenu Icon={NotificationsNoneIcon} text="Notifications" />
                <SideMenu Icon={MailOutlineIcon} text="Messages" />
                <SideMenu Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SideMenu Icon={ListAltIcon} text="Lists" />
                <SideMenu Icon={PermIdentityIcon} text="Profile" />
                <SideMenu Icon={MoreHorizIcon} text="More" />
                <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            </div>
        </>
    )
}

export default Sidebar