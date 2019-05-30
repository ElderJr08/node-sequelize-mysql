const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


router.get('/', (req, res)=>{
    res.send("Hello!");
})

router.get('/users/:id', async (req, res) => {
    User.sync().then(() =>{
        const { id } = req.params;
        User.findAll({
            where:{
                id: id
        }})
        .catch((err) =>{
            res.status(400).json(err);
        })
        .done((response) =>{
            res.status(200).json(response);
        })
    });
});

router.post('/create', (req, res)=>{
    User.sync().then(() => {
        const { id, accountId, sessionId, optIn } = req.body;
        User.create({
            id: id,
            accountId: accountId,
            sessionId: sessionId,
            optIn: optIn
        })
        .catch((err) =>{
            res.status(400).json(err);
        })
        .done((response)=>{
            res.status(200).json(response);
        })
    });
});


module.exports = router;