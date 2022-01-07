const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());
const { addUser, selectUser } = require("./user");

app.get("/users", async (req, res) => {
  const data = await selectUser();
  res.json(data);
});

app.post("/add-user", async (req, res) => {
  const list = req.body;
  await addUser(list);
  res.json({ message: "The data is sent successfully" });
});
app.listen(4000, () => console.log("Server Started"));
