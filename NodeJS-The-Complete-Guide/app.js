const path = require('path');
const express = require('express');

const rootDir = require('./util/path');

const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
    console.log('server is running on port 3000');
});