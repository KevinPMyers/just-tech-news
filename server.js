const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
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