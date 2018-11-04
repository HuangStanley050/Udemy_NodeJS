const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);


app.listen(process.env.PORT, process.env.IP);
