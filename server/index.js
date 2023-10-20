const express = require("express");
const app = express();
const cors = require("cors");
const port = 7000;

app.listen(port, () => {
    console.log(`server has started on port`, port)
})

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get("/utxos", async(req,res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/utxo/list");
        const jsonData = await response.json();
        res.json(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});