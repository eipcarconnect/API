const express = require('express')
const app = express()
const port = 8080

app.use(express.static("doc"));

app.listen(port, () => console.log(`Doc webstie listening on  ${port}!`))