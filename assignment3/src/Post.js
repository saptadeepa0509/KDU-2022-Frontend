import express from "express";
import casual from "casual";
import cors from "cors";


const posts = express();
posts.use(cors());


function post() {
    return ({
        userName: casual.username,
        displayName: casual.username,
        verified: true,
        image: "https://pbs.twimg.com/media/FGR7ylKVcAIehZ4?format=png&name=small",
        avatar: "https://pbs.twimg.com/media/FGR7ylKVcAIehZ4?format=png&name=small",
        content: casual.word
    })
}

posts.get('/posts', (req, res) => {
    let userPost = []
    for (let i = 0; i < 5; i++) {
        userPost.push(post())
    }
    res.send(userPost)
})

posts.listen(9000, () => {
    console.log("served at 9000")
})