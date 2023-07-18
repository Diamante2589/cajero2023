const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "nestor",
    website: "nestore.com",
  };
  res.json(data);
});

module.exports = router;
