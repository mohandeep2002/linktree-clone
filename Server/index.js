const app = require("express")();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("https://localhost:3000/");
});
