const express = require("express");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())


const control = require("./controller")

app.get("/api/houses", control.getHouses)
app.post("/api/houses", control.createHouses)
app.put("/api/houses/:id", control.updateHouses)
app.delete("/api/houses/:id", control.deleteHouses)


app.listen(4004, () => console.log("run 4004"))
