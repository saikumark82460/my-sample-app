const app=require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
