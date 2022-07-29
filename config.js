exports.port = process.env.PORT || 5001;
exports.origin =
  "https://whispering-forest-83978.herokuapp.com" ||
  `http://localhost:${exports.port}`;
