
import React, { useEffect, useState } from "react";
import TweetSection from "./TweetSection";
import "./MiddleSection.css"
import Post from './Post';

interface Iposts {

    userName: string,
    displayName: string,
    verified: true,
    image: string,
    avatar: string,
    content: string,

}

function MiddleSection() {

    const [posts, setposts] = useState<(Iposts)[]>([])
    const fetchPosts = async () => {
        try {
            const Data = await fetch("http://localhost:9000/posts")
            const jsonData = await Data.json();
            const resp = jsonData.map((post: any) => {
                return {
                    text: post.content,
                    displayName: post.displayName,
                    username: post.userName,
                    verified: post.verified,
                    image: post.image,
                    avatar: post.avatar
                }
            })
            setposts(resp)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { fetchPosts() }, [])

    return (
        <div className="Middlesection">
            <div className="Middlesection__header" >
                <h2>Home</h2>
            </div>
            <TweetSection />
            <main>
                {posts.map(post => (
                    <Post
                        text={post.content}
                        displayName={post.displayName}
                        username={post.userName}
                        verified={post.verified}
                        image={post.image}
                        avatar={post.avatar}

                    />
                ))}

            </main>
        </div>
    )
}

export default MiddleSection