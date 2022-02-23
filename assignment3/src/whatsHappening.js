import express from "express";
import casual from "casual";
import cors from "cors";


const app = express();
app.use(cors());



function WhatsHappening() {
    return ({
        dataType: "whatshappening",
        WhatsHappeningHeader: casual.word,
        WhatsHappeningStatus: 'LIVE',
        WhatsHappeningContent: casual.description,
        WhatsHappeningPhoto: 'https://pbs.twimg.com/semantic_core_img/1485540463318765568/KxOjh4CA?format=jpg&name=240x240',
    })
}

function trending() {
    return {
        dataType: "trending",
        hastag: "#GATE2022",
        header: "Trending in India",
        numtweets: "14.7K Tweets",
    }
}

app.get('/api.twitter.com/users/update/:id', (req, res) => { //users/id/whatshappening   //
    // const {id} = req.params
    // if (id > 3) {
    //     return res.json({"status": "error", "message": "id not found"})
    // }

    let userShowWhatsHappening = []
    for (let i = 0; i < 3; i++) {
        userShowWhatsHappening.push(WhatsHappening())
    }
    for (let i = 0; i < 2; i++) {
        userShowWhatsHappening.push(trending())
    }
    //console.log(userShowWhatsHappening)
    res.send(userShowWhatsHappening)

})


app.listen(10000, () => {
    console.log("Server started on port 10000")
})