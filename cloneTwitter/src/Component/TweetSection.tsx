import { Button, Avatar } from "@mui/material";
import CollectionsIcon from '@mui/icons-material/Collections';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./TweetSection.css";

function TweetSection() {
    return (
        <div className="TweetSection">
            <form>
                <div className="TweetSection__input">
                    <Avatar src="https://twitter.com/KolkataPolice/photo" />
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