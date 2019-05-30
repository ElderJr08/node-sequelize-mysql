const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);


// User.sync().then(() => {
//     User.create({
//         firstName: 'John2',
//         lastName: 'Hancock2'
//     });
// });

app.listen(3535, ()=>{
    console.log('RUUUUUUUUUUUN');
})


