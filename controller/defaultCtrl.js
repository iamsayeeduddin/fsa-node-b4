function get(req, res) {
  res.status(200);
  res.send("Hello World");
}

function health(req, res) {
  res.status(200);
  res.send("Server is Running!");
}

module.exports = {
  get,
  health,
};
