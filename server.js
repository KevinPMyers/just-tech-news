const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});









// insomnia fill
// {
// 	"username": "RonBurgundy",
// 	"email": "Rburgundy@channel4news.com",
// 	"password": "jazzflute"
// }

// {
// 	"title": "Baxter is the goodest boy",
// 	"post_url": "channel4news.com",
// 	"user_id": 1
// }

// {
//     "user_id": 1,
//     "post_id": 1
// }

// {
//     "comment_text": "Great article!",
//     "user_id": 1,
//     "post_id": 1
// }