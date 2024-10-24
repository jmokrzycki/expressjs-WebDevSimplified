const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // query params np. http://localhost:3000/users?name=Kyle
  console.log(req.query.name);
  res.send("User list");
});

router.get("/new", (req, res) => {
  // (1)* wysyla firstName w body do /users (name w inpucie)
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }

  // (2)* odbiera firstName w body do /users
  // domyslnie nie ma dostepu do body, trzeba dodac app.use(express.urlencoded({ extended: true}))
  // console.log(req.body.firstName);
  // res.send("Create user");
});

router
  .route("/:id")
  .get((req, res) => {
    // (2) Odczytuje user z req
    // console.log(req.user);
    res.send(`User Get ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`User Get ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`User Get ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  //middleware
  // (1) Zapisuje user w req
  req.user = users[id];
  next();
});

// router.get("/:id", (req, res) => {
//   res.send(`User Get ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`User Get ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`User Get ${req.params.id}`);
// });

module.exports = router;
