const express = require("express");
const PORT = process.env.PORT || 4080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// app.use('/assets', express.static('public'));
// app.use('/assets/js', express.static(path.join(__dirname, 'public')));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});
