const express = require("express");
const app = express();

app.set("view engine", "ejs");

// http://localhost:3000 dla pliku w public/index.html
// http://localhost:3000/test/tt.html dla pliku w public/test/tt.html
// app.use(express.static("public")); //static pages

// dodaje dostep do body, np req.body.firstName
app.use(express.urlencoded({ extended: true }));
// analogicznie dla json
// app.use(express.json());

// app.use(logger); // middleware

app.get(
  "/",
  /*logger, logger, logger,*/ (req, res) => {
    // res.send("Hi");
    // res.sendStatus(500);
    // res.status(500).send("Hi");
    // res.status(500).json({ message: "Error" });
    // res.download("server.js");
    res.render("index", { text: "World" }); // index.ejs in /routes
  }
);

const userRouter = require("./routes/users");

// obsluga adresow dla /users
app.use("/users", userRouter);

function logger(req, res, next) {
  // middleware logger, uzyty w app.get i app.use
  console.log(req.originalUrl);
  // next zeby nie blokowac i kontynuowac dzialanie aplikacji
  next();
}

app.listen(3000);
