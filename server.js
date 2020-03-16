const express = require("express");
const PORT = process.env.PORT || 4040;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/assets', express.static('public'));
// app.use('/assets/js', express.static(path.join(__dirname, 'public')));

require("./Develop/routes/htmlRoutes")(app);
require("./Develop/routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});
