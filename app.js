const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const root = path.join(__dirname, 'public')

app.use(express.json())
app.use(express.static('public'))


const jokes = [
    {
        id: 1,
        joke: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta."
    },
    {
        id: 4,
        joke: "Why was the math book sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 5,
        joke: "What did one ocean say to the other ocean?",
        punchline: "Nothing, they just waved."
    },
    
]


app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const r = Math.floor(Math.random() * jokes.length) 
    response.send(jokes[r])
})


app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`))