const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('5ef3acdf771927d50991d2b6')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://damiandevega:8WCxqZgrhMhDlIa5@ecommerceshop-mrrwz.mongodb.net/shop?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    app.listen(3000)
  })
  .catch(error => {
    console.log(error)
  })

// MongoClient.connect(
//   'mongodb+srv://damiandevega:8WCxqZgrhMhDlIa5@ecommerceshop-mrrwz.mongodb.net/shop?retryWrites=true&w=majority',
//   { useUnifiedTopology: true }
// )