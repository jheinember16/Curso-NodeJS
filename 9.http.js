const htttp = require("node:http")

const server = htttp.createServer((req, res) => {
    console.log("request received")
    res.end("Hola mundo")
})

server.listen(3000, () => {
    console.log("server listening on port 3000")
})