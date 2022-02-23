import { Button, Avatar } from "@mui/material";
import CollectionsIcon from '@mui/icons-material/Collections';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./TweetSection.css";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { setUser } from './features/user'
import { useDispatch } from 'react-redux';

function TweetSection() {
    const dispatch = useDispatch();

    return (
        <div className="TweetSection" title="tweet">
            <form>
                <div className="TweetSection__input">
                    {/* <BrowserRouter> */}
                    <Link to="/profile">
                        <Avatar onClick={
                            () => dispatch(setUser({
                                name: "Kickdrum",
                                id: "@kickdrum",
                                avatar: "data:image/png;base64,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",
                            }))
                        } src="data:image/png;base64,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" />
                    </Link>
                    {/* </BrowserRouter> */}

                    <input placeholder="What's Happening ?" />
                </div>
                <div className="tweet-options">
                    <div className="TweetSection__input-icons">
                        <CollectionsIcon />
                        <GifIcon />
                        <PollIcon />
                        <SentimentSatisfiedAltIcon />
                        <CalendarTodayIcon />
                        <LocationOnIcon />
                    </div>
                    <Button variant="outlined" className="TweetSection__tweetButton">Tweet</Button>
                </div>

            </form>
        </div>
    )
}

export default TweetSection