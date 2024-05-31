const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user");
});
router.get("/user", (req, res) => {
  res.send("user/user");
});

router.post("/user", (req, res) => {
  res.send("user/user");
});
router.get("/:id", (req, res) => {
  //   const { id } = req.params; // id is the property of the req object
  const id = req.params.id;
  res.send(`user id is ${id}`);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`update user for user id: ${id}`);
});
router.delete("/:id", (req, res) => {
  //   const { id } = req.params; // id is the property of the req object
  const id = req.params.id;
  res.send(`Delete user for id: ${id}`);
});

// we make chain with the same route with different request.
// The folllowing pattern will be the same as the top route
// router
//   .route("/:id")
//   .get((req, res) => {
//     const id = req.params.id;
//     res.send(`user id is ${id}`);
//   })
//   .put((req, res) => {
//     const id = req.params.id;
//     res.send(`update user for user id: ${id}`);
//   })
//   .delete((req, res) => {
//     //   const { id } = req.params; // id is the property of the req object
//     const id = req.params.id;
//     res.send(`Delete user for id: ${id}`);
//   });

module.exports = router;
