import express from "express";
import cors from "cors";
import fs from "fs/promises";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3333;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port})`);
});

app.get("/", async (req, res) => {
    res.send("Hello World");
});

app.get("/users", async (req, res) => {
    const data = await fs.readFile("./users.json");
    const users = await JSON.parse(data);
    res.json(users);
});

app.post("/users", async (req, res) => {
    const newUser = req.body;
    newUser.id = new Date().getTime();
    const data = await fs.readFile("./users.json");
    const users = JSON.parse(data);
    users.push(newUser);
    fs.writeFile("./users.json", JSON.stringify(users));
    res.json(users);
});