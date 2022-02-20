import { Avatar, Typography } from "@mui/material";
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import "./Post.css";
import Verified from '@mui/icons-material/Verified';

interface Ipost {
    displayName: string,
    username: string,
    verified: boolean,
    text: string,
    image: string,
    avatar: string,
}


function Post({ displayName, username, verified, text, image, avatar }: Ipost) {
    // function Post() {
    return (
        <div className='post'>
            <div>
                <Avatar src={avatar} />
            </div>
            <div>
                {/* <Typography variant='h6'> */}
                <span className='post-user'>
                    {displayName}
                    {verified && <VerifiedIcon />}
                </span>

                {/* </Typography> */}
                <span className='post-user-handle'>@{username}</span>

                <p className='post-content'>
                    {text}
                </p>
                <img className='post-img' src={image} alt="" />

                <div className='post-actions'>
                    <span>
                        <ChatBubbleOutlinedIcon />
                        <span>400</span>
                    </span>
                    <span>
                        <CachedIcon />
                        <span>400</span>
                    </span>
                    <span>
                        <FavoriteIcon />
                        <span>400</span>
                    </span>
                    <span>
                        <FileUploadOutlinedIcon />
                        <span>400</span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Post