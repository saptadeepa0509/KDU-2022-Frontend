
import { useEffect, useState } from "react"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import "./RightBar.css"

interface IContent {
    dataType: "whatshappening"
    WhatsHappeningHeader: string
    WhatsHappeningStatus: string
    WhatsHappeningContent: string
    WhatsHappeningPhoto: string
}
interface ITrending {
    dataType: "trending"
    hastag: string
    header: string
    numtweets: number
}

function RightBar() {
    const [content, setContent] = useState<(IContent | ITrending)[]>([])
    const fetchWhatsHappeningData = async () => {
        const Data = await fetch(
            "http://localhost:5000/api.twitter.com/users/update/3"
        )
        const jsonData = await Data.json()
        //console.log(jsonData);
        return jsonData
    }
    useEffect(() => {
        ; (async () => {
            const resp = await fetchWhatsHappeningData()
            setContent(resp)
        })()
    }, [])
    return (
        <div className="rightBar">
            <div className="input">
                <SearchOutlinedIcon className="search_icon" />
                <input placeholder="search Twitter" type="text" />
            </div>
            <div className="container">
                <h2>What's Happening</h2>
                <ul className="content">
                    {content.map((item, idx) => (
                        <li
                            className={
                                item.dataType === "whatshappening" ? "item-1" : "item-2"
                            }
                            key={idx}
                        >
                            {item.dataType === "whatshappening" ? (
                                <>
                                    <div className="item-1-content">
                                        <a className="nav-link">{item.WhatsHappeningHeader}</a>
                                        <span> · </span>
                                        <span className="nav-link">
                                            {item.WhatsHappeningStatus}
                                        </span>
                                        <p>{item.WhatsHappeningContent}</p>
                                    </div>
                                    <div>
                                        <img src={item.WhatsHappeningPhoto} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <a className="nav-link">{item.header}</a>
                                    <p>{item.hastag}</p>
                                    <a className="nav-link">{item.numtweets} tweets</a>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                <a id="show-more-btn" href="#">
                    Show more
                </a>
            </div>
        </div>
    )
}

export default RightBar