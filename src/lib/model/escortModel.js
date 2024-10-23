const { default: mongoose } = require("mongoose");

const escortModels = new mongoose.Schema({
  name: String,
  image: String,
  money: String,
});

export const escortModel =
  mongoose.models.escorts || mongoose.model("escorts", escortModels);
