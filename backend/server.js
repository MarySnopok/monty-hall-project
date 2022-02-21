import express from "express";

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const iterations = Number(req.body.iterations);
  const isSwitching = req.body.isSwitching;

  // res.send("Hello thoughts!");
  // res.status(201).json({ response: , success: true });
});

// app.get("/", async (req, res) => {

//   res.status(201).json({ response: thoughts, success: true });
// });

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
